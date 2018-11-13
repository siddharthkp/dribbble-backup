import React from "react"
import PropTypes from "prop-types"
import "./text-input.scss"

const TextInput = props => {
  let className = "text-input"
  if (props.hasError) className += " error"
  return <input className={className} disabled={props.disabled} {...props} />
}

TextInput.propTypes = {
  hasError: PropTypes.bool,
  disabled: PropTypes.bool
}

TextInput.defaultProps = {
  hasError: false,
  disabled: false
}

export default TextInput
