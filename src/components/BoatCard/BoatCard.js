import React from 'react'
import PropTypes from 'prop-types'

const BoatCard = props => {
  const { name } = props

  return (
    <div className="boat-card">
      <div className="boat-card__img">{name}</div>
    </div>
  )
}

BoatCard.propTypes = {
  name: PropTypes.string.isRequired,
}

export { BoatCard }
