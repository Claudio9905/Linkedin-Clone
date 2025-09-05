import { DELETE_EXPERIENCES } from "../actions";

const initialState = {
  deleteExp: [],
};

const deleteExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EXPERIENCES:
      return {
        ...state,
        deleteExp: state.deleteExp.filter((el) => {
          if (el._id === action.payload) {
            return false;
          } else {
            return true;
          }
        }),
      };

    default:
      return state;
  }
};

export default deleteExperienceReducer;
