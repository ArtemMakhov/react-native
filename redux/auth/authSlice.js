import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userId: null,
  nickname: null,
    email: null,
    stateChange: false,
  }
export  const authSlice = createSlice({
  name: "auth",
  initialState ,
   reducers: {
     updateUserProfile: (state, { payload }) => ({
       ...state,
       userId: payload.userId,
       nickname: payload.nickname,
       email: payload.email,
     }),
     authStateChange: (state, { payload }) => ({
       ...state,
       stateChange: payload.stateChange,
     }),
     authSignOut: () => initialState,
  }
 });



// export default authSlice.reducer;


