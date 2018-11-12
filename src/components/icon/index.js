import React from "react"
import PropTypes from "prop-types"
import "./icon.scss"

const Icon = props => {
  return <i className={`icon icon--${props.name}`} />
}

Icon.propTypes = {
  name: PropTypes.oneOf(["copy", "like"]),
  color: PropTypes.string
}

export default Icon
