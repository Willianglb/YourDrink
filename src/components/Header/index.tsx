import React from 'react'
import { HeaderStyles } from './Header.styles'
import Logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <HeaderStyles id="header">
      <nav className="nav container">
        <a href="#bebidas" className="nav__link">Bebidas</a>
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" className="nav__logo-img" />
        </a>
        <a href="#sobre" className="nav__link">Sobre</a>      
      </nav>
    </HeaderStyles>
  )
}

export default Header;