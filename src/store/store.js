import { configureStore } from "@reduxjs/toolkit";
import data from "./slices/data";
import like from "./slices/like";
import number from "./slices/number";

export const store = configureStore({
  reducer: {
    data,
    like,
    number,
  },
});
