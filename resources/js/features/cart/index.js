import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] };

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => ({
            ...state,
            cart: action.payload,
        }),
    }
});

export const { addToCart } = cartSlice.actions;

export const currentCart = (state) => state.cart.cart;

export default cartSlice.reducer;
