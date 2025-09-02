import { configureStore } from "@reduxjs/toolkit";
import profileMeReducer from "../reducer/profileReducer";

const store = configureStore({
  reducer: profileMeReducer,
});

export default store;
