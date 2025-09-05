import { GET_SINGLE_JOB } from "../actions";

const initialState = {
  singleJob: [],
  found: false,
};

const getSingleJobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_JOB:
      return {
        ...state,
        singleJob: action.payload.data,
        found: true,
      };

    default:
      return state;
  }
};

export default getSingleJobReducer;
