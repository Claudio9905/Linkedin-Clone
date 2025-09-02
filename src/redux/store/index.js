import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";

const store = configureStore({
  reducer: profileReducer,
});

export default store;
