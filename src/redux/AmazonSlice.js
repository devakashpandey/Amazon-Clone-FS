import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: [],
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productItem = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (productItem) {
        productItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { addToCart } = amazonSlice.actions;
export default amazonSlice.reducer;
