/**
 * DUCK Pattern
 */

import { createSlice } from "@reduxjs/toolkit";

const findElement = (state, action) => {
  return state.findIndex((cartItem) => {
    return cartItem.productId === action.payload.productId;
  });
};

const slice = createSlice({
  name: "cart",
  initialState: {
    isLoading: false,
    cartList: [],
    error: "",
  },
  reducers: {
    loadAllCartItems(state, action) {
      state.isLoading = false;
      state.cartList = action.payload;
      state.error = "";
    },
    setCartLoadingState(state) {
      state.isLoading = true;
      state.error = "";
    },
    setCartError(state) {
      state.isLoading = false;
      state.error = "Something went wrong";
    },
    addCartItem(state, action) {
      const elementIndex = findElement(state.cartList, action);
      if (elementIndex === -1) {
        // Element not found so add it
        state.cartList.push(action.payload);
      } else {
        state.cartList[elementIndex].quantity += 1;
      }
    },
    removeCartItem(state, action) {
      const elementIndex = findElement(state.cartList, action);
      elementIndex != -1 && state.cartList.splice(elementIndex, 1);
    },
    increaseCartQuantity(state, action) {
      const elementIndex = findElement(state.cartList, action);
      state.cartList[elementIndex].quantity += 1;
    },
    decreaseCartQuantity(state, action) {
      const elementIndex = findElement(state.cartList, action);
      state.cartList[elementIndex].quantity -= 1;
      if (state.cartList[elementIndex].quantity <= 0) {
        state.cartList.splice(elementIndex, 1);
      }
    },
  },
});

export default slice.reducer;

export const {
  loadAllCartItems,
  setCartLoadingState,
  setCartError,
  addCartItem,
  removeCartItem,
  increaseCartQuantity,
  decreaseCartQuantity,
} = slice.actions;
