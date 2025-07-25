import { createStore } from "redux";
import { productList } from "./products";

console.log(productList);

const CART_ADDITEM = "cart/addItem";
const CART_REMOVEITEM = "cart/removeItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";
const CART_INCREASE_ITEMBY = "cart/increaseItemBy";
const CART_DECREASE_ITEMBY = "cart/decreaseItemBy";

const WISHLIST_ADDITEM = "wishList/addItem";
const WISHLIST_REMOVEITEM = "wishList/removeItem";

const initialState = {
  products: productList,
  cartItems: [],
  wishList: [],
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case CART_ADDITEM:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case CART_REMOVEITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId != action.payload.productId
        ),
      };
    case CART_INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else return cartItem;
        }),
      };
    case CART_DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        }),
      };
    case CART_INCREASE_ITEMBY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity + action.payload.increaseBy,
            };
          }
          return cartItem;
        }),
      };
    case CART_DECREASE_ITEMBY:
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - action.payload.decreaseBy,
            };
          }
          return cartItem;
        }),
      };
    case WISHLIST_ADDITEM:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case WISHLIST_REMOVEITEM:
      return {
        ...state,
        wishList: state.wishList.filter(
          (wishItem) => wishItem.productId != action.payload.productId
        ),
      };

    default:
      return state;
  }
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({ type: CART_ADDITEM, payload: { productId: 6, quantity: 1 } });
store.dispatch({ type: CART_ADDITEM, payload: { productId: 12, quantity: 1 } });
store.dispatch({ type: CART_ADDITEM, payload: { productId: 7, quantity: 1 } });
store.dispatch({ type: CART_REMOVEITEM, payload: { productId: 12 } });
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 6 },
});
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 6 },
});
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 6 },
});

store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 7 },
});
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 7 },
});
store.dispatch({
  type: CART_DECREASE_ITEM_QUANTITY,
  payload: { productId: 7 },
});

store.dispatch({
  type: CART_INCREASE_ITEMBY,
  payload: {
    productId: 7,
    increaseBy: 10,
  },
});

store.dispatch({
  type: CART_DECREASE_ITEMBY,
  payload: {
    productId: 6,
    decreaseBy: 2,
  },
});

store.dispatch({
  type: WISHLIST_ADDITEM,
  payload: {
    productId: 1,
  },
});

store.dispatch({
  type: WISHLIST_ADDITEM,
  payload: {
    productId: 2,
  },
});

store.dispatch({
  type: WISHLIST_REMOVEITEM,
  payload: {
    productId: 2,
  },
});
