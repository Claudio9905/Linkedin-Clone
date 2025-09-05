import { GET_JOB_CATEGORY } from "../actions";

const initialState = {
  jobCategory: [],
  foundJobCategory: false,
};

const getJobCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_CATEGORY:
      return {
        ...state,
        jobCategory: action.payload.data,
        foundJobCategory: true,
      };

    default:
      return state;
  }
};

export default getJobCategoryReducer;
