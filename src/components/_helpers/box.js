import React from "react"
import "./box.scss"

const Box = props => {
  return (
    <div className="h-box">
      <div
        className="color"
        style={{
          width: props.size,
          height: props.size,
          backgroundColor: props.color,
          ...props.style
        }}
      />
      <div>{props.name}</div>
    </div>
  )
}

Box.defaultProps = {
  size: 100,
  color: "#e1e1e7"
}

export default Box
