import { ADD_NEW_IMAGE_PROFILE } from "../actions";

const initialState = {
  addImage: [],
};

const addImageProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_IMAGE_PROFILE:
      return {
        ...state,
        addImage: state.addImage.concat(action.payload),
      };

    default:
      return state;
  }
};

export default addImageProfileReducer;
