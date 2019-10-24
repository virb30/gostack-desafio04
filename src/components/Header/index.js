import React from 'react';

import Logo from '../../assets/Logo.png'

import './style.css';

function Header() {
  return (
    <div id="header">
      <img src={Logo} alt="logo" />
      <a>Meu perfil</a>
    </div>
  )
}

export default Header;