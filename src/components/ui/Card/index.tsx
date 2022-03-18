import console from "console";
import { removeStation } from "../../../lib/stations";
import { removeUser } from "../../../lib/users";
import { useAppDispatch } from "../../../store/hooks";
import { addToModal } from "../../../store/modalReducer";
import { CardProps } from "../../../types/ui/Card";
import DateFormat from "../../../utils/DateFormat";
import "./Card.css";

const Card = ({ typeCard, items }: CardProps) => {
  const dispatch = useAppDispatch();
  const name = typeCard === "users" ? "User" : "Station";
  const apiCall = typeCard === "users" ? removeUser : removeStation;

  const alertHandle = async () => {
    if (window.confirm(`Are you sure want to delete this ${name}`)) {
      const deleteResult = await apiCall(items?.id);
      console.log(deleteResult)
    }
    window.location.reload();
    return;
  };

  const modalDataHandler = () => {
    dispatch(
      addToModal({
        items,
        type: "edit",
        activeSection: typeCard,
        isOpen: "true",
      })
    );
  };

  return (
    <div
      className="cardContainer"
      style={{
        borderBottomColor:
          name === "User" ? 'var(--wellBlue)' : 'var(--orange)',
      }}
    >
      <div className="labelContainer">
        <p>
          {name} name : {items?.name}{" "}
        </p>
        <p>comment: {items?.comment}</p>
        <p>create data: {DateFormat(items?.created_at)}</p>
        <p>update: {DateFormat(items?.updated_at)}</p>
      </div>
      <div className="buttonsWrap">
        <img
          src={"./edit.png"}
          width="20"
          height="20"
          alt="edit buttom"
          className="editIcon"
          onClick={modalDataHandler}
        />
        <img
          src={"./delete.png"}
          width="20"
          height="20"
          alt="delete button"
          className="deleteIcon"
          onClick={() => alertHandle()}
        />
      </div>
    </div>
  );
};

export default Card;
