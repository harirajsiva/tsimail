import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <nav>
      <ul>
        <li><Link to='/NavBar'>NavBar</Link></li>
      </ul>
    </nav>
)

export default Header
