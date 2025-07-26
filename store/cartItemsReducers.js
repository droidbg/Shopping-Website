/**
 * DUCK Pattern
 */

import { produce } from "immer";

// Action Types

const CART_ADDITEM = "cart/addItem";
const CART_REMOVEITEM = "cart/removeItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";

// Action Creators
export function addCartItem(productData, quantity = 1) {
  return { type: CART_ADDITEM, payload: { ...productData, quantity } };
}

export function removeCartItem(productId) {
  return { type: CART_REMOVEITEM, payload: { productId } };
}

export function increaseCartQuantity(productId) {
  return { type: CART_INCREASE_ITEM_QUANTITY, payload: { productId } };
}
export function decreaseCartQuantity(productId) {
  return { type: CART_DECREASE_ITEM_QUANTITY, payload: { productId } };
}

export default function cartItemsReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const elementIndex = state.findIndex((cartItem) => {
      return cartItem.productId === action.payload.productId;
    });
    switch (action.type) {
      case CART_ADDITEM:
        if (elementIndex !== -1) {
          // Element found (index is not -1 , means some index is there)
          state[elementIndex].quantity += 1;
          break;
        }
        state.push(action.payload);
        break;

      case CART_REMOVEITEM:
        state.splice(elementIndex, 1);
        break;
      case CART_INCREASE_ITEM_QUANTITY:
        state[elementIndex].quantity += 1;
        break;

      case CART_DECREASE_ITEM_QUANTITY:
        state[elementIndex].quantity -= 1;
        if (state[elementIndex].quantity <= 0) {
          state.splice(elementIndex, 1);
        }
    }
    return state;
  });
}
