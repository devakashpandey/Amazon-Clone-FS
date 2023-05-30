import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

export const amazonSlice = createSlice({
  name: "amazon",
  initialState,
  reducers: {
    // add to cart
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
    // delete item
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload // clicked id jis product id se match nahi kia us usko reder kro aur jise match hua usko delete kr do
      );
    },

    // user authentication
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    // user signout
    userSignOut: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  deleteItem,
  incrementQty,
  decrementQty,
  setUserInfo,
  userSignOut,
} = amazonSlice.actions;
export default amazonSlice.reducer;
