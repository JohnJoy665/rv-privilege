import React from 'react';
import Card from '../Card/Card';
import cardData from '../../data/cards'
import privilegeDate from '../../models'

const CardContainer = () => {
  const cards = cardData.map((item:privilegeDate) => {
    return <Card card={item} key={item.id}/>
  })
  return (
    <div className='card-container'>
      {cards}
    </div>
  )
}

export default CardContainer;
