import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };
const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action) {
      state.data = [...state.data, action.payload];
    },
  },
});
export const { addData } = DataSlice.actions;
export default DataSlice.reducer;
