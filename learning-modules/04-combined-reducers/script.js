import { combineReducers, createStore } from "redux";
import wishListReducer, {
  WISHLIST_ADDITEM,
  WISHLIST_REMOVEITEM,
} from "./wishListReducer";
import cartItemsReducer, {
  CART_ADDITEM,
  CART_DECREASE_ITEM_QUANTITY,
  CART_INCREASE_ITEM_QUANTITY,
  CART_INCREASE_ITEMBY,
  CART_REMOVEITEM,
} from "./cartItemsReducers";
import productReducer from "./productReducer";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartItemsReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);

store.dispatch({ type: CART_ADDITEM, payload: { productId: 6, quantity: 1 } });

store.dispatch({ type: CART_REMOVEITEM, payload: { productId: 12 } });
store.dispatch({
  type: CART_INCREASE_ITEM_QUANTITY,
  payload: { productId: 6 },
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
  type: WISHLIST_ADDITEM,
  payload: {
    productId: 1,
  },
});

store.dispatch({
  type: WISHLIST_REMOVEITEM,

  payload: {
    productId: 1,
  },
});

console.log(store.getState());
