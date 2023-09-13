import { createSlice } from "@reduxjs/toolkit";

const NewCartSlice = createSlice({
    name : "myCart",
    initialState :{
        count : 0 ,
    },
    reducers:{
        incCartCount : (initialState)=> {
            initialState.count += 1
        },
        decCartCount : (initialState)=> {
            initialState.count -= 1
        },
    },
})

export default NewCartSlice.reducer;
export const {incCartCount,decCartCount} = NewCartSlice.actions;