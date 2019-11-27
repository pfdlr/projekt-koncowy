import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsByPageRequest, getPages, presentPage, loadProductsRequest } from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
  /* pages: getPages(state),
  presentPage: presentPage(state), */
});

/* const mapDispatchToProps = dispatch => ({
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPageRequest(page, productsPerPage)),
}); */
const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);