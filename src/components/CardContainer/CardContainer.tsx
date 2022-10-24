import Card from '../Card/Card';
import cardData from '../../data/cards'
import IprivilegeDatа from '../../interfaces/models'

const CardContainer = () => {
  return (
    <div className='card-container'>
      {cardData.map((item: IprivilegeDatа) => {
        return <Card card={item} key={item.id} />
      })}
    </div>
  )
}

export default CardContainer;
