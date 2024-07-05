import {
  handleFetchRequest,
  handleFetchSuccess,
  handleFetchFailure,
} from "./reducerHelper";
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
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        posts: { ...state.posts, loading: true, error: null },
      };

    case "FETCH_POSTS_SUCCESS":
      return {
        ...state,
        posts: { data: action.payload, loading: false, error: null },
      };
    case "FETCH_POSTS_FAILURE":
      return {
        ...state,
        posts: { ...state.posts, loading: false, error: action.payload },
      };

    case "FETCH_COMMENT_REQUEST":
      return {
        ...state,
        comments: { ...state.comments, loading: true, error: null },
      };
    case "FETCH_COMMENT_SUCCESS":
      return {
        ...state,
        comments: { data: action.payload, loading: false, error: null },
      };
    case "FETCH_COMMENT_FAILURE":
      return {
        ...state,
        comments: { ...state.comments, loading: false, error: action.payload },
      };

    case "FETCH_ALBUM_REQUEST":
      return {
        ...state,
        albums: { ...state.albums, loading: true, error: null },
      };
    case "FETCH_ALBUM_SUCCESS":
      return {
        ...state,
        albums: { data: action.payload, loading: false, error: null },
      };
    case "FETCH_ALBUM_FAILURE":
      return {
        ...state,
        albums: { ...state.albums, loading: false, error: action.payload },
      };

    case "FETCH_PHOTO_REQUEST":
      return {
        ...state,
        photos: { ...state.photos, loading: true, error: null },
      };
    case "FETCH_PHOTO_SUCCESS":
      return {
        ...state,
        photos: { data: action.payload, loading: false, error: null },
      };
    case "FETCH_PHOTO_FAILURE":
      return {
        ...state,
        photos: { ...state.photos, loading: false, error: action.payload },
      };

    case "FETCH_TODO_REQUEST":
      return {
        ...state,
        todos: { ...state.todos, loading: true, error: null },
      };
    case "FETCH_TODO_SUCCESS":
      return {
        ...state,
        todos: { data: action.payload, loading: false, error: null },
      };
    case "FETCH_TODO_FAILURE":
      return {
        ...state,
        todos: { ...state.todos, loading: false, error: action.payload },
      };

    case "FETCH_USERS_REQUEST":
      return {
        ...state,
        users: { ...state.users, loading: true, error: null },
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: { data: action.payload, loading: false, error: null },
      };
    case "FETCH_USERS_FAILURE":
      return {
        ...state,
        users: { ...state.users, loading: false, error: action.payload },
      };
    default:
      return state;
  }
};
export default rootReducer;









Let's break down this logic step by step to understand how it works internally.

Step-by-Step Explanation
1. Regex Matching
javascript
Copy code
const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(action.type);
if (!matches) return state;
Purpose: This line uses a regular expression to match the action.type and extract parts of the action type.
Regex Explanation:
(.*): This part matches and captures any characters (greedily) before the underscore. It is the base name of the action.
_: This matches the underscore character.
(REQUEST|SUCCESS|FAILURE): This part matches and captures one of the three strings: REQUEST, SUCCESS, or FAILURE.
Example: For FETCH_POSTS_REQUEST, the regex will match and return:
matches[0]: Full match: FETCH_POSTS_REQUEST
matches[1]: Base name: FETCH_POSTS
matches[2]: Request state: REQUEST
Error Handling: If the action.type does not match the regex, matches will be null and the reducer will return the current state unchanged.
2. Extracting Matched Groups
javascript
Copy code
const [, baseName, requestState] = matches;
Purpose: This line uses array destructuring to extract the base name and request state from the matches array.
Explanation:
matches[1] (the base name) is assigned to baseName.
matches[2] (the request state) is assigned to requestState.
Example: For FETCH_POSTS_REQUEST, this will result in:
baseName = 'FETCH_POSTS'
requestState = 'REQUEST'
3. Mapping Base Name to State Key
javascript
Copy code
const key = keyMapping[baseName]; // Map base name to the correct state key
Purpose: This line uses the keyMapping object to map the extracted base name to the corresponding state key.
Explanation:
keyMapping is an object where each base name (e.g., FETCH_POSTS) maps to the corresponding state key (e.g., posts).
Example: For baseName = 'FETCH_POSTS', key will be posts.
4. Switch Statement to Handle Action
javascript
Copy code
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
Purpose: This switch statement determines how to handle the action based on the requestState.
Explanation:
case "REQUEST"::
Calls handleFetchRequest(state, key) to handle the request action.
This sets loading to true and clears any errors for the specified key.
case "SUCCESS"::
Calls handleFetchSuccess(state, key, action.payload) to handle the success action.
This updates the data with action.payload, sets loading to false, and clears any errors for the specified key.
case "FAILURE"::
Calls handleFetchFailure(state, key, action.payload) to handle the failure action.
This sets loading to false and updates the error with action.payload for the specified key.
default::
If requestState does not match any of the cases, it returns the current state unchanged.
Flow with an Example
Let's go through the flow with an example where the action.type is FETCH_POSTS_SUCCESS:

Regex Matching:

const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec('FETCH_POSTS_SUCCESS');
matches will be ['FETCH_POSTS_SUCCESS', 'FETCH_POSTS', 'SUCCESS'].
Extracting Matched Groups:

const [, baseName, requestState] = matches;
baseName = 'FETCH_POSTS'
requestState = 'SUCCESS'
Mapping Base Name to State Key:

const key = keyMapping[baseName];
key = 'posts' (from the keyMapping object)
Switch Statement to Handle Action:

switch (requestState):
case 'SUCCESS':
Calls handleFetchSuccess(state, 'posts', action.payload);
This function updates the posts key in the state with action.payload, sets loading to false, and clears any errors.
Summary
Regex Matching: Extracts the base name and request state from the action type.
Extracting Matched Groups: Uses destructuring to get baseName and requestState.
Mapping Base Name to State Key: Maps the base name to the corresponding state key using keyMapping.
Switch Statement: Determines which helper function to call based on the requestState and updates the state accordingly.
This logic allows the reducer to handle various action types dynamically and reduce redundancy in the code.