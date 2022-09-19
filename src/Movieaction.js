import { createSlice } from "@reduxjs/toolkit";

let initialState={
    movies:[],
}

let movieSlice=createSlice({
    name:'movie',
    initialState,
    reducers:{
        addmovies:(state,{payload})=>{
            state.movies=payload;
        }
    }
});

export let {addmovies} = movieSlice.actions;
export let getmovies=(state)=>state.movie.movies
export default  movieSlice.reducer;