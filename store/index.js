import wishListReducer from "./wishList.slice";
import cartItemsReducer from "./cartItem.slice";
import productReducer from "./product.slice";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemsReducer,
    wishList: wishListReducer,
  },
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
