import React from 'react'
import PropTypes from 'prop-types'

import { imageShape } from '../../BoatCard/Boat.propTypes'
import './BoatImage.scss'

const getImagesWithKey = (images, type) =>
  images.find(image => image.type === type)

const BoatImage = props => {
  const { id, images, name } = props

  return (
    <a href={`/boats/${id}`}>
      <picture>
        <img
          sizes="(max-width: 1024px) 100vw, 1024px"
          srcSet={`${getImagesWithKey(images, 'CARD').urls.low} 480w,
                ${getImagesWithKey(images, 'CARD').urls.normal} 768w,
                ${getImagesWithKey(images, 'CARD').urls.high} 1024w`}
          src={getImagesWithKey(images, 'CARD').urls.normal}
          alt={name}
        />
      </picture>
    </a>
  )
}

BoatImage.propTypes = {
  images: PropTypes.oneOfType([PropTypes.arrayOf(imageShape)]).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export { BoatImage }
