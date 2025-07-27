// Action Types

const CART_ADDITEM = "cart/addItem";
const CART_REMOVEITEM = "cart/removeItem";
const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";
const CART_INCREASE_ITEMBY = "cart/increaseItemBy";
const CART_DECREASE_ITEMBY = "cart/decreaseItemBy";

// Action Creators
export function addCartItem(productId, quantity = 1) {
  return { type: CART_ADDITEM, payload: { productId, quantity } };
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
export function increaseCartQuantityBY(productId, quantity = 1) {
  return { type: CART_INCREASE_ITEMBY, payload: { productId, quantity } };
}

export function decreaseCartQuantityBY(productId, quantity = 1) {
  return { type: CART_DECREASE_ITEMBY, payload: { productId, quantity } };
}

export default function cartItemsReducer(state = [], action) {
  switch (action.type) {
    case CART_ADDITEM:
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

    case CART_INCREASE_ITEMBY:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + action.payload.quantity,
          };
        }
        return cartItem;
      });

    case CART_DECREASE_ITEMBY:
      return state
        .map((cartItem) => {
          if (cartItem.productId === action.payload.productId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - action.payload.quantity,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
