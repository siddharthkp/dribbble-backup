import React from "react"
import "./spacer.scss"

const Spacer = props => {
  return <div className={`spacer spacer--${props.size}`} />
}

Spacer.defaultProps = {
  size: "small"
}

export default Spacer
