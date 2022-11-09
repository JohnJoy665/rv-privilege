import Card from "../Card/Card";
import cardData from "../../data/cards";
import {IprivilegeDatа} from "../../interfaces/models";

interface CardContainerProps {
  newFilter: string;
  handleClick: (event: React.MouseEvent<HTMLElement>, card: IprivilegeDatа) => void;
}

const CardContainer = ({ newFilter, handleClick }: CardContainerProps) => {

  const filteredPrivelege = cardData.filter((item) => (item.category === newFilter));
  return (
    <div className='card-container'>
      {filteredPrivelege.map((item: IprivilegeDatа) => (<Card card={item} key={item.id} handleClick={handleClick} />))}
    </div>
  );
};

export default CardContainer;
