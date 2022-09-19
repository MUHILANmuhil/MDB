import { configureStore } from "@reduxjs/toolkit";
import Movieslice from './Movieaction';
import Searchslice from './Searchaction';

let storage=configureStore({
    reducer:{
        movie:Movieslice,
        search:Searchslice
    }
})

export default storage;