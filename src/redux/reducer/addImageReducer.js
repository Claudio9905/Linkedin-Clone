import { ADD_NEW_IMAGE } from "../actions";

const initialState = {
  addImage: [],
};

const addImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_IMAGE:
      return {
        ...state,
        addImage: state.addImage.concat(action.payload),
      };

    default:
      return state;
  }
};

export default addImageReducer;
