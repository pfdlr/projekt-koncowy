/* 
/* SELECTORS */
/* export const getSingleProduct = ({ product }) => product.singleProduct;
export const getRequest = ({ product }) => product.request; */

/*
// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;


export const addToCart = ({id, name, price, picture, number}) => {
    return {
        type: ADD_TO_CART,
        payload: {id, name, price, picture, number}
    }
}

/* ACTIONS */
/*
export const LOAD_CART = createActionName('LOAD_CART');
export const ADD_TO_CART = createActionName('ADD_TO_CART');
export const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
export const INCREASE_PRODUCTS = createActionName('INCREASE_PRODUCTS');
export const DECREASE_PRODUCTS = createActionName('DECREASE_PRODUCTS');


/* INITIAL STATE */
/*
const initialState = {
  cartItems: {
        id: '1',
        name: 'Test',
        price: '12',
        picture: 'img',
        number: '1'
    }
};


/* THUNKS */
/* load single product *


/* REDUCER */
/*
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...statePart, cartItems: action.payload };
    default:
      return statePart;
  }
}; */

/* SELECTORS */

export const getCart = ({ cart }) => cart.cartData;

/* ACTIONS */

// action name creator

export const LOAD_CART = 'LOAD_CART';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const INCREASE_PRODUCT = 'INCREASE_PRODUCT';
export const DECREASE_PRODUCT = 'DECREASE_PRODUCT';

//ACTIONS
export const loadCart = products => ({ type: LOAD_CART, payload: products});
export const decreaseProductAmount = id => ({ type: DECREASE_PRODUCT, payload: id });
export const addProductToCart = product => ({ type: ADD_PRODUCT, payload: product});
export const removeCartProduct = product => ({ type: REMOVE_PRODUCT, payload: product});
export const increaseProductAmount = id => ({ type: INCREASE_PRODUCT, payload: id });
/* export const setDiscount = product => ({ type: SET_DISCOUNT, payload: product});


/* INITIAL STATE */

const initialState = {
    cartData: [],
};

/* REDUCER */
export default function cartRedux(state = initialState, action) {
    switch (action.type) {
        case LOAD_CART:
            return {
                ...state,
                cartData: action.payload
            };
        case ADD_PRODUCT:
            return {...state, cartData: [...state.cartData, action.payload]
            };
        case REMOVE_PRODUCT:
            let newData = state.cartData.filter(product => product.id !== action.payload)
            return { ...state, cartData: newData };
        case INCREASE_PRODUCT:
            return {...state, cartData: state.cartData.map(item => (item.product !== action.payload) ? item : { ...item, amount: item.amount+1 }) };
        case DECREASE_PRODUCT:
            return {...state, cartData: state.cartData.map(item => (item.product !== action.payload) ? item : { ...item, amount: item.amount-1 }) };
        default:
            return state;
    }
}


