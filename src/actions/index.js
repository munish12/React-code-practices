import { fetchData } from "../utils/helpers";

export const fetchPosts = () =>
  fetchData(
    "/posts",
    "FETCH_POSTS_REQUEST",
    "FETCH_POSTS_SUCCESS",
    "FETCH_POSTS_FAILURE"
  );
export const fetchComments = () =>
  fetchData(
    "/comments",
    "FETCH_COMMENTS_REQUEST",
    "FETCH_COMMENTS_SUCCESS",
    "FETCH_COMMENTS_FAILURE"
  );
export const fetchAlbums = () =>
  fetchData(
    "/albums",
    "FETCH_ALBUMS_REQUEST",
    "FETCH_ALBUMS_SUCCESS",
    "FETCH_ALBUMS_FAILURE"
  );
export const fetchPhotos = () =>
  fetchData(
    "/photos",
    "FETCH_PHOTOS_REQUEST",
    "FETCH_PHOTOS_SUCCESS",
    "FETCH_PHOTOS_FAILURE"
  );
export const fetchTodos = () =>
  fetchData(
    "/todos",
    "FETCH_TODOS_REQUEST",
    "FETCH_TODOS_SUCCESS",
    "FETCH_TODOS_FAILURE"
  );
export const fetchUsers = () =>
  fetchData(
    "/users",
    "FETCH_USERS_REQUEST",
    "FETCH_USERS_SUCCESS",
    "FETCH_USERS_FAILURE"
  );
