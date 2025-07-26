import wishListReducer from "./wishListReducer";
import cartItemsReducer from "./cartItemsReducers";
import productReducer from "./productReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemsReducer,
    wishList: wishListReducer,
  },
});
