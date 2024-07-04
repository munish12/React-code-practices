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
  

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POSTS_SUCCESS":
      return { ...state, posts: action.payload };
    case "FETCH_COMMENT_SUCCESS":
      return { ...state, comments: action.payload };
    case "FETCH_ALBUM_SUCCESS":
      return { ...state, album: action.payload };
    case "FETCH_PHOTO_SUCCESS":
      return { ...state, photo: action.payload };
    case "FETCH_TODO_SUCCESS":
      return { ...state, todo: action.payload };
    case "FETCH_USERS_SUCCESS":
      return { ...state, users: action.payload };
  }
};
