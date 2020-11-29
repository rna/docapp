import React from 'react';
import logo from '../../assets/logo.png';
import './headerComponent.css';
import LogoutComponent from '../logOut/LogOutComponent';

const HeaderComponent = () => (
  <div className="header">
    <img alt="logo" src={logo} />
    <LogoutComponent />
  </div>
);

export default HeaderComponent;
