import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import productsReducer from "./productsSlice"
import formValidationReducer from "./formValidationSlice"

export default configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        formValidation: formValidationReducer
    }
});