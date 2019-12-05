import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from 'react-bootstrap';
class ProductsCounter extends React.Component {

  render() {
    const { counter } = this.props;

    return (
        <Container>
            {counter > 0 ? 'Products amount: ' + counter : 'No products'}
        </Container>
    )
  }
}

ProductsCounter.propTypes = {
  counter: PropTypes.number,
};

export default ProductsCounter;