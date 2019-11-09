/* eslint-disable max-len */
import React from 'react'

import IconsShape, { DefaultIconShape } from './Icons.propTypes'

const CheckIcon = props => {
  const { width, height } = props

  return (
    <svg
      version="1.1"
      className="icon icon--check"
      id="CheckIcon"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      fill="#666B6C"
      viewBox="0 0 448.8 448.8"
    >
      <g>
        <g id="check">
          <polygon points="142.8,323.85 35.7,216.75 0,252.45 142.8,395.25 448.8,89.25 413.1,53.55 		" />
        </g>
      </g>
    </svg>
  )
}

CheckIcon.propTypes = IconsShape
CheckIcon.defaultProps = DefaultIconShape
export { CheckIcon }
