import { connect } from 'react-redux';
import { getProductsCounter, loadProductsRequest } from '../../../redux/productsRedux';
import ProductsCounter from './ProductsCounter';

const mapStateToProps = state => ({
  counter: getProductsCounter(state)
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCounter);
