import { EDIT_EXPERIENCES } from "../actions";

const initialState = {
  editExp: [],
};

const editExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_EXPERIENCES:
      return {
        ...state,
        editExp: state.editExp.map((el) => {
          return el === action.payload._id ? action.payload : el;
        }),
      };

    default:
      return state;
  }
};

export default editExperienceReducer;
