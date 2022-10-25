import cardImg from '../../img/cardImg.jpg'
import IprivilegeDatа from '../../interfaces/models'

interface cardProps {
  card: IprivilegeDatа;
}

const Card = ({card}: cardProps) => {
  return (
    <div className='card'>
      <div className="card__img-container">
        <img className='card__img' src={cardImg} alt="Фоновая картинка" />
      </div>
      <div className="card__content">
        <p className='card__text card__text_timing'>{card.dateStop === '' ? 'БЕССРОЧНО' : card.dateStop }</p>
        <p className='card__text card__text_title'>{card.name}</p>
        <p className='card__text card__text_descript'>{card.description}</p>
      </div>
    </div>
  )
}

export default Card;
