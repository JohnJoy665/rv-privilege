import Card from "../Card/Card";
import cardData from "../../data/cards";
import IprivilegeDatа from "../../interfaces/models";

interface CardContainerProps {
  newFilter: string;
}

const CardContainer = ({ newFilter }: CardContainerProps) => {
  const filteredPrivelege = cardData.filter((item) => (item.category === newFilter));
  return (
    <div className='card-container'>
      {filteredPrivelege.map((item: IprivilegeDatа) => {
        return <Card card={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardContainer;
