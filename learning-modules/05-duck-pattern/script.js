import { combineReducers, createStore } from "redux";
import wishListReducer, {
  addWishListItem,
  removeWishListItem,
} from "./wishListReducer";
import cartItemsReducer, {
  addCartItem,
  decreaseCartQuantity,
  increaseCartQuantity,
  increaseCartQuantityBY,
  removeCartItem,
} from "./cartItemsReducers";
import productReducer from "./productReducer";

const reducer = combineReducers({
  products: productReducer,
  cartItems: cartItemsReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

console.log(store);
store.dispatch(addCartItem(12, 1));
store.dispatch(addCartItem(4, 1));
store.dispatch(addCartItem(5, 1));
store.dispatch(removeCartItem(12));

store.dispatch(increaseCartQuantity(4));
store.dispatch(decreaseCartQuantity(5));
store.dispatch(increaseCartQuantityBY(4, 10));

store.dispatch(addWishListItem(1));
store.dispatch(addWishListItem(1));
store.dispatch(removeWishListItem(1));

console.log(store.getState());
