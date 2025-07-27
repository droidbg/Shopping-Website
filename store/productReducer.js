import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "products",
  initialState: {
    isLoading: false,
    list: [],
    error: ""
  },
  reducers: {
    setLoadingState(state)
    {
      state.isLoading = true
      state.error = "";

    },
    addAllProducts(state, action) {
      state.isLoading = false;
      state.list = action.payload
      state.error = "";
    },
    setError(state)
    {
      state.isLoading = false;
      state.error = "Something Went Wrong"
    }
  },
});

export default slice.reducer;

export const { addAllProducts , setLoadingState, setError} = slice.actions;
