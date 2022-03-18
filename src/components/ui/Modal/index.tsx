import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeModal } from "../../../store/modalReducer";
import { ModalProps } from "../../../types/ui/Modal";
import ModalForm from "./ModalForm";
import "./Modal.css";

const Modal = ({ show }: ModalProps) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const modal = useAppSelector((state) => state.modal);
  const data = useAppSelector((state) => state.modal.data);
  const dispatch = useAppDispatch();

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <img
          src="./exit.png"
          width={20}
          height={20}
          className={"exitIcon"}
          onClick={() => dispatch(closeModal())}
        />
        <ModalForm
          data={data}
          isNew={modal.modalType !== "edit"}
          isUser={modal.activeSection === "users"}
        />
      </section>
    </div>
  );
};

export default Modal;
