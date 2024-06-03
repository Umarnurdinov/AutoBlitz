import { configureStore } from "@reduxjs/toolkit";
import detail from "./slices/detail";
import data from "./slices/data";

export const store = configureStore({
  reducer: {
    detail,
    data,
  },
});
