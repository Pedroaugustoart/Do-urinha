import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo-container">
          <div className="logo-circle hover-scale">
            <span className="logo-text">D</span>
          </div>
          <div className="logo-title">
            <span className="logo-main">Doçurinha</span>
            <span className="logo-sub tracking-wider">DOCERIA</span>
          </div>
        </div>
        
        <div className="header-actions">
          {/* User Profile Icon */}
          <button className="icon-btn hover-scale" aria-label="Perfil">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
          
          {/* Shopping Cart Icon */}
          <button className="icon-btn hover-scale" aria-label="Carrinho">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-white)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
