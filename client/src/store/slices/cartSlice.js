import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  total: 0,
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const foundProduct = state.products.find(
        (item) => item._id === action.payload._id
      );

      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.value += 1;
      state.total += action.payload.price;
    },

    removeFromCart: (state, action) => {
      const foundProductIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (foundProductIndex !== -1) {
        const foundProduct = state.products[foundProductIndex];

        if (foundProduct.quantity > 1) {
          foundProduct.quantity -= 1;
          state.value -= 1;
        } else {
          state.products = state.products.filter(
            (item) => item._id !== action.payload._id
          );
          state.value -= 1;
        }
      }

      state.total -= action.payload.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
