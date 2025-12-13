import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'header__container'}>
        <div className={'header__logo'}>iLERNA.</div>

        <nav className={'header__nav'}>
          <a href="#" className={'header__link'}>Inicio</a>
          <a href="#" className={'header__link'}>FP Madrid</a>
          <a href="#" className={'header__link'}>Ciclos</a>
          <a href="#" className={'header__link'}>Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;