import { produce } from "immer";

// Action Types
const WISHLIST_ADDITEM = "wishList/addItem";
const WISHLIST_REMOVEITEM = "wishList/removeItem";

// Action Creator
export function addWishListItem(productData) {
  return { type: WISHLIST_ADDITEM, payload: { ...productData } };
}

export function removeWishListItem(productId) {
  return { type: WISHLIST_REMOVEITEM, payload: { productId } };
}

export default function wishListReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const elementIndex = state.findIndex(
      (wishListItem) => wishListItem.productId === action.payload.productId
    );
    switch (action.type) {
      case WISHLIST_ADDITEM:
        if (elementIndex != -1) {
          break;
        }
        state.push(action.payload);
        break;

      case WISHLIST_REMOVEITEM:
        state.splice(elementIndex, 1);
    }
    return state;
  });
}
