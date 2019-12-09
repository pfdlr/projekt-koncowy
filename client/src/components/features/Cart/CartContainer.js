import { connect } from 'react-redux';
import { getCart, increaseProductAmount, decreaseProductAmount, removeCartProduct, getSummary, getDiscount, cartDiscount } from "../../../redux/cartRedux";
import Cart from './Cart';

const mapStateToProps = state => ({
    cart: getCart(state),
    summary: getSummary(state),
    discount: cartDiscount(state),
    
});


const mapDispatchToProps = dispatch => ({
    increaseProductAmount: id => dispatch(increaseProductAmount(id)),
    decreaseProductAmount: id => dispatch(decreaseProductAmount(id)),
    removeCartProduct: id => dispatch(removeCartProduct(id)),
    getDiscount: discount => dispatch(getDiscount(discount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);