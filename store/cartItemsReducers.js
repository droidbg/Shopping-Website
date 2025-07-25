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
  initialState: [],
  reducers: {
    addCartItem(state, action) {
      const elementIndex = findElement(state, action);
      if (elementIndex === -1) {
        // Element not found so add it
        state.push(action.payload);
      } else {
        state[elementIndex].quantity += 1;
      }
    },
    removeCartItem(state, action) {
      const elementIndex = findElement(state, action);
      elementIndex != -1 && state.splice(elementIndex, 1);
    },
    increaseCartQuantity(state, action) {
      const elementIndex = findElement(state, action);
      state[elementIndex].quantity += 1;
    },
    decreaseCartQuantity(state, action) {
      const elementIndex = findElement(state, action);
      state[elementIndex].quantity -= 1;
      if (state[elementIndex].quantity <= 0) {
        state.splice(elementIndex, 1);
      }
    },
  },
});

export default slice.reducer;

export const {
  addCartItem,
  removeCartItem,
  increaseCartQuantity,
  decreaseCartQuantity,
} = slice.actions;
