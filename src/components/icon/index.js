import React from "react"
import PropTypes from "prop-types"
import "./icon.scss"

const Icon = props => {
  return <i className={`icon icon--${props.name}`} {...props} />
}

Icon.propTypes = {
  name: PropTypes.oneOf(["copy", "like", "help"]),
  color: PropTypes.string
}

export default Icon
