import React from 'react'
import { HeaderStyles } from './Header.styles'
import Logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <HeaderStyles id="header">
      <nav className="nav container">
        {/* Aumentar */}
        <a href="#home">
          <img src={Logo} alt="" className="nav__logo-img" />
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about" className="nav__link">Bebidas</a>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderStyles>
  )
}

export default Header;