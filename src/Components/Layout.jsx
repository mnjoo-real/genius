import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="app-shell">
      <header className="nav-bar">
        <div className="brand">GENIUS Prototype</div>
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/demo">Demo</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
