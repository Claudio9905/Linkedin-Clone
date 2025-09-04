import { GET_JOB_CATEGORY } from "../actions";

const initialState = {
  jobCategory: [],
};

const getJobCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_CATEGORY:
      return {
        ...state,
        jobCategory: action.payload.data,
      };

    default:
      return state;
  }
};

export default getJobCategoryReducer;
