import React from 'react';
import { Link } from 'react-router-dom';

export default function HostHeader() {
  return (
    <>
      <nav className="host-nav">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Host</Link>

        <Link to="/host/reviews">Reviews</Link>
      </nav>
    </>
  );
}
