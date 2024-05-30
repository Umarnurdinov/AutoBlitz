import { createSlice } from "@reduxjs/toolkit";
//текущее состояние
const initialState={
    todo:[],
}

const LikeSlice=createSlice({
    name:'Like',
    initialState,
    reducers:{
        //тут будут методы
        addTodo(state,action){
            state.todo=[...state.todo,action.payload]
        },
    }
})
//сюда методдорду экспорт кылам
export const {addTodo}=LikeSlice.actions
export default LikeSlice.reducer()




