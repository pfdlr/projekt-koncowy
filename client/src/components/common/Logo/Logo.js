import React from 'react'
import logo from '..//../../images/logo.png'
import './Logo.scss';

const Logo = ({ links, location }) => (
  <img src={logo} alt='logo' className='logo-img'/>
);

export default Logo;
