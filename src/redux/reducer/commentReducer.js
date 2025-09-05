import {
  GET_COMMENTS_REQUEST,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILURE,
} from "../actions";

const initialState = {
  comments: [],
  loading: false,
  error: null,
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMMENTS_REQUEST:
    case ADD_COMMENT_REQUEST:
    case UPDATE_COMMENT_REQUEST:
    case DELETE_COMMENT_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_COMMENTS_SUCCESS:
      return { ...state, loading: false, comments: action.payload };

    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.payload],
      };

    case UPDATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.map((c) =>
          c._id === action.payload._id ? action.payload : c
        ),
      };

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.filter((c) => c._id !== action.payload),
      };

    case GET_COMMENTS_FAILURE:
    case ADD_COMMENT_FAILURE:
    case UPDATE_COMMENT_FAILURE:
    case DELETE_COMMENT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
