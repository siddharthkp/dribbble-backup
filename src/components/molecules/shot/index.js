import React from "react"
import PropTypes from "prop-types"
import "./shot.scss"
import { Card, Image, Toolbar } from "components"

const Shot = props => {
  return (
    <div style={{ width: props.width }} className="shot" {...props}>
      <Card>
        <Card.Body>
          <Image src="https://cdn.dribbble.com/users/666045/screenshots/3611646/artboard_3_1x.png" />
        </Card.Body>
        <Card.Footer>
          <Toolbar>
            <Toolbar.Left />
            <Toolbar.Right />
          </Toolbar>
        </Card.Footer>
      </Card>
    </div>
  )
}

Shot.propTypes = {
  width: PropTypes.number
}

Shot.defaultProps = {
  width: 200
}

export default Shot
