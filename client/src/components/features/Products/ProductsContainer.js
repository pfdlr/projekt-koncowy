import { connect } from 'react-redux';
import { getProducts, getSortedProducts, getRequest,  loadProductsRequest } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  request: getRequest(state),
  products: getSortedProducts(state),
  //products: getProducts(state),

});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);