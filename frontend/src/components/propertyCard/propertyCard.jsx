import React from 'react'
import './propertyCard.css'
const propertyCard = ({card}) => {
  return (
<div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>pk</span>
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
                <span className="secondaryText">{card.city}</span>
              </div>
  )
}

export default propertyCard
