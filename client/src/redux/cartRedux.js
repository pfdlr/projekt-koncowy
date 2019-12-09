/* SELECTORS */

export const getCart = ( {cart} ) => cart.cartData;
export const cartDiscount = ( {cart} ) => cart.discount;

//get total amount of products in a cart
export const productsInCart = ({ cart }) => {
  const amounts = cart.cartData === 0 ? 0 : cart.cartData.map(a => (a.amount));
  return (amounts === 0 ? 0 : amounts === 1 ? 1 : amounts.reduce((acc, amount) => acc+= amount, 0))
};

//get total price
export const getSummary = ({ cart }) => {
    const oneIdValue = cart.cartData.map(v => (v.pricevalue * v.amount))
    return ((oneIdValue.reduce((acc, amount) => acc+= amount, 0) * cart.discount).toFixed(2))
};

/* ACTIONS */

// action name creator

export const LOAD_CART = "LOAD_CART";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const INCREASE_PRODUCT = "INCREASE_PRODUCT";
export const DECREASE_PRODUCT = "DECREASE_PRODUCT";
export const GET_DISCOUNT = "GET_DISCOUNT";

//ACTIONS
//export const loadCart = products => ({ type: LOAD_CART, payload: products});
export const addProductToCart = product => ({ type: ADD_PRODUCT, payload: product });
export const removeCartProduct = id => ({ type: REMOVE_PRODUCT, payload: id });
export const increaseProductAmount = id => ({ type: INCREASE_PRODUCT, payload: id });
export const decreaseProductAmount = id => ({ type: DECREASE_PRODUCT, payload: id });
export const getDiscount = discount => ({ type: GET_DISCOUNT, payload: discount });




/* INITIAL STATE */

const initialState = {
  cartData: [],
  discount: 1,
  promoCode: 'PROMO'
};

/* REDUCER */
export default function cartRedux(state = initialState, action) {
  switch (action.type) {
    case LOAD_CART:
      return {
        ...state,
        cartData: action.payload
      };
    case ADD_PRODUCT: {
      const cartData = state.cartData.findIndex(i => i.id === action.payload.id) === -1
          ? [...state.cartData, action.payload]
          :  [ ...state.cartData.map(productId => (productId.id !== action.payload.id ? productId : { ...productId, amount: productId.amount + 1 })) ];
          return {...state, cartData }
        }
    case REMOVE_PRODUCT:
      return { ...state, cartData: state.cartData.filter(item => !(item.id === action.payload)) };
    /* case GET_DISCOUNT: return { ...state, data: action.payload }; */
    case INCREASE_PRODUCT:
      return { ...state, cartData: state.cartData.map(item => (item.id !== action.payload ? item : { ...item, amount: item.amount + 1 })) };
    case DECREASE_PRODUCT:
      return { ...state, cartData: state.cartData.map(item => (item.id !== action.payload ? item : { ...item, amount: item.amount - 1 })) };
    case GET_DISCOUNT:
        return {...state, discount: action.payload}
      default:
      return state;
  }
}
////////////////////////////////////////////////
/* { ...state, cartData: state.cartData.map(productId => (productId.id).indexOf(action.payload.id)) === -1 ?
  {...state, cartData: [...state.cartData, action.payload]}  :
 {...state, cartData: state.cartData.map(productId => (productId.id !== action.payload) ? productId : { ...productId, amount: productId.amount+1 }) }}; */
