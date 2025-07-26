/**
 * DUCK Pattern
 */

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

export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case CART_ADDITEM:
      const elementFound = state.find(
        (cartItem) => cartItem.productId === action.payload.productId
      );
      if (elementFound) {
        return state.map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else return cartItem;
        });
      }

      return [...state, action.payload];

    case CART_REMOVEITEM:
      return state.filter(
        (cartItem) => cartItem.productId != action.payload.productId
      );

    case CART_INCREASE_ITEM_QUANTITY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

    case CART_DECREASE_ITEM_QUANTITY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
