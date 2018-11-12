import React from "react"
import "./header.css"

const Header = () => {
  return (
    <nav className="header">
      <img className="logo" alt="logo" src="logo.png" />
      <ul role="navigation">
        <li>Shots</li>
        <li>Designers</li>
        <li>Teams</li>
        <li>Community</li>
        <li>Jobs</li>
      </ul>
    </nav>
  )
}

export default Header
