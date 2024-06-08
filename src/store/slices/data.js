import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [],
   carsData:[]
 };
const DataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addData(state, action) {
      state.data = [...state.data, action.payload];
    },
    addCarsData(state,action){
      state.carsData=[...state.carsData,action.payload]
    }
  },
});
export const { addData,addCarsData } = DataSlice.actions;
export default DataSlice.reducer;
