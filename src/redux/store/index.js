import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userIdReducer from "../reducer/userIdReducer";
import editProfileReducer from "../reducer/editProfileReducer";
import profileMainReducer from "../reducer/profileMainreducer";
import experienceReducer from "../reducer/experienceReducer";
import addExperienceReducer from "../reducer/addExperienceReducer";
import idExperienceReducer from "../reducer/idExperienceReducer";
import editExperienceReducer from "../reducer/editExperienceReducer";
import deleteExperienceReducer from "../reducer/deleteExperienceReducer";

const combinedReducer = combineReducers({
  mainProfile: profileMainReducer,
  profile: profileReducer,
  idProfile: userIdReducer,
  editProfile: editProfileReducer,
  listExperience: experienceReducer,
  newExperience: addExperienceReducer,
  singleExperience: idExperienceReducer,
  editExperience: editExperienceReducer,
  deleteExperience: deleteExperienceReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
