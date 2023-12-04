import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import isLoginReducer from "./isLoginSlice";

const store = configureStore({
  reducer: { counter: counterReducer, isLogin: isLoginReducer },
});

export default store;
