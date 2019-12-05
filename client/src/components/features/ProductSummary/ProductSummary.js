import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
//import TextField from "../../common/TextField/TextField";
import "./ProductSummary.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//import { Container, Row, Col, Button } from "react-bootstrap";
//import cutText from "../../../utils/cutText";

const ProductSummary = ({ id, name, price, imageUrl }) => (
  <div className="product-container">
    <Link to={`/product/${id}`}>
      <img src={"https://" + imageUrl} alt={name} />
      <div className="product-name">{name}</div>
      {price.isOutletPrice ? (
        <div className="prices">
          <div className="current-price">Price: {price.current.text}</div>
          <div className="rrp-price">Old Price: {price.rrp.text}</div>
          <div className="outlet">outlet</div>
        </div>
      ) : price.isMarkedDown ? (
        <div className="prices">
          <div  className="current-price">Price: {price.current.text}</div>
          <div className="rrp-price">Old Price: {price.previous.text}</div>
          <div className="marked-down">marked down</div>
        </div>
      ) : (
        <div className="current-price">Price: {price.current.text}</div>
      )}
    </Link>
  </div>
);

ProductSummary.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,

  
  
  
};

export default ProductSummary;
