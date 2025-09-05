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
import addImageReducer from "../reducer/addImageReducer";
import addImageProfileReducer from "../reducer/addImgProfile";
import getJobCategoryReducer from "../reducer/getJobCategoryReducer";
import { commentReducer } from "../reducer/commentReducer";

const combinedReducer = combineReducers({
  mainProfile: profileMainReducer,
  profile: profileReducer,
  comments: commentReducer,
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
  categoryJob: getJobCategoryReducer,
  newImageExperience: addImageReducer,
  newImgProfile: addImageProfileReducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
