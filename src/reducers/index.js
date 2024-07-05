import {
  handleFetchFailure,
  handleFetchRequest,
  handleFetchSuccess,
} from "../utils/reducerHelper";

// Map base names to state keys
const keyMapping = {
  FETCH_POSTS: "posts",
  FETCH_COMMENTS: "comments",
  FETCH_ALBUMS: "albums",
  FETCH_PHOTOS: "photos",
  FETCH_TODOS: "todos",
  FETCH_USERS: "users",
};

const initialState = {
  posts: {
    data: [],
    loading: false,
    error: null,
  },
  comments: {
    data: [],
    loading: false,
    error: null,
  },
  albums: {
    data: [],
    loading: false,
    error: null,
  },
  photos: {
    data: [],
    loading: false,
    error: null,
  },
  todos: {
    data: [],
    loading: false,
    error: null,
  },
  users: {
    data: [],
    loading: false,
    error: null,
  },
};

const rootReducer = (state = initialState, action) => {
  // Match the action type with the regex to extract the base name and request state
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);
  if (!matches) return state;

  const [, baseName, requestState] = matches;
  const key = keyMapping[baseName]; // Map base name to the correct state key

  switch (requestState) {
    case "REQUEST":
      return handleFetchRequest(state, key);
    case "SUCCESS":
      return handleFetchSuccess(state, key, action.payload);
    case "FAILURE":
      return handleFetchFailure(state, key, action.payload);
    default:
      return state;
  }
};

export default rootReducer;
