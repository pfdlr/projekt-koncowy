import { BASE_URL, API_PRODUCT_URL, HEADERS, DETAIL_PARAMS } from '../config';

/* SELECTORS */
export const getSingleProduct = ({ product }) => product.singleProduct;
export const getRequest = ({ product }) => product.request;


// action name creator
const reducerName = 'product';
const createActionName = name => `app/${reducerName}/${name}`;

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const loadSingleProduct = payload => ({ payload, type: LOAD_SINGLE_PRODUCT });
export const resetRequest = () => ({ type: RESET_REQUEST });


/* ACTIONS */
export const LOAD_SINGLE_PRODUCT = createActionName('LOAD_SINGLE_PRODUCT');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');


/* INITIAL STATE */

const initialState = {
  singleProduct: [],
  request: {
    pending: false,
    error: null,
    success: null,
  }
};


/* THUNKS */
/* load single product */
export const loadSingleProductRequest = (productId) => {
  return async dispatch => {

    const url = new URL(`${BASE_URL}${API_PRODUCT_URL}`),
      params = {
        DETAIL_PARAMS,
        id: productId
      };

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    dispatch(startRequest());

    fetch(url, HEADERS)
      .then(res => res.json())
      .then(res => {

        if (res.hasOwnProperty('message')) {
          dispatch(errorRequest(res.message));
        }
        else {
          dispatch(loadSingleProduct(res));
          dispatch(endRequest());
        }

      })
      .catch(error => {
        dispatch(errorRequest(error.message));
      });
  };
};


/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SINGLE_PRODUCT:
      return { ...statePart, singleProduct: action.payload };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null } };
    default:
      return statePart;
  }
};