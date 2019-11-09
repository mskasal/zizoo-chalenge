import React from 'react'

import { badgeShape } from '../../BoatCard/Boat.propTypes'

import './BoatBadge.scss'

const BoatBadge = ({ badge }) => {
  const { id, name, type } = badge
  return (
    <a href={`/boats/recommended/${id}`} className={`boat-badge ${type}`}>
      {name}
    </a>
  )
}

BoatBadge.propTypes = { badge: badgeShape.isRequired }
export { BoatBadge }
