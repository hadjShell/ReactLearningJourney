import { createSlice } from "@reduxjs/toolkit";

const isLoginSlice = createSlice({
  name: "isLogin",
  initialState: false,
  reducers: {
    login: () => true,
    logout: () => false,
  },
});

const isLoginReducer = isLoginSlice.reducer;
export default isLoginReducer;

export const { login, logout } = isLoginSlice.actions;

export const selectIsLogin = state => state.isLogin;
