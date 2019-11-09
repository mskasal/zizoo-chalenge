import React from 'react'
import PropTypes from 'prop-types'

import { HeartIcon, HeartIconEmpty } from '../../icons'

import './Favorite.scss'

const Favorite = ({ inFavorite, onClick }) => (
  <button type="button" className="favorite-button" onClick={onClick}>
    {inFavorite ? <HeartIcon /> : <HeartIconEmpty />}
  </button>
)

Favorite.propTypes = {
  inFavorite: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export { Favorite }
