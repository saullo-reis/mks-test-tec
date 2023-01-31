import { createSlice } from "@reduxjs/toolkit";

interface Products {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

const INITIAL_STATE: Products[] = [];

const sliceProducts = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    addProducts(state, action) {
      return [...state, action.payload];
    },
    removeProducts: (state, action) => void state.splice(action.payload, 1),
    incrementQuantity: (state, action) =>
      void (state[action.payload].quantity += 1),
    decrementQuantity(state, action) {
      if (state[action.payload].quantity !== 1) {
        return void (state[action.payload].quantity -= 1);
      }
    },
  },
});

export default sliceProducts.reducer;
export const {
  addProducts,
  removeProducts,
  incrementQuantity,
  decrementQuantity,
} = sliceProducts.actions;

export const useProducts = (state: any) => {
  return state.products as Products[];
};
