import React from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode;
}
const Modal = ({ modalOpen, setModalOpen, children }: ModalProps) => {
  return (
    <div>
      <dialog
        id="my_modal_3"
        className={`modal ${modalOpen ? "modal-open" : ""}`}
      >
        <div className="modal-box relative">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                setModalOpen(false);
              }}
            >
              ✕
            </button>
          </form>
          {children}
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
