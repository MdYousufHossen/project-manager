import { createSlice } from "@reduxjs/toolkit";

const initialState={
    selectInput:{}
}

const projectSlice=createSlice({
    name:"project",
    initialState,
    reducers:{
        teamInputSelect:(state,action)=>{
            state.selectInput=action.payload
        }
    }
})

export const {teamInputSelect}=projectSlice.actions;

export default projectSlice.reducer