// Action Types
const WISHLIST_ADDITEM = "wishList/addItem";
const WISHLIST_REMOVEITEM = "wishList/removeItem";

// Action Creator
export function addWishListItem(productId) {
  return { type: WISHLIST_ADDITEM, payload: { productId } };
}

export function removeWishListItem(productId) {
  return { type: WISHLIST_REMOVEITEM, payload: { productId } };
}

export default function wishListReducer(state = [], action) {
  switch (action.type) {
    case WISHLIST_ADDITEM:
      return [...state, action.payload];

    case WISHLIST_REMOVEITEM:
      return state.filter(
        (wishListItem) => wishListItem.productId != action.payload.productId
      );

    default:
      return state;
  }
}
