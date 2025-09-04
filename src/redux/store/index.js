import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../reducer/profileReducer";
import userIdReducer from "../reducer/userIdReducer";
import editProfileReducer from "../reducer/editProfileReducer";
import profileMainReducer from "../reducer/profileMainreducer";
import postsReducer from "../reducer/postsReducer";
import experienceReducer from "../reducer/experienceReducer";
import addExperienceReducer from "../reducer/addExperienceReducer";
import idExperienceReducer from "../reducer/idExperienceReducer";
import editExperienceReducer from "../reducer/editExperienceReducer";
import deleteExperienceReducer from "../reducer/deleteExperienceReducer";
import getJobReducer from "../reducer/getJobReducer";
import getSingleJobReducer from "../reducer/getSingleJobReducer";
import getJobCompanyReducer from "../reducer/getJobCompanyReducer";

const combinedReducer = combineReducers({
  mainProfile: profileMainReducer,
  profile: profileReducer,
  idProfile: userIdReducer,
  editProfile: editProfileReducer,
  posts: postsReducer,
  listExperience: experienceReducer,
  newExperience: addExperienceReducer,
  singleExperience: idExperienceReducer,
  editExperience: editExperienceReducer,
  deleteExperience: deleteExperienceReducer,
  jobs: getJobReducer,
  singleJob: getSingleJobReducer,
  companyJob: getJobCompanyReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
