import { configureStore } from "@reduxjs/toolkit";
import like from "../store/slices/like";


 export const store =configureStore({
    reducer:{
     like
    }
})
