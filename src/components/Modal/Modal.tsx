
import { Icon } from "@iconify/react";
import { IprivilegeDatа } from "../../interfaces/models";


interface ModalProps {
  open: boolean;
  handleClose: () => void;
  dataCard: IprivilegeDatа;
  children: React.ReactNode
}
const Modal = ({ open, handleClose, dataCard, children }: ModalProps) => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  
  return (
    <div className={`modal ${open ? "modal_visible" : ""}`} onClick={handleClose}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">{dataCard.name}</h2>
          <div className="modal__close-button" onClick={handleClose}>
            <Icon icon="ei:close" width="34" className="icon" />
          </div>
        </div>
        {children}
        <div className="modal__controls"></div>
      </div>
    </div>
  );
};

export default Modal;