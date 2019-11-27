import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import Products from './components/pages/Products/ProductsPage';
import Contact from './components/pages/Contact/ContactPage';
import SingleProduct from './components/pages/SingleProduct/SingleProductPage';
/* import AddProductToCart from './components/pages/AddProduct/AddProductPage'; */
import NotFound from './components/pages/NotFound/NotFoundPage';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/products/new" exact component={AddProductToCart} /> */}
          <Route path="/product/:id" exact component={SingleProduct} />
          <Route component={NotFound} />
        </Switch>
      </MainLayout>
    )
  }
}

export default App;

/* 
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: [],
        total: "",
        category: "",
        baseUrl: 'https://www.asos.com/'
    }
}


  componentDidMount() {
    fetch("http://localhost:8000/api/products")
      .then(res => res.json())
      .then(res => {
        this.setState({ items: res.data });
      });
  }

  render() {
    return (
      <div>
        <ul>as
          {this.state.items.categoryName}
        </ul>
      </div>
    );
  }
}

export default App;
 */