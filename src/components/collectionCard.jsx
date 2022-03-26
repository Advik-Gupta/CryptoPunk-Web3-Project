import React from 'react'
import './collectionCard.css'
import eth from '../assets/eth.png'

const CollectionCard = ({id, name, traits, image}) => {
  return (
    <div className='collectionCard'>
        <img src={image} alt="" />
        <div className="details">
            <div className="name">{name}</div>
            <div className="id">Punk ID - {id}</div>
        </div>
        <div className="priceContainer">
            <img src={eth} className="ethImage" alt="" />
            <div className="price">{traits[0]?.value}</div>
        </div>
    </div>
  )
}

export default CollectionCard;