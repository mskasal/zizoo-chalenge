import React from 'react'

import PropTypes from 'prop-types'

import { EmptyStarIcon, StarIcon } from '../../icons'

import './StarRating.scss'

const StarRating = props => {
  const { rating = 0, count = 5, iconSize, onRatingSelected } = props

  const starsArray = count > 0 ? Array(count).fill(1) : []

  return (
    <div className="star-rating">
      {starsArray.map((_, index) => {
        const key = `start-${index.toString()}`

        return rating > index ? (
          <button
            type="button"
            key={key}
            onClick={() => onRatingSelected(index + 1)}
          >
            <StarIcon width={iconSize} height={iconSize} />
          </button>
        ) : (
          <button
            type="button"
            key={key}
            onClick={() => onRatingSelected(index + 1)}
          >
            <EmptyStarIcon width={iconSize} height={iconSize} />
          </button>
        )
      })}
    </div>
  )
}

StarRating.defaultProps = {
  rating: 0,
  count: 5,
  iconSize: 14,
  onRatingSelected: () => {},
}

StarRating.propTypes = {
  rating: PropTypes.number,
  count: PropTypes.number,
  iconSize: PropTypes.number,
  onRatingSelected: PropTypes.func,
}

export { StarRating }
