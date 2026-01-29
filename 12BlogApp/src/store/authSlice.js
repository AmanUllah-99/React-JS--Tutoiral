import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    userData: null,
    status: false,

};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers :{
        userLogin(state , action){
            state.userData = action.payload;
        },
        userLogout(state){
            state.userData = null;
        },
        
    }
})

export const { userLogin , userLogout} = authSlice.actions;

export default authSlice.reducer;