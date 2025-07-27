export const WISHLIST_ADDITEM = "wishList/addItem";
export const WISHLIST_REMOVEITEM = "wishList/removeItem";

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
