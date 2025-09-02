import { EDIT_PROFILE } from "../actions";

const initialState = {
  editProfile: [],
};

const editProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
      return {
        ...state,
        editProfile: state.editProfile.map((el) => {
          return el === action.payload._id ? action.payload : el;
        }),
      };
    default:
      return state;
  }
};

export default editProfileReducer;
