import { configureStore } from "@reduxjs/toolkit";
import like from "./slices/like";

export const store = configureStore({
    reducer:{
        LikeSlice
    }
})