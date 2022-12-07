import cardImg from "../../img/cardImg.jpg";
import {IprivilegeDatа} from "../../interfaces/models";

interface СardPrivilegeProps {
  card: IprivilegeDatа;
  handleClick: (event: React.MouseEvent<HTMLElement>, card: IprivilegeDatа) => void;
}

const СardPrivilege = ({ card, handleClick }: СardPrivilegeProps) => {

  return (
    <div onClick={(e) => handleClick(e, card)} className='СardPrivilege'>
      <div className="СardPrivilege__img-container">
        <img className='СardPrivilege__img' src={cardImg} alt="Фоновая картинка" />
      </div>
      <div className="СardPrivilege__content">
        <p className='СardPrivilege__text СardPrivilege__text_timing'>{card.dateStop === "" ? "БЕССРОЧНО" : card.dateStop}</p>
        <p className='СardPrivilege__text СardPrivilege__text_title'>{card.name}</p>
        <p className='СardPrivilege__text СardPrivilege__text_descript'>{card.description}</p>
      </div>
    </div>
  );
};

export default СardPrivilege;
