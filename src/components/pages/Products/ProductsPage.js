import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Products from '../../features/Products/ProductsContainer';

const ProductsPage = () => (
  <div>
    <PageTitle>Products list</PageTitle>
    <Products />
  </div>
);

export default ProductsPage;