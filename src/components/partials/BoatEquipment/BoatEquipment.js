import React from 'react'
import { specShape } from '../../BoatCard/Boat.propTypes'

import './BoatEquipment.scss'

// I am trying to stick by my mock data structure :\
function limitEquipmentCount(text) {
  return text
    .split(',')
    .slice(0, 2)
    .join(',')
}

const BoatEquipment = ({ spec }) => {
  const shortenedValue = limitEquipmentCount(spec.value)

  return (
    <div className="boat-equipment">
      <span className="name">{spec.name}</span>
      <span className="value">{shortenedValue}</span>
      <span className="value desktop">{spec.value}</span>
    </div>
  )
}

BoatEquipment.propTypes = {
  spec: specShape.isRequired,
}

export { BoatEquipment }
