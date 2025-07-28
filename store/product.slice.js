import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    list: [],
    error: "",
  },
  reducers: {
    setProductLoadingState(state) {
      state.isLoading = true;
      state.error = "";
    },
    addAllProducts(state, action) {
      state.isLoading = false;
      state.list = action.payload;
      state.error = "";
    },
    setProductError(state) {
      state.isLoading = false;
      state.error = "Something Went Wrong";
    },
  },
});

// Creating Selectors

export const getProductList = (state) => state.products.list;
export const getProductLoadingState = (state) => state.products.isLoading;
export const getProductErrorState = (state) => state.products.error;

export default slice.reducer;

export const { addAllProducts, setProductLoadingState, setProductError } =
  slice.actions;
