import React from 'react';
import Logo from '../../common/Logo/Logo'
import CartHomepage from '../../common/CartHomePage/CartHomePage'
import MainMenu from '../../layout/MainMenu/MainMenu'
import './NavBar.scss'

class NavBar extends React.Component {

  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/contact', title: 'Contact' },
    ],
  }

  render() {
    const { links } = this.state;

    return (
      <nav className='navbar'>
      <Logo />
      <MainMenu links={links} />
      <CartHomepage />
    </nav>
    );
  }

}

export default NavBar;