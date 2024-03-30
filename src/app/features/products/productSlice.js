
import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    cartItems: [],
    items: [],
    sortBy: null,
  },
  reducers: {
    addToCard: (state, action) => {
        const newItem = action.payload;
        const existingItem = state.cartItems.find(item => item.id === newItem.id);
      
        if (existingItem) {
          existingItem.quantity++;
        } else {
          state.cartItems.push({ ...newItem, quantity: 1 });
        }
      },
      
    removeFromCard: (state, action) => {
      state.cartItems = state.cartItems.filter((el) => el.id !== action.payload);
    },
    fillBucket: (state, action) => {
      state.items = action.payload;
    },
    sortProducts: (state, action) => {
      state.sortBy = action.payload;
    },
    decrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((el) => el.id === id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
      }
    },
    incrementQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.cartItems.find((el) => el.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
  },
});

export const { addToCard, removeFromCard, fillBucket, sortProducts, decrementQuantity, incrementQuantity } = productSlice.actions;

export default productSlice.reducer;
