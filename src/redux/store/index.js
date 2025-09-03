import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userIdReducer from "../reducer/userIdReducer";
import editProfileReducer from "../reducer/editProfileReducer";
import profileMainReducer from "../reducer/profileMainreducer";
import postsReducer from "../reducer/postsReducer";

const combinedReducer = combineReducers({
  mainProfile: profileMainReducer,
  profile: profileReducer,
  idProfile: userIdReducer,
  editProfile: editProfileReducer,
  posts: postsReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
