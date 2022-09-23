import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectInput:{},
    searchString:""
}

const projectSlice=createSlice({
    name:"project",
    initialState,
    reducers:{
        teamInputSelect:(state,action)=>{
            state.selectInput=action.payload
        },
        inputSearch:(state,action)=>{
            state.searchString=action.payload
        }
    }
})

export const {teamInputSelect,inputSearch}=projectSlice.actions;

export default projectSlice.reducer