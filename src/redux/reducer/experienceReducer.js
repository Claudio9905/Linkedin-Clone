import { GET_LIST_EXPERIENCES } from "../actions";

const initialState = {
  experience: [],
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_EXPERIENCES:
      return {
        ...state,
        experience: action.payload,
      };

    default:
      return state;
  }
};

export default experienceReducer;
