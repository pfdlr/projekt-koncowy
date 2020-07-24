import React from "react";
import PropTypes from "prop-types";
import { withRouter, Link } from "react-router-dom";
import { Container, Row, Col, Button, Alert, Form } from "react-bootstrap";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import "./Cart.scss";
import PageTitle from "../../common/PageTitle/PageTitle";
import CartSummary from "./CartSummary";

class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit = e => {
    e.stopPropagation();
    e.preventDefault();
    const { getDiscount } = this.props;
    this.state.value === "PROMO" ?
      getDiscount(
        0.95
      ) :
      alert("Bad code: <" + this.state.value + "> | try: PROMO");
  }


  render() {
    const { cart, summary, removeCartProduct, increaseProductAmount, decreaseProductAmount, discount } = this.props;
    return (
      <Container className="cart">
        <PageTitle>Cart</PageTitle>
        <div className="cart-summary">
          <Row>
            {cart.length !== 0 ? (
              cart.map((cartProduct, id) => (
                <Col xs={12} className="cart" key={id}>
                  <div key={id} {...cartProduct}>
                    <div className="cart-container">
                      <div className="product-container">
                        <Link to={`/product/${cartProduct.id}`}>
                          <div className="cart-image">
                            <img src={"https://" + cartProduct.imgurl} alt={cartProduct.name} />
                          </div>
                          <div className="cart-product-data">
                            <div className="brand-name">Brand: {cartProduct.brand}</div>
                            <div className="product-name">{cartProduct.name}</div>
                            <div className="current-price">Price: {cartProduct.price}</div>
                          </div>
                        </Link>
                        <div className="cart-item-amount">
                          <div className="product-amount">Amount: {cartProduct.amount}</div>
                          <Button onClick={() => decreaseProductAmount(cartProduct.id)} variant="secondary" disabled={cartProduct.amount > 1 ? "" : "disabled"}>
                            -
                          </Button>
                          <Button onClick={() => increaseProductAmount(cartProduct.id)} variant="secondary">
                            +
                          </Button>
                          <Button onClick={() => removeCartProduct(cartProduct.id)} variant="danger" className="remove">
                            x
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              ))
            ) : (
                <Alert variant="success">
                  <h3>Your cart is empty</h3>
                </Alert>
              )}
          </Row>
          <div className="payment-container">
            <h4>Summary</h4>
            <div className="subtotal">
              <h5>Sub-total: </h5>
              <h5>{summary} $</h5>
            </div>
            <Form className="code-form" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formCode">
                <Form.Label>Discount code</Form.Label>
                <Form.Control size="sm" type="text" placeholder="CODE" value={this.state.value} onChange={this.handleChange} />
                <Button type="submit" className="checkout">Check code</Button>
              </Form.Group>
            </Form>
            {discount !== 1 ? (
              <p style={{color: "red"}}>You get discount: {((1 - discount) * 100).toFixed(0)}%</p>
            ) :
              <p>Enter promotional code</p>
            }
            <div className="payment-options">
              <FaCcVisa /> <FaCcMastercard /> <FaCcPaypal />
            </div>
          </div>
        </div>
        <CartSummary summary={summary} cart={cart} discount={discount} />
      </Container>
    );
  }
}

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  summary: PropTypes.number.isRequired,
  removeCartProduct: PropTypes.func.isRequired,
  increaseProductAmount: PropTypes.func.isRequired,
  decreaseProductAmount: PropTypes.func.isRequired
};

export default withRouter(props => <Cart {...props} />);
