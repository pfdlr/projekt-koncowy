import { connect } from 'react-redux';
import { loadSingleProductRequest, getSingleProduct, getRequest, resetRequest } from '../../../redux/singleProductRedux';
import SingleProduct from './SingleProduct';

const mapStateToProps = state => ({
  product: getSingleProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadSingleProduct: () => dispatch(loadSingleProductRequest(ownProps.productId)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);