import React from 'react';
import Cright from '../../common/Cright/Cright'
import MainMenu from '../../layout/MainMenu/MainMenu'
import './Footer.scss'

class NavBar extends React.Component {

  state = {
    links: [
      { path: '/', title: 'Home' },
      /* { path: '/products', title: 'Products' }, */
      
      { path: '/contact', title: 'Contact' },
    ],
  }

  render() {
    const { links } = this.state;

    return (
      <nav className='footer'>
      {<Cright />}
      <MainMenu links={links} />
    </nav>
    );
  }

}

export default NavBar;