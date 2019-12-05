import React from 'react';

import CategoriesMenu from '../../layout/CategoriesMenu/CategoriesMenu';
//import './Footer.scss'

class Categories extends React.Component {

  state = {
    categories: [
      { path: '/products/4172', title: 'Women\'s Shoes' },
      { path: '/products/26091', title: 'Women\'s Activewear'}, 
      { path: '/products/8799', title: 'Women\'s Dresses'}, 
      { path: '/products/17119', title: 'Women\'s Sexy lingerie'}, 
      { path: '/products/27391', title: 'Women\'s Outlet'}, 

      { path: '/products/4209', title: 'Men\'s Shoes'}, 
      { path: '/products/26090', title: 'Men\'s Activewear'}, 
      { path: '/products/5678', title: 'Men\'s Suits'},
      { path: '/products/27396', title: 'Men\'s Outlet'}, 
    ],
  }

  render() {
    const { categories } = this.state;

    return (
      <nav className='categories'>
      {<CategoriesMenu categories={categories} />}
    </nav>
    );
  }

}

export default Categories;