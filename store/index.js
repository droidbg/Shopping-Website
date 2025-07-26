import wishListReducer from "./wishListReducer";
import cartItemsReducer from "./cartItemsReducers";
import productReducer from "./productReducer";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "../middleware/logger";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cartItems: cartItemsReducer,
    wishList: wishListReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});
