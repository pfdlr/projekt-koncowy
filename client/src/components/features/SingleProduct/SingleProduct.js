import React from 'react';
//import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';

import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';



class SingleProduct extends React.Component {

  componentDidMount() {
    const { loadSingleProduct, resetRequest } = this.props;
    loadSingleProduct();
    resetRequest();
  }

  render() {
    const { product, request } = this.props;

    if (request.pending === false && request.success === true/*  && products.singleProduct.data.length > 0 */)
      return (
        <div>
          <PageTitle>{product.data.name}</PageTitle>
          <p>Author: {product.data.brand.name}</p>
          <HtmlBox>{product.data.description}</HtmlBox>
          
        </div>
      );
    else if (request.pending === true || request.success === null)
      return (
        <Spinner />
      )
    else if (request.pending === false && request.error !== null)
      return (
        <Alert variant='error'> {request.error} </Alert>
      )
    else if (request.pending === false && request.success === true && product.singleProduct.data.length === 0)
      return (
        <Alert variant='info'> No products </Alert>
      )

  }
};

/* SingleProduct.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadSingleProduct: PropTypes.func.isRequired,
}; */

export default withRouter(props => <SingleProduct {...props} />);