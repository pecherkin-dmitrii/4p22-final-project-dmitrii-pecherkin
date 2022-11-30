import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: {
        addProducts: (state, {payload}) => {
            return payload;
        }
    }
});

export const {addProducts} = productsSlice.actions;

export default productsSlice.reducer;