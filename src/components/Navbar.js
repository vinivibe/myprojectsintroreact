import React from 'react';
import { Link, NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-style">
      <NavLink to="/faq" activeStyle={{fontWeight: 'bold', color: 'red' }}>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/projects'>Projects</Link></li>
      </ul>
      </NavLink>
      </nav>
  )
}
export default Navbar;