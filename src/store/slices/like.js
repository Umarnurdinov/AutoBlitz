import { createSlice } from "@reduxjs/toolkit";
//текущее состояние
const initialState={
    favorite:[],
    countFav:0,
}

const LikeSlice=createSlice({
    name:'Like',
    initialState,
    reducers:{
        //тут будут методы
        addFavorite(state,action){
            state.favorite=[...state.favorite,action.payload]
        },
    }
})
//сюда методдорду экспорт кылам
export const {addFavorite}=LikeSlice.actions
export default LikeSlice.reducer





