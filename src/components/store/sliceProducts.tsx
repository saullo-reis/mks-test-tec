import {createSlice} from '@reduxjs/toolkit'
import { ScriptTarget } from 'typescript';

interface Products {
  id: number;
  name: string;
  photo: string;
  price: string;
  quantity: number;
}

const INITIAL_STATE: Products[] = [

]

const sliceProducts = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    addProducts(state, action) {
      return [...state, action.payload];
    },
    removeProducts: (state, action) => void state.splice(action.payload, 1),
    incrementQuantity: (state, action) => void state[action.payload].quantity,
  },
});

export default sliceProducts.reducer;
export const {addProducts, removeProducts} = sliceProducts.actions;

export const useProducts = ( state: any) => {
    return state.products as Products[]
}