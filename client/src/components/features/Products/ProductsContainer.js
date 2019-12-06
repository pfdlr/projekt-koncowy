import { connect } from 'react-redux';
import { getProducts, getSortedProducts, getRequest,  loadProductsRequest, presentPage, getPages, loadProductsByPage } from '../../../redux/productsRedux';
import Products from './Products';
 
const mapStateToProps = state => ({
  request: getRequest(state),
  products: getSortedProducts(state),
  presentPage: presentPage(state),
  pages: getPages(state),
  productsAmount: getProducts(state),

});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
  loadProductsByPage: (page, productsPerPage) => dispatch(loadProductsByPage(page, productsPerPage))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);