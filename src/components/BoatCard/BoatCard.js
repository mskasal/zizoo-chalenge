import React from 'react'

import {
  BoatImage,
  BoatViewDetails,
  BoatPrice,
  BoatReviews,
  BoatName,
  BoatViewers,
  BoatSpec,
  BoatEquipment,
  BoatDocument,
  BoatBadge,
} from '../partials'

import { BoatShape } from './Boat.propTypes'

import './BoatCard.scss'

const BoatCard = props => {
  const {
    boat: {
      name,
      badges,
      images,
      id,
      region,
      sailYear,
      views,
      specs,
      reviews,
      price,
      bookingType,
      inFavorites,
    },
  } = props

  return (
    <div className="boat-card">
      <div className="boat-card__image-container">
        <div className="boat-card__image-container__badges">
          {badges.map(badge => (
            <BoatBadge key={badge.name} badge={badge} />
          ))}
        </div>
        <BoatImage name={name} images={images} id={id} />
      </div>
      <div className="boat-card__body">
        <div className="boat-card__top">
          <BoatName
            name={name}
            sailYear={sailYear}
            region={region}
            inFavorites={inFavorites}
            onFavoriteClicked={() => console.log(id)}
          />
          <BoatViewers views={views} />
        </div>

        <div className="boat-card__middle">
          {specs
            .filter(spec => spec.type === 'SPEC')
            .map(spec => {
              return <BoatSpec key={spec.name} spec={spec} />
            })}

          <BoatReviews boatId={id} reviews={reviews} />
        </div>

        <div className="boat-card__bottom">
          {/* Naming is hard :) */}
          <div className="boat-card__bottom__extras">
            <div className="documents">
              {specs
                .filter(spec => spec.type === 'DOCUMENT')
                .map(spec => {
                  return <BoatDocument key={spec.name} spec={spec} />
                })}
            </div>

            <div className="equipments">
              {specs
                .filter(spec => spec.type === 'EQUIPMENT')
                .map(spec => {
                  return <BoatEquipment key={spec.name} spec={spec} />
                })}
            </div>
          </div>

          <div className="boat-card__bottom__detail">
            <BoatPrice price={price} />
            <BoatViewDetails id={id} bookingType={bookingType} />
          </div>
        </div>
      </div>
    </div>
  )
}

BoatCard.propTypes = {
  boat: BoatShape.isRequired,
}

export { BoatCard }
