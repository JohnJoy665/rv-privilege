import Card from '../Card/Card';
import cardData from '../../data/cards'
import IprivilegeDatа from '../../interfaces/models'

const CardContainer = ({ newFilter }: { newFilter: string }) => {


  const filteredPrivelege = cardData.filter((item) => {
    return item.category === newFilter
  })


  return (
    <div className='card-container'>
      {filteredPrivelege.map((item: IprivilegeDatа) => {
        return <Card card={item} key={item.id} />
      })}
    </div>
  )
}

export default CardContainer;
