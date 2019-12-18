import React from "react";
import { PropTypes } from "prop-types";
import ProductsList from "../ProductsList/ProductsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import ProductsCounter from "../ProductsCounter/ProductsCounter";
import Pagination from "../../common/Pagination/Pagination";

export class Products extends React.Component {
  componentDidMount() {
    const now = Date.now();
    const { loadProducts, initialPage, productsPerPage, products, request } = this.props;

    /* does not use API when producta are stored in state
     and timeliness of data is less than 1 hour */
    if (products.length === 0 || (now - request.timestamp) >= 3600000 ) {
      loadProducts(initialPage, productsPerPage);
    }
    
  }

  loadProductsPage = page => {
    const { loadProductsByPage, productsPerPage } = this.props;
    loadProductsByPage(page, productsPerPage);
  };

  render() {
    const { products, request, presentPage, pagination, pages, productsAmount } = this.props;
    const { loadProductsPage } = this;

    if (request.pending === false && request.success === true && products.length > 0 && pagination === true)
      return (
        <div>
          <ProductsCounter counter={productsAmount} />
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
    else if (request.pending === true || request.success === null) return <Spinner />;
    else if (request.pending === false && request.error !== null) return <Alert variant="error"> {request.error} </Alert>;
    else if (request.pending === false && request.success === true && products.length === 0) return <Alert variant="info"> No products </Alert>;
  }
}

Products.propTypes = {
  loadProducts: PropTypes.func.isRequired
};

export default Products;
