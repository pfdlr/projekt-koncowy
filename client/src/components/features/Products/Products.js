/* import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Products extends React.Component {

  componentDidMount() {
    const { loadProductsByPage, initialPage, productsPerPage } = this.props;
    loadProductsByPage(initialPage, productsPerPage);
  }
  loadProductsPage = (page) => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  }

  render() {
    const { products, request, pages, presentPage, pagination } = this.props;
    const { loadProductsPage } = this;

    if (request.pending === false && request.success === true && products.length > 0 && pagination === true)
      return (
        <div>
          <ProductsList products={products} />
          <Pagination pages={pages} onPageChange={loadProductsPage} initialPage={presentPage} />
        </div>
      );
    else if (request.pending === false && request.success === true && products.length > 0 && pagination !== true)
      return (
        <div>
          <ProductsList products={products} />
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
    else if (request.pending === false && request.success === true && products.length === 0)
      return (
        <Alert variant='info'> No products </Alert>
      )
  }

};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadProductsByPage: PropTypes.func.isRequired,
};

Products.defaultProps = {
  initialPage: 1,
  productsPerPage: 4,
  pagination: true,
};

export default Products; */
import React from 'react';
import { PropTypes } from 'prop-types';
import ProductsList from '../ProductsList/ProductsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Products extends React.Component {

    componentDidMount() {
      const { loadProducts } = this.props;
      loadProducts();
    }
  
    render() {
      const { products, request } = this.props;
      
    if (request.pending === false && request.success === true && products.data.products.length > 0 )  
      return (
        <div>{products.data.products.length}
          {<ProductsList products={products.data.products} />}
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
    else if (request.pending === false && request.success === true && products.length === 0)
        return (
          <Alert variant='info'> No products </Alert>
        )    
  }
  
  };
  
  /* Products.propTypes = {
    products: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
      })
    ),
    loadProducts: PropTypes.func.isRequired,
  }; */
  
  export default Products;