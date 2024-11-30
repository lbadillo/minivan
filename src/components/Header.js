import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { IoMdExit } from 'react-icons/io';

export default function Header() {
  function fakeLogOut() {
    localStorage.removeItem('loggedin');
  }
  return (
    <header>
      <Link className="site-logo" to="/">
        #VanLife
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-active' : '')}
          to="/host"
        >
          Host
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-active' : '')}
          to="/vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-active' : '')}
          to="about"
        >
          About
        </NavLink>
        <Link to="login">
          <IoPersonCircleOutline />
        </Link>

        <button onClick={fakeLogOut}>
          <IoMdExit />
        </button>
      </nav>
    </header>
  );
}
