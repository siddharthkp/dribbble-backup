import React from "react"
import PropTypes from "prop-types"
import "./button.scss"

const Button = props => {
  return (
    <button
      className={`button button--${props.appearance} button--${props.size}`}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  appearance: PropTypes.oneOf([
    "primary",
    "secondary",
    "secondary-alt",
    "info",
    "accent",
    "success"
  ]),
  size: PropTypes.oneOf(["small", "normal", "large"])
}

Button.defaultProps = {
  disabled: false,
  appearance: "primary",
  size: "normal"
}

export default Button
