import { GET_USER_ID_PROFILE } from "../actions";

const initialState = {
  userId: {},
};

const userIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_ID_PROFILE:
      return {
        ...state,
        payload: action.payload,
      };

    default:
      return state;
  }
};

export default userIdReducer;
