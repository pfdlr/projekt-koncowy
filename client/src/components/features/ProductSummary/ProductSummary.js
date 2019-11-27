import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import './ProductSummary.scss';
import cutText from '../../../utils/cutText'

const ProductSummary = ({ id, name, price, brandName }) => (
  <article className="product-summary">
    <SmallTitle>{name}</SmallTitle>
    <p>Brand: {brandName}</p>
   {/*  <HtmlBox>{cutText(content, 50)}</HtmlBox> */}
    <Button variant="primary">
        <Link to={`/product/${id}`}>Read more</Link>
     </Button>
  </article>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default ProductSummary;