import React from 'react';

import PageTitle from '../../common/PageTitle/PageTitle';
import Products from '../../features/Products/ProductsContainer';

const HomePage = () => (
  <div>
  <PageTitle>Blog</PageTitle>
  <Products productsPerPage={3} pagination={false} />
</div>
);

export default HomePage;