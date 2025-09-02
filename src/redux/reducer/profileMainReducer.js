import { GET_MEPROFILE } from "../actions";

const initialState = {
  me_Profile: {},
};

const profileMainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEPROFILE:
      return {
        ...state,
        me_Profile: action.payload,
      };

    default:
      return state;
  }
};

export default profileMainReducer;
