import React from 'react'
import PropTypes from 'prop-types'

const CardList = ({ children }) => <div className="card-list">{children}</div>

CardList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node)]).isRequired,
}

export { CardList }
