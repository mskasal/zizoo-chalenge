import PropTypes from 'prop-types'

const { arrayOf, bool, number, shape, string } = PropTypes

const locationShape = shape({
  id: number.isRequired,
  name: string.isRequired,
})

const regionShape = shape({
  city: locationShape.isRequired,
  country: locationShape.isRequired,
})

const imageShape = shape({
  type: string.isRequired,
  urls: shape({
    high: string.isRequired,
    low: string.isRequired,
    normal: string.isRequired,
  }).isRequired,
})

const priceShape = shape({
  amount: string.isRequired,
  currency: string.isRequired,
})

const reviewsShape = shape({
  count: number.isRequired,
  rating: number.isRequired,
})

const viewsShape = shape({
  time: number.isRequired,
  timeSpan: string.isRequired,
  viewers: number.isRequired,
})

const specShape = shape({
  name: string.isRequired,
  type: string.isRequired,
  value: string,
})

const badgeShape = shape({
  id: number.isRequired,
  name: string.isRequired,
  type: string.isRequired,
})

const BoatShape = shape({
  badges: arrayOf(badgeShape.isRequired).isRequired,
  bookingType: string.isRequired,
  id: number.isRequired,
  images: arrayOf(imageShape.isRequired).isRequired,
  inFavorites: bool.isRequired,
  name: string.isRequired,
  price: priceShape.isRequired,
  region: regionShape.isRequired,
  reviews: reviewsShape.isRequired,
  sailYear: string.isRequired,
  specs: arrayOf(specShape.isRequired).isRequired,
  views: viewsShape.isRequired,
})

export {
  BoatShape,
  locationShape,
  imageShape,
  priceShape,
  reviewsShape,
  regionShape,
  viewsShape,
  specShape,
  badgeShape,
}
