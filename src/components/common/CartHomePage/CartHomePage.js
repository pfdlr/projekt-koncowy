import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { productsInCart } from "../../../redux/cartRedux";
import cart from '..//../../images/cart.png'
import './CartHomePage.scss';

const mapStateToProps = state => ({
  inCart: productsInCart(state),
  
  
});

const CartHomePage = ({ links, location, inCart }) => (
  <Link to='/cart'>
  <img src={cart} alt='cart' className='cart-img'/>
  <div className='in-cart'>{inCart}</div>
  </Link>
);

/* export default CartHomePage; */
export default connect(mapStateToProps)(CartHomePage);
