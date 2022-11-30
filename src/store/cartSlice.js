import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {},
    reducers: {
        addToCart: (state, {payload}) => {
            if (!state.hasOwnProperty(payload)) state[payload] = 1;
        },
        removeFromCart: (state, {payload}) => {
            delete state[payload];
        },
        incrementInCart: (state, {payload}) => {
            if (state.hasOwnProperty(payload)) state[payload] = state[payload] + 1;
        },
        decrementInCart: (state, {payload}) => {
            if (state.hasOwnProperty(payload)) state[payload] = state[payload] - 1;
            if (state[payload] === 0) delete state[payload];
        },
        clearCart: () => {
            return {};
        }
    }
});

export const {addToCart, removeFromCart, incrementInCart, decrementInCart} = cartSlice.actions;

export default cartSlice.reducer;