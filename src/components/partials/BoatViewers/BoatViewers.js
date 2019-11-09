import React from 'react'

import { viewsShape } from '../../BoatCard/Boat.propTypes'
import './BoatViewers.scss'

const BoatViewers = ({ views }) => (
  <div className="boat-viewers">
    <div className="boat-viewers__top">
      <span>HOT</span>
      <strong>
        {views.viewers}
        &nbsp;views
      </strong>
    </div>
    <div className="boat-viewers__bottom">
      in the last&nbsp;
      <span>
        {views.time}
        {views.timeSpanShort}
      </span>
    </div>
  </div>
)

BoatViewers.propTypes = {
  views: viewsShape.isRequired,
}

export { BoatViewers }
