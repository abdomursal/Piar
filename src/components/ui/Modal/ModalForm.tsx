import { useState } from "react";
import { addStation, editStation } from "../../../lib/stations";
import { addUser, editUser } from "../../../lib/users";
import { useAppDispatch } from "../../../store/hooks";
import { closeModal } from "../../../store/modalReducer";
import Button from "../Button";

type EditFormProps = {
  data: Record<string, any>;
  isUser: boolean;
  isNew: boolean;
};

const EditForm = ({ isUser, isNew, data }: EditFormProps) => {
  const [tempData, settempData] = useState(data);
  const dispatch = useAppDispatch();
  const apiCall = isUser
    ? isNew
      ? addUser
      : editUser
    : isNew
    ? addStation
    : editStation;

  const handleSubmit = async () => {
    const prepareData = {
      ...data,
      ...tempData,
    };

    const apiCallResponse = await apiCall(prepareData);
    dispatch(closeModal());
    window.location.reload();
  };

  return (
    <form className="form">
      <label className="label">
        <p className="idWrap">
          {isUser ? "users" : "Station"}
          {!isNew ? `ID: ${data?.id}` : " Create"}
        </p>
        <p>Name</p>
        <input
          className="input"
          type="text"
          name="name"
          value={tempData?.name}
          placeholder={data?.name}
          onChange={(e) => settempData({ ...tempData, name: e.target.value })}
        />
        <p>Comment</p>
        <input
          className="input"
          type="text"
          name="comment"
          value={tempData?.comment}
          placeholder={data?.comment}
          onChange={(e) =>
            settempData({ ...tempData, comment: e.target.value })
          }
        />
        {isUser && (
          <>
            <p>Email</p>
            <input
              className="input"
              type="email"
              name="email"
              value={tempData?.login}
              placeholder={tempData?.login}
              onChange={(e) =>
                settempData({ ...tempData, login: e.target.value })
              }
            />
            <p>password</p>
            <input
              className="input"
              type="password"
              name="password"
              value={tempData?.password}
              onChange={(e) =>
                settempData({ ...tempData, password: e.target.value })
              }
            />
          </>
        )}
      </label>
      <Button onClick={handleSubmit} title={"save"} />
    </form>
  );
};

export default EditForm;
