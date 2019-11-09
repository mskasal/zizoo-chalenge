import React from 'react'

import { CheckIcon } from '../../../shared/icons'
import { specShape } from '../../BoatCard/Boat.propTypes'

import './BoatDocument.scss'

const BoatDocument = ({ spec }) => (
  <div className="boat-document">
    <CheckIcon width={12} height={12} />
    <span className="name">{spec.name}</span>
  </div>
)

BoatDocument.propTypes = {
  spec: specShape.isRequired,
}

export { BoatDocument }
