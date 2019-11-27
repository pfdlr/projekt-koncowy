import React from 'react';
import { PropTypes } from 'prop-types';

class ProductsCounter extends React.Component {

  render() {
    const { counter } = this.props;

    return (
        <div>
            {counter > 0 ? 'Products amount: ' + counter : 'No products'}
        </div>
    )
  }
}

ProductsCounter.propTypes = {
  counter: PropTypes.number,
};

export default ProductsCounter;