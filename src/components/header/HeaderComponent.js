import React from 'react';
import logo from '../../assets/logo.png';
import './headerComponent.css';
import LogoutComponent from '../logOut/LogOutComponent';

const HeaderComponent = () => (
  <header className="header">
    <img alt="logo" src={logo} />
    <LogoutComponent />
  </header>
);

export default HeaderComponent;
