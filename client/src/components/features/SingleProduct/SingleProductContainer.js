import { connect } from 'react-redux';
import { loadSingleProductRequest, getSingleProduct, getRequest, resetRequest } from '../../../redux/singleProductRedux';
import { addProductToCart } from "../../../redux/cartRedux";
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSingleProduct: () => dispatch(loadSingleProductRequest(ownProps.productId)),
  resetRequest: () => dispatch(resetRequest()),
  addProductToCart: (product) => dispatch(addProductToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);