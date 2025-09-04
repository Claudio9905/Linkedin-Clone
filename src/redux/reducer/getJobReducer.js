import { GET_JOB_LOADING, GET_JOBS } from "../actions";

const initialState = {
  jobs: [],
  isLoading: false,
};

const getJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload.data,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default getJobReducer;
