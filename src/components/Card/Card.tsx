import React from 'react';
import cardImg from '../../img/cardImg.jpg'

const Card = () => {
  return (
    <div className='card'>
      <div className="card__img-container">
        <img className='card__img' src={cardImg} alt="Фоновая картинка" />
      </div>
      <div className="card__content">
        <p className='card__text card__text_timing'>БЕССРОЧНО</p>
        <p className='card__text card__text_title'>Сеть бизнес клубов СССР</p>
        <p className='card__text card__text_descript'>Узнать подробную информацию, кодовое слово, телефон, персонального инструктора</p>
      </div>
    </div>
  )
}

export default Card;
