import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userIdReducer from "../reducer/userIdReducer";
import editProfileReducer from "../reducer/editProfileReducer";
import profileMainReducer from "../reducer/profileMainreducer";

const combinedReducer = combineReducers({
  mainProfile: profileMainReducer,
  profile: profileReducer,
  idProfile: userIdReducer,
  editProfile: editProfileReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
