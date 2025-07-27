import { createSlice } from "@reduxjs/toolkit";
/**
 * Redux toolkit create action type, action creators and reducers automatically for us
 * via createSlice method, it also immutable object creation and updation automatically via immer (we dont need to install immer manually or use produce method)
 */

const findItemIndex = (state, action) => {
  const elementIndex = state.findIndex(
    (wishListItem) => wishListItem.productId === action.payload.productId
  );
  return elementIndex;
};

const slice = createSlice({
  name: "wishList",
  initialState: [],
  reducers: {
    addWishListItem(state, action) {
      const elementIndex = findItemIndex(state, action);
      if (elementIndex === -1) {
        state.push(action.payload);
      }
    },
    removeWishListItem(state, action) {
      // console.log(action);
      const elementIndex = findItemIndex(state, action);
      elementIndex != -1 && state.splice(elementIndex, 1);
    },
  },
});

export default slice.reducer;

export const { addWishListItem, removeWishListItem } = slice.actions;

// console.dir(addWishListItem);
// console.dir(addWishListItem.type);
// console.log(addWishListItem.toString());
