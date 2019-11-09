import React from 'react'

import { priceShape } from '../../BoatCard/Boat.propTypes'
import { HelpIcon } from '../../../shared/icons'

import './BoatPrice.scss'

const BoatPrice = ({ price }) => (
  <div className="boat-price">
    <span className="boat-price__starts">FROM</span>
    <div className="boat-price__details">
      <span className="currency">{price.currency}</span>
      <span className="amount">{price.amount}</span>
      <span className="interval">{price.interval}</span>
      <HelpIcon />
    </div>
  </div>
)

BoatPrice.propTypes = {
  price: priceShape.isRequired,
}

export { BoatPrice }
