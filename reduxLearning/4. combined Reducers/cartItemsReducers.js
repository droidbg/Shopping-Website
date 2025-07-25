export const CART_ADDITEM = "cart/addItem";
export const CART_REMOVEITEM = "cart/removeItem";
export const CART_INCREASE_ITEM_QUANTITY = "cart/increaseItemQuantity";
export const CART_DECREASE_ITEM_QUANTITY = "cart/decreaseItemQuantity";
export const CART_INCREASE_ITEMBY = "cart/increaseItemBy";
export const CART_DECREASE_ITEMBY = "cart/decreaseItemBy";

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
        if (cartItem.productId === action.productId) {
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
            quantity: cartItem.quantity + action.payload.increaseBy,
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
              quantity: cartItem.quantity - action.payload.decreaseBy,
            };
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.quantity > 0);

    default:
      return state;
  }
}
