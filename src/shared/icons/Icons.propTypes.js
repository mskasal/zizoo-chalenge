import PropTypes from 'prop-types'

const { number, string, oneOfType } = PropTypes

const IconsShape = {
  width: oneOfType([string, number]),
  height: oneOfType([string, number]),
}
const DefaultIconShape = {
  width: 16,
  height: 16,
}
export { IconsShape as default, DefaultIconShape }
