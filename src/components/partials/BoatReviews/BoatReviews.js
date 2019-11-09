import React from 'react'
import PropTypes from 'prop-types'

import { StarRating } from '../../../shared/components'
import { reviewsShape } from '../../BoatCard/Boat.propTypes'

import './BoatReviews.scss'

const BoatReviews = ({ reviews, boatId }) => (
  <div className="boat-reviews">
    <StarRating
      rating={reviews.rating}
      size={5}
      onRatingSelected={rating => console.log(rating, boatId)}
    />
    <span className="name">
      {reviews.count}
      &nbsp;REVIEWS
    </span>
  </div>
)

BoatReviews.propTypes = {
  reviews: reviewsShape.isRequired,
  boatId: PropTypes.number.isRequired,
}

export { BoatReviews }
