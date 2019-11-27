import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';
import Products from '../../features/Products/ProductsContainer';

const ProductsPage = () => (
  <div>
    <PageTitle>Products list</PageTitle>
    <ProductsCounter />
    <Products />
  </div>
);

export default ProductsPage;