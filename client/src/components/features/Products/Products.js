import React from "react";
import { PropTypes } from "prop-types";
import ProductsList from "../ProductsList/ProductsList";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import ProductsCounter from "../ProductsCounter/ProductsCounter";
//import Pagination from "../../common/Pagination/Pagination";
//import SortContainer from "../../features/Sort/SortContainer";

export class Products extends React.Component {
  componentDidMount() {
    const { loadProducts } = this.props;
     loadProducts(); 
    
  }

  render() {
    const { products, request } = this.props;

    if (request.pending === false && request.success === true && products.length > 0)
      return (
        <div>
          <ProductsCounter counter={products.length} />
          {/* <SortContainer /> */}
          <ProductsList products={products} />
          {/* <Pagination
            pages={10}
            onPageChange={page => {
              console.log(page);
            }}
          /> */}
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
