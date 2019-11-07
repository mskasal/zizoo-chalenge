import React from 'react'
import PropTypes from 'prop-types'

const CardList = ({ children }) => <ul className="card-list">{children}</ul>

CardList.propTypes = {
  children: PropTypes.element.isRequired,
}

export { CardList }
