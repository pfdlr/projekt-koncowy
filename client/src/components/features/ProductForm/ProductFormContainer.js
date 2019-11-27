import { connect } from 'react-redux';
import { getRequest, addProductRequest, resetRequest } from '../../../redux/productsRedux';
import ProductForm from './ProductForm';

const mapStateToProps = state => ({
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product) => dispatch(addProductRequest(product)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm);