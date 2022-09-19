import { createSlice } from "@reduxjs/toolkit";

let initialState={
    movies:[],
}

let searchSlice=createSlice({
    name:'search',
    initialState,
    reducers:{
        addsearchs:(state,{payload})=>{
            state.movies=payload;
        }
    }
});

export let {addsearchs} = searchSlice.actions;
export let getsearch=(state)=>state.search.movies
export default  searchSlice.reducer;