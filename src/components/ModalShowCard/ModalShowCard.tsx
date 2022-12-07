
import cardImg from "../../img/cardImg2.png";
import Paragraph from "../Paragraph/Paragraph";
import { Icontacts, IprivilegeDatа } from "../../interfaces/models";


interface ModalProps {
  dataCard: IprivilegeDatа
}

const ModalShowCard = ({ dataCard }: ModalProps) => {
  return (
  // <div className={`modal ${open ? "modal_visible" : ""}`} onClick={handleClose}>
  //   <div className="modal__container" onClick={e => e.stopPropagation()}>
    <div className="modal__body">
      <div className="modal__info">
        <Paragraph title={"Об акции"} text={dataCard.description} />
        <Paragraph title={"Условия"} text={dataCard.specification} />
        {dataCard.docs.length > 0 && <Paragraph title={"Материалы"} docs={dataCard.docs} />}
        {dataCard.contacts && dataCard.contacts.length > 0 && dataCard.contacts.map((item: Icontacts, i: number) => (<Paragraph key={i} title="Контакты" contacts={item} />))}
      </div>
      <div className="modal__img">
        <img src={cardImg} alt="" />
      </div>
    </div>
  //   </div>
  // </div>
  );
};

export default ModalShowCard;