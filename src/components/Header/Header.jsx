import React, { useState } from 'react';
import { Phone, ChevronDown } from 'lucide-react';
import Button from '../Button/Button';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__top-container">
          <p className="header__top-text">Llámanos gratis</p>
          <a href="tel:900730222" className="header__top-phone">
            <Phone size={16} />
            900 730 222
          </a>
        </div>
      </div>
      <div className="header__main">
        <div className="header__container">
          <a href="/" >
            <img className="header__logo" src="/assets/images/logo-ilerna.svg" alt="iLERNA" />
          </a>

          <nav className="header__nav">
            <a href="#" className="header__link">
              FP Online
              <ChevronDown size={12} />
            </a>
            <a href="#" className="header__link">
              Centros de FP
              <ChevronDown size={12} />
            </a>
            <a href="#" className="header__link">
              Cursos de especialización
            </a>
            <a href="#" className="header__link">
              FP + Universidad
            </a>
            <a href="#" className="header__link">
              iLERNA+
            </a>
          </nav>
          <Button
            variant="outline"
            size="small"
            className="header__login-btn"
          >
            Iniciar sesión
          </Button>


          <button 
            className="header__menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;