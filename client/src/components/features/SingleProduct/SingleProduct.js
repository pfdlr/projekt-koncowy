import React from "react";
import { withRouter } from "react-router-dom";

import { PropTypes } from "prop-types";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import PageTitle from "../../common/PageTitle/PageTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import { Button, Col, Row } from "react-bootstrap";
import TinySlider from "tiny-slider-react";
import "./SingleProduct.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


class SingleProduct extends React.Component {
  componentDidMount() {
    const { loadSingleProduct, resetRequest } = this.props;
    loadSingleProduct();
    resetRequest();
  }

  handleClickAdd = () => {
    const { addProductToCart, product } = this.props;
    addProductToCart({
      id: product.data.id,
      name: product.data.name,
      price: product.data.price.current.text,
      imgUrl: product.data.media.images[0].url,
      brand: product.data.brand.name
    });
    this.props.history.push("/cart");
  };
  onGoTo = dir => this.ts.slider.goTo(dir)
  render() {
    const { product, request } = this.props;
    const settings = { nav: false, mouseDrag: true, loop: true, items: 1, gutter: 5, controls: false };
    if (request.pending === false && request.success === true)
      return (
        <div className="product-page">
          <PageTitle>{product.data.name}</PageTitle>
          <p>Brand: {product.data.brand.name}</p>
          <div className="product-property">
            <div className="slider">
              <div className="slider-controls">
                <FaChevronLeft onClick={() => this.onGoTo('prev')}/>
                <FaChevronRight onClick={() =>  this.onGoTo('next')}/>
              </div>
              <TinySlider settings={settings} ref={ts => this.ts = ts}>
                {product.data.media.images.map(image => (
                  <div xs={12} sm={6} md={4} key={image.id} className="product-image">
                    <img src={"http://" + image.url} alt={product.data.name} />
                  </div>
                ))}
              </TinySlider>
            </div>
            <div className="product-data">
              <h5>Price: {product.data.price.current.text}</h5>
              <HtmlBox>{product.data.description}</HtmlBox>
              <HtmlBox>{product.data.info.aboutMe}</HtmlBox>
              <HtmlBox>{product.data.info.sizeAndFit}</HtmlBox>
              <HtmlBox>{product.data.info.careInfo}</HtmlBox>
            </div>
          </div>
          <div className='product-buttons'>
            <Button variant="light" onClick={() => this.props.history.goBack()}>
              &lt; Back
          </Button>
            <Button onClick={this.handleClickAdd} variant={"success"}>
              Add to cart
          </Button>
          </div>
        </div>
      );
    else if (request.pending === true || request.success === null) return <Spinner />;
    else if (request.pending === false && request.error !== null) return <Alert variant="error"> {request.error} </Alert>;
    /* else if (request.pending === false && request.success === true && product.singleProduct.data.length === 0)
      return (
        <Alert variant='info'> No products </Alert>
      ) */
  }
}

SingleProduct.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.objectOf(
        PropTypes.shape({
          current: PropTypes.objectOf(
            PropTypes.shape({
              text: PropTypes.string.isRequired
            })
          )
        })
      ),
      info: PropTypes.objectOf(
        PropTypes.shape({
          aboutMe: PropTypes.string.isRequired,
          sizeAndFit: PropTypes.string.isRequired,
          careInfo: PropTypes.string.isRequired
        })
      ),
      media: PropTypes.objectOf(
        PropTypes.shape({
          images: PropTypes.objectOf(
            PropTypes.shape({
              url: PropTypes.string.isRequired
            })
          )
        })
      )
    })
  ),
  loadSingleProduct: PropTypes.func.isRequired
};

export default withRouter(props => <SingleProduct {...props} />);
