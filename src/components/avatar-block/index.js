import React from "react"
import PropTypes from "prop-types"
import "./avatar-block.scss"
import Avatar from "../avatar"
import Badge from "../badge"

const AvatarBlock = props => {
  return (
    <span className="avatar-block">
      <Avatar src={props.src} />
      <a href={props.url}>{props.name}</a>
      <Badge>{props.label}</Badge>
    </span>
  )
}

AvatarBlock.propTypes = {}

AvatarBlock.defaultProps = {}

export default AvatarBlock
