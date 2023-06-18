import { configureStore } from "@reduxjs/toolkit";
import akun from "./akun";
import todos from "./todos";
import setting from "./setting";

const store = configureStore({
  reducer: {
    // Reducers
    akun: akun,
    todos: todos,
    setting: setting,
  },
});

export default store;
