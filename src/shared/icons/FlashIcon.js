/* eslint-disable max-len */
import React from 'react'

import IconsShape, { DefaultIconShape } from './Icons.propTypes'

const FlashIcon = props => {
  const { width, height } = props

  return (
    <svg
      className="icon icon--flash"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 510 510"
    >
      <g>
        <g id="flash-on">
          <polygon points="127.5,0 127.5,280.5 204,280.5 204,510 382.5,204 280.5,204 382.5,0" />
        </g>
      </g>
    </svg>
  )
}

FlashIcon.propTypes = IconsShape
FlashIcon.defaultProps = DefaultIconShape
export { FlashIcon }
