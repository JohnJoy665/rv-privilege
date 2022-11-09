import { Icon } from "@iconify/react";
import cardImg from "../../img/cardImg2.png";
import Paragraph from "../Paragraph/Paragraph";
import {IprivilegeDatа, Icontacts} from "../../interfaces/models";


interface ModalProps {
  open: boolean;
  handleClose: () => void;
  dataCard: IprivilegeDatа;
}
const Modal = ({ open, handleClose, dataCard }: ModalProps) => {
  console.log(dataCard);
  return (
    <div className={`modal ${open ? "modal_visible" : ""}`} onClick={handleClose}>
      <div className="modal__container" onClick={e => e.stopPropagation()}>
        <div className="modal__header">
          <h2 className="modal__title">{dataCard.name}</h2>
          <div className="modal__close-button" onClick={handleClose}>
            <Icon icon="ei:close" width="34" className="icon" />
          </div>
        </div>
        <div className="modal__body">
          <div className="modal__info">
            <Paragraph title={"Об акции"} text={dataCard.description}/>
            <Paragraph title={"Условия"} text={dataCard.term}/>
            {dataCard.docs.length>0 && <Paragraph title={"Материалы"} docs={dataCard.docs}/>}
            {dataCard.contacts && dataCard.contacts.length > 0 && dataCard.contacts.map((item: Icontacts, i: number) => (<Paragraph key={i} title="Контакты" contacts={item}/>))}
          </div>
          <div className="modal__img">
            <img src={cardImg} alt="" />
          </div>
        </div>
        <div className="modal__controls"></div>
      </div>
    </div>
  );
};

export default Modal;