import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    foods: [],
    quantity:0,
    total: 0,
  },
  reducers: {
    addFood: (state, action) => {
      state.foods.push(action.payload)
      state.quantity +=1
      state.total +=action.payload.price * action.payload.quantity
    },
    reset:(state) => {
        state = initialState
    }
  },
});

export const {addFood, reset} = cartSlice.actions
export default cartSlice.reducer
