import React from 'react';
import { PropTypes } from 'prop-types';
import ProductSummary from '../ProductSummary/ProductSummary';
import { Container, Row, Col } from 'react-bootstrap';

const ProductsList = ({ products }) => (
  <Container>
    <Row className="products-list">
      {products.map(product => (
        <Col xs={12} sm={6} md={4} key={product.id} className="product">
          <ProductSummary key={product.id} {...product} />
        </Col>
      ))}
    </Row>
  </Container>
);

ProductsList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.objectOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
      )


    })
  ),
};

export default ProductsList;