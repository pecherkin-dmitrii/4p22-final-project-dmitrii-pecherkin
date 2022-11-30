import {createSlice} from "@reduxjs/toolkit";

export const formValidationSlice = createSlice({
    name: "formValidation",
    initialState: {
        isEmailValid: false,
        isNameValid: false,
        isTextareaValid: false,
        isFileValid: false,
        isFileAdded: false
    },
    reducers: {
        setEmailValid: (state, {payload}) => {
            state.isEmailValid = payload;
        },
        setNameValid: (state, {payload}) => {
            state.isNameValid = payload;
        },
        setTextareaValid: (state, {payload}) => {
            state.isTextareaValid = payload;
        },
        setFileValid: (state, {payload}) => {
            state.isFileValid = payload;
        },
        setFileAdded: (state, {payload}) => {
            state.isFileAdded = payload;
        }
    }
});

export const {setEmailValid, setNameValid, setTextareaValid, setFileValid, setFileAdded} = formValidationSlice.actions;

export default formValidationSlice.reducer;