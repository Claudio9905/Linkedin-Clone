import { ADD_NEW_EXPERIENCES } from "../actions";

const initialState = {
  addExperience: [],
};

const addExperienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_EXPERIENCES:
      return {
        ...state,
        addExperience: state.addExperience.concat(action.payload),
      };

    default:
      return state;
  }
};

export default addExperienceReducer;
