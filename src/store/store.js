import { configureStore } from "@reduxjs/toolkit";
import detail from "./slices/detail";
import data from "./slices/data";
import like from "./slices/like";
import number from "./slices/number";

export const store = configureStore({
  reducer: {
    detail,
    data,
    like,
    number,
  },
});
