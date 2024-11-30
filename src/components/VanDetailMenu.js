import React from 'react';
import { NavLink } from 'react-router-dom';

export default function VanDetailMenu() {
  const activestyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className="host-van-detail-nav">
        <NavLink
          style={({ isActive }) => (isActive ? activestyle : null)}
          to="."
          end
        >
          Details
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activestyle : null)}
          to="pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activestyle : null)}
          to="photos"
        >
          Photos
        </NavLink>
      </nav>
    </>
  );
}
