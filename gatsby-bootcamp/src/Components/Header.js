import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <h1>blog about life Maks a Ant a</h1>
      <p>My life my rules</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
