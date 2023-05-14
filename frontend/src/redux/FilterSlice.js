import { createSlice } from "@reduxjs/toolkit";

const FilterSlice=createSlice({
    name:'filter',
    initialState:{
        name :"ali",
        count:5
    },
    reducers:{
      changeName:(state)=>{
        return state.name='Mohammad';
      },
      changenumber:(state)=>{
        return state.count+=1;
      }
    },
}
)
export const {changeName,changenumber}=FilterSlice.actions;
export default FilterSlice.reducer