import React from 'react';
import cardImg from '../../img/cardImg.jpg'
import privilegeDate from '../../models'

interface cards {
  cardProps: privilegeDate;
}

const Card = (props:cards) => {
  return (
    <div className='card'>
      <div className="card__img-container">
        <img className='card__img' src={cardImg} alt="Фоновая картинка" />
      </div>
      <div className="card__content">
        <p className='card__text card__text_timing'>{props.cardProps.date_stop}</p>
        <p className='card__text card__text_title'>{props.cardProps.name}</p>
        <p className='card__text card__text_descript'>{props.cardProps.description}</p>
      </div>
    </div>
  )
}

export default Card;
