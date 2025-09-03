import { GET_ID_EXPERIENCES } from "../actions";

const initialState = {
  idExperience: {},
};

const idExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ID_EXPERIENCES:
      return {
        ...state,
        idExperience: action.payload,
      };

    default:
      return state;
  }
};

export default idExperienceReducer;
