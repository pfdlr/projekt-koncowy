import React from 'react';
import SortContainer from '../../features/Sort/SortContainer';
import PageTitle from '../../common/PageTitle/PageTitle';
import Products from '../../features/Products/ProductsContainer';

const HomePage = () => (
  <div>
  <PageTitle>Blog</PageTitle>
  <SortContainer />
  <Products productsPerPage={9} pagination={true} currentPage={1}/>
  
</div>
);

export default HomePage;