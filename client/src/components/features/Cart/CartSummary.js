import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
//import TextField from "../../common/TextField/TextField";
import "./CartSummary.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

const CartSummary = ({ id, name, price, brand, imgUrl }) => (
  <div className="cart-container">
    <div className="product-container">
      <Link cato={`/product/${id}`}>
        <div className="cart-image">
          <img src={"https://" + imgUrl} alt={name} />
        </div>
        <div className="cart-product-data">
          <div className="brand-name">Brand: {brand}</div>
          <div className="product-name">{name}</div>
          <div className="current-price">Price: {price}</div>
        </div>
        </Link>
        <div className="cart-item-amount">
         <Button variant="secondary">+</Button><Button variant="secondary">-</Button>
        </div>
      
    </div>
    
  </div>
);

CartSummary.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default CartSummary;
