import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
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
    incrementQty: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      item.quantity++;
    },
    decrementQty: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, deleteItem, incrementQty, decrementQty } =
  amazonSlice.actions;
export default amazonSlice.reducer;
