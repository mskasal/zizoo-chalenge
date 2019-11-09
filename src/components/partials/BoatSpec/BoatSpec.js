import React from 'react'
import { specShape } from '../../BoatCard/Boat.propTypes'

import './BoatSpec.scss'

const BoatSpec = ({ spec }) => (
  <div className="boat-spec">
    <span className="value">{spec.value}</span>
    <span className="name">{spec.name}</span>
  </div>
)

BoatSpec.propTypes = {
  spec: specShape.isRequired,
}

export { BoatSpec }
