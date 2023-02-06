import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  userId: null,
  nickname: null,
  email: null,
  avatar: null,
  stateChange: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserProfile: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      nickname: payload.nickname,
      email: payload.email,
      avatar: payload.avatar,
    }),
    authStateChange: (state, { payload }) => ({
      ...state,
      stateChange: payload.stateChange,
    }),
    authIsLoading: (state, { payload }) => ({
      ...state,
      isLoading: payload.isLoading,
    }),
    authSignOut: () => initialState,
  }
});






