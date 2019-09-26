import React from 'react';
import './Header.css';

const Header = () => (
  <div className="container">
    <div className="jumbotron bg text-center">
      <h1 className="logo">The Clicky Game</h1>
      <p className="desc">Click any image to begin, but don't click the same image twice!</p>
    </div>
  </div>
);

export default Header;