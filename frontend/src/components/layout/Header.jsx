import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="app-header">
      <div className="app-header-inner">
        <div className="logo">
          <span className="logo-mark">BT</span>
          <span className="logo-text">Ecommerce</span>
        </div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
