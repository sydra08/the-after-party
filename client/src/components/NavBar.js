import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>
      <NavLink
        to="/venues"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Venues</NavLink>
      <NavLink
        to="/suggestions"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Suggestions</NavLink>
      <NavLink
        to="/reviews"
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Reviews</NavLink>
    </div>
  );
};

export default NavBar;
