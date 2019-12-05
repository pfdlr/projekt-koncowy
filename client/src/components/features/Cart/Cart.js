import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import CartSummary from "./CartSummary";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Cart.scss";
import PageTitle from "../../common/PageTitle/PageTitle";

class Cart extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <Container className="cart">
        <div className='cart-title'>
          <PageTitle>Cart</PageTitle>
        </div>
        <div className="cart-summary">
          <Row>
            {cart.map(cartProduct => (
              <Col xs={12} className="cart" key={cart.id}>
                <CartSummary key={cart.id} {...cartProduct} />
              </Col>
            ))}
          </Row>
          <div className="payment-container">
            <h4>Summary</h4>
            <div className="subtotal">
              <div>Sub-total: </div>
              <div>22$</div>
            </div>
            <div className="shipment">Delivery ?</div>
            <Button className="checkout">checkout</Button>
            <div className="payment-options">VISA MC itd</div>
          </div>
        </div>
      </Container>
    );
  }
}

Cart.propTypes = {
    cart: PropTypes.object.isRequired
        
}; 

export default withRouter(props => <Cart {...props} />);
