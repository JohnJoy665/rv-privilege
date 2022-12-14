import Card from '../Card/Card';
import cardData from '../../data/cards'
import IprivilegeDatŠ° from '../../interfaces/models'

const CardContainer = () => {
  return (
    <div className='card-container'>
      {cardData.map((item: IprivilegeDatŠ°) => {
        return <Card card={item} key={item.id} />
      })}
    </div>
  )
}

export default CardContainer;
