import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/data";
import like from "./slices/like";


export const store = configureStore({
  reducer: {
    data,
    like,
  },
});
