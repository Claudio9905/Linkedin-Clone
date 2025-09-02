import { GET_MEPROFILE } from "../actions";

const initialState = {
  profile: [],
};

const profileMeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEPROFILE:
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default profileMeReducer;
