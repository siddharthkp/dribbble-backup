import React from "react"
import PropTypes from "prop-types"
import "./text-area.scss"

const TextArea = props => {
  let className = "text-area"
  if (props.hasError) className += " error"
  return <textarea className={className} disabled={props.disabled} {...props} />
}

TextArea.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool
}

TextArea.defaultProps = {
  hasError: false,
  disabled: false
}

export default TextArea
