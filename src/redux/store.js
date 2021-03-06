import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import products from './productsRedux';
import product from './singleProductRedux';
import cart from './cartRedux';

// combine reducers
const rootReducer = combineReducers({
  products, product, cart
});

const store = createStore(
    rootReducer,
    compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

export default store;