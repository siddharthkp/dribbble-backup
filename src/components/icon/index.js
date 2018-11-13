import React from "react"
import PropTypes from "prop-types"
import "./icon.scss"
import icons from "./icons-list"

const Icon = props => {
  return (
    <i className="icon" {...props}>
      {icons[props.name]}
    </i>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    "check",
    "heart",
    "like",
    "like",
    "link",
    "list",
    "paperclip"
  ]),
  color: PropTypes.string
}

export default Icon
