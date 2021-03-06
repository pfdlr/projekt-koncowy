import React from "react";
import { withRouter } from "react-router-dom";

import { PropTypes } from "prop-types";
import Spinner from "../../common/Spinner/Spinner";
import Alert from "../../common/Alert/Alert";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import { Button } from "react-bootstrap";
import TinySlider from "tiny-slider-react";
import "./SingleProduct.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

class SingleProduct extends React.Component {
  componentDidMount() {
    const { loadSingleProduct, resetRequest, productId } = this.props;
    loadSingleProduct(productId);
    resetRequest();
  }

  handleClickAdd = e => {
    e.stopPropagation();
    const { addProductToCart, product } = this.props;
    addProductToCart({
      id: product.id,
      name: product.name,
      price: product.price.current.text,
      pricevalue: product.price.current.value,
      imgurl: product.media.images[0].url,
      brand: product.brand.name,
      amount: 1
    });
    this.props.history.push("/cart");
  };
  onGoTo = dir => this.ts.slider.goTo(dir);
  render() {
    const { product, request } = this.props;
    const settings = { nav: false, mouseDrag: true, loop: true, items: 1, gutter: 5, controls: false };
    if (request.pending === false && request.success === true)
      return (
        <div className="product-page">
          <SectionTitle>{product.name}</SectionTitle>
          <p>Brand: {product.brand.name}</p>
          <div className="product-property">
            <div className="slider">
              <div className="slider-controls">
                <FaChevronLeft onClick={() => this.onGoTo("prev")} />
                <FaChevronRight onClick={() => this.onGoTo("next")} />
              </div>
              <TinySlider settings={settings} ref={ts => (this.ts = ts)}>
                {product.media.images.map((image, i) => (
                  <div xs={12} sm={6} md={4} key={i} className="product-image">
                    <img src={"http://" + image.url} alt={product.name} />
                  </div>
                ))}
              </TinySlider>
            </div>
            <div className="product-data">
              {product.price.isOutletPrice ? (
                <div className="prices">
                  <h5 className="current-price">Price: {product.price.current.text}</h5>
                  <h6 className="rrp-price">Old Price: {product.price.rrp.text}</h6>
                  <div className="outlet">outlet</div>
                </div>
              ) : product.price.isMarkedDown ? (
                <div className="prices">
                  <h5 className="current-price">Price: {product.price.current.text}</h5>
                  <h6 className="rrp-price">Old Price: {product.price.previous.text}</h6>
                  <div className="marked-down">marked down</div>
                </div>
              ) : (
                <h5 className="current-price">Price: {product.price.current.text}</h5>
              )}
              <HtmlBox>{product.description}</HtmlBox>
              <HtmlBox>{product.info.aboutMe}</HtmlBox>
              <HtmlBox>{product.info.sizeAndFit}</HtmlBox>
              <HtmlBox>{product.info.careInfo}</HtmlBox>
            </div>
          </div>
          <div className="product-buttons">
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
  }
}

SingleProduct.propTypes = {
  loadSingleProduct: PropTypes.func.isRequired
};

export default withRouter(props => <SingleProduct {...props} />);
