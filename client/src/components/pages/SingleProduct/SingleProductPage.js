import React from 'react';
import SingleProductContainer from '../../features/SingleProduct/SingleProductContainer'

const SingleProductPage = props => (
  <div>
    <SingleProductContainer  productId={props.match.params.id}/>
  </div>
);

export default SingleProductPage;