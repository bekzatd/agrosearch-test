import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: {} };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => ({
            ...state,
            cart: action.payload,
        }),
    }
});

export const { add } = cartSlice.actions;

export const currentCart = (state) => state.cart.cart;

export default cartSlice.reducer;
