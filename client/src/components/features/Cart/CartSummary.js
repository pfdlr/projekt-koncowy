import React, { useState } from "react";
import "./CartSummary.scss";
import { Modal, Button } from "react-bootstrap";

const CartSummary = ({ cart, summary, discount }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //const { summary } = this.props;
  return (
    <>
      <Button variant="success" className="button-summary" onClick={handleShow}>
        Show summary
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table class="table-summary">
            <thead>
              <tr>
                <th>Name</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Sum</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartProduct, id) => (
                <tr key={id} {...cartProduct}>
                  <td>{cartProduct.name}</td>
                  <td>{cartProduct.brand}</td>
                  <td>{cartProduct.price}</td>
                  <td>{cartProduct.amount}</td>
                  <td>{cartProduct.pricevalue * cartProduct.amount} $</td>
                </tr>
              ))}
            </tbody>
          </table>
              <p>Starting price: {(summary / discount).toFixed(2)} $</p>
              <p>Discount: - {((summary / discount) - summary).toFixed(2)} $</p>
          <h4 className="total">TOTAL: {summary} $</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartSummary;
