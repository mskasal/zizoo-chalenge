import React from 'react'
import PropTypes from 'prop-types'

import { Favorite } from '../../../shared/components'

import { regionShape } from '../../BoatCard/Boat.propTypes'

import './BoatName.scss'

const BoatName = ({
  name,
  sailYear,
  region,
  inFavorites,
  onFavoriteClicked,
}) => (
  <div className="boat-name">
    <div className="title">
      <h3>{name}</h3>
      <span className="sail-year">{sailYear}</span>
      <a href={`?city=${region.city.id}`}>{region.city.name}</a>
      <span>,</span>
      <a href={`?country=${region.country.id}`}>{region.country.name}</a>
    </div>

    <Favorite inFavorite={inFavorites} onClick={onFavoriteClicked} />
  </div>
)

BoatName.propTypes = {
  name: PropTypes.string.isRequired,
  sailYear: PropTypes.string.isRequired,
  region: regionShape.isRequired,
  onFavoriteClicked: PropTypes.func.isRequired,
  inFavorites: PropTypes.bool.isRequired,
}

export { BoatName }
