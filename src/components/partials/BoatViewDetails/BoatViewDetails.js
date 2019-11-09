// eslint-disable-next-line no-unused-vars
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { FlashIcon } from '../../../shared/icons'

import './BoatViewDetails.scss'
import viewDetailsImageLow from '../../../assets/images/view-details.png'
import viewDetailsImage from '../../../assets/images/view-details@2x.png'
import viewDetailsImageHigh from '../../../assets/images/view-details@3x.png'
import viewDetailsImageDesktopLow from '../../../assets/images/view-details-desktop.png'
import viewDetailsImageDesktop from '../../../assets/images/view-details-desktop@2x.png'
import viewDetailsImageDesktopHigh from '../../../assets/images/view-details-desktop@3x.png'

const BoatViewDetails = ({ id, bookingType }) => (
  <div className="boat-view-details">
    <div className="boat-view-details__link-type">
      <FlashIcon width={12} height={12} />
      <span>{bookingType === 'DIRECT' ? 'Direct Booking' : ''}</span>
    </div>

    <a href={`/boats/${id}`} className="boat-view-details__button">
      <picture className="mobile">
        <img
          sizes="(max-width: 1024px) 100vw, 1024px"
          srcSet={`${viewDetailsImage} 480w,
                    ${viewDetailsImage} 768w,
                    ${viewDetailsImageHigh} 1024w`}
          src={viewDetailsImageLow}
          alt="View Detail"
        />
      </picture>
      <picture className="desktop">
        <img
          sizes="(max-width: 1024px) 100vw, 1024px"
          srcSet={`${viewDetailsImageDesktop} 480w,
                    ${viewDetailsImageDesktop} 768w,
                    ${viewDetailsImageDesktopHigh} 1024w`}
          src={viewDetailsImageDesktopLow}
          alt="View Detail"
        />
      </picture>
    </a>
  </div>
)

BoatViewDetails.propTypes = {
  id: PropTypes.number.isRequired,
  bookingType: PropTypes.string.isRequired,
}

export { BoatViewDetails }
