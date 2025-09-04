import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  SET_ERROR,
  SET_LOADING,
  UPLOAD_IMAGE,
} from "../actions";

const initialState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        error: null,
      };
    case GET_POST:
      return {
        ...state,
        currentPost: action.payload,
        error: null,
      };
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        error: null,
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload.text : post
        ),
        currentPost: action.payload.text,
      };
    case UPLOAD_IMAGE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        error: null,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default postsReducer;
