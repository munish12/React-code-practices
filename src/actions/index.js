import api from "../ api";

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: "FETCH_POSTS_REQUEST" });
  try {
    const response = await api.get("posts");
    dispatch({ type: "FETCH_POSTS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
  }
};

export const fetchComments = () => async (dispatch) => {
  dispatch({ type: "FETCH_COMMENT_REQUEST" });
  try {
    const response = await api.get("comments");
    dispatch({ type: "FETCH_COMMENT_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_COMMENT_FAILURE", payload: error.message });
  }
};

export const fetchAlbums = () => async (dispatch) => {
  dispatch({ type: "FETCH_ALBUM_REQUEST" });
  try {
    const response = await api.get("albums");
    dispatch({ type: "FETCH_ALBUM_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_ALBUM_FAILURE", payload: error.message });
  }
};

export const fetchPhotos = () => async (dispatch) => {
  dispatch({ type: "FETCH_PHOTO_REQUEST" });
  try {
    const response = await api.get("photos");
    dispatch({ type: "FETCH_PHOTO_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_PHOTO_FAILURE", payload: error.message });
  }
};

export const toDos = () => async (dispatch) => {
  dispatch({ type: "FETCH_TODO_REQUEST" });
  try {
    const response = await api.get("todos");
    dispatch({ type: "FETCH_TODO_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_TODO_FAILURE", payload: error.message });
  }
};

export const users = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await api.get("users");
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
  }
};

