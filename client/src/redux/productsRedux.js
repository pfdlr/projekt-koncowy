import axios from "axios";
import { BASE_URL, API_URL } from "../config";
import { orderBy } from "lodash";

/* SELECTORS */
export const getRequest = ({ products }) => products.request;
export const getProductsCounter = ({ products }) => products.data.length;
export const getSortedProducts = ({ products }) => {
  const end =  (products.presentPage * products.productsPerPage);
  const start = (end - products.productsPerPage);
  let _ = require('lodash')
  let list = _.orderBy([...products.data], products.key, products.order);
  return (list.slice(start, end))
 };



export const getPages = ({ products }) => Math.ceil(products.data.length / products.productsPerPage);
export const presentPage = ({ products }) => products.presentPage;

// action name creator
const reducerName = "products";
const createActionName = name => `app/${reducerName}/${name}`;

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const setSortArgs = payload => ({payload, type: SORT_ARGS})

export const loadProductsByPage = payload => ({ payload, type: LOAD_PRODUCTS_PAGE });



/* ACTIONS */
export const LOAD_PRODUCTS = createActionName("LOAD_PRODUCTS");
export const START_REQUEST = createActionName("START_REQUEST");
export const END_REQUEST = createActionName("END_REQUEST");
export const ERROR_REQUEST = createActionName("ERROR_REQUEST");
export const RESET_REQUEST = createActionName("RESET_REQUEST");
export const LOAD_PRODUCTS_PAGE = createActionName("LOAD_PRODUCTS_PAGE");
export const SORT_ARGS = createActionName('SORT_ARGS');
export const LOAD_SORTED_PRODUCTS = createActionName('LOAD_SORTED_PRODUCTS');

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null
  },
  key: '',
  order: '',
  amount: 0,
  productsPerPage: 9,
  presentPage: 1,
};

/* THUNKS */
/* load all products */
export const loadProductsRequest = () => {
  return async dispatch => {
    
    dispatch(startRequest());

    try {
      let res = await axios.get(`${BASE_URL}${API_URL}/products`);
      dispatch(loadProducts(res.data));
      dispatch(endRequest());
    } catch (e) {
      dispatch(errorRequest(e.message));
    }
  };
};



/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...statePart, data: action.payload.data.products };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };
    case SORT_ARGS: 
      return { ...statePart, key: action.payload.key, order: action.payload.order };
    case LOAD_PRODUCTS_PAGE:
      return { ...statePart, presentPage: action.payload };
    default:
      return statePart;
  }
}
