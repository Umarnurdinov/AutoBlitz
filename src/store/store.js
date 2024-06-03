import { configureStore } from "@reduxjs/toolkit";
import detail from "./slices/detail";
import data from "./slices/data";
import like from "./slices/like";


export const store = configureStore({
  reducer: {
    detail,
    data,
    like,
  },
});
