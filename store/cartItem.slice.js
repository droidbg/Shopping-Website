/**
 * DUCK Pattern
 */

import { createSelector, createSlice } from "@reduxjs/toolkit";

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

// * Selectors
// A "selector" is any function that accepts the Redux state tree as an argument, and returns some extracted or derived data. That includes plain functions like you showed.

// In many cases, you want to memoize the calculation of the results, such as mapping over an array of items, so that it's not re-calculated unless the inputs have changed. Reselect's createSelector creates memoized selector functions that only recalculate the output if the inputs change.

export const getCartLoadingState = (state) => state.cartItems.isLoading;
export const getCartErrorState = (state) => state.cartItems.error;

const getCartDetailsFromProducts = ({ products, cartItems }) => {
  return cartItems.cartList
    .map(({ productId, quantity }) => {
      const cartProduct = products.list.find(
        (product) => product.id === productId
      );
      return { ...cartProduct, quantity };
    })
    .filter(({ title }) => title);
};

// * Selectors created for memoization using createSelector

export const getAllCartItems = createSelector(
  (cartItem) => cartItem,
  getCartDetailsFromProducts
);

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
