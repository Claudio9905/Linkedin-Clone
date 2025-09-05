import { GET_JOB_COMPANY } from "../actions";

const initialState = {
  jobCompany: [],
  foundJobCompany: false,
};

const getJobCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOB_COMPANY:
      return {
        ...state,
        jobCompany: action.payload.data,
        foundJobCompany: true,
      };

    default:
      return state;
  }
};

export default getJobCompanyReducer;
