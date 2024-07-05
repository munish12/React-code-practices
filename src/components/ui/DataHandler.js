import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPosts,
  fetchComments,
  fetchAlbums,
  fetchPhotos,
  fetchTodos,
  fetchUsers,
} from "../../actions";
import DataTable from "../DataTable";
import generateColumns from "../../utils/columnHelper";

const baseFields = {
  posts: [
    { accessor: "userId", header: "User ID" },
    { accessor: "id", header: "ID" },
    { accessor: "title", header: "Title" },
    { accessor: "body", header: "Body" },
  ],
  comments: [
    { accessor: "postId", header: "Post ID" },
    { accessor: "id", header: "ID" },
    { accessor: "name", header: "Name" },
    { accessor: "email", header: "Email" },
    { accessor: "body", header: "Body" },
  ],
  albums: [
    { accessor: "userId", header: "User ID" },
    { accessor: "id", header: "ID" },
    { accessor: "title", header: "Title" },
  ],
  photos: [
    { accessor: "albumId", header: "Album ID" },
    { accessor: "id", header: "ID" },
    { accessor: "title", header: "Title" },
    { accessor: "url", header: "URL" }, // Adjust cell render if necessary
    { accessor: "thumbnailUrl", header: "Thumbnail" }, // Adjust cell render if necessary
  ],
  todos: [
    { accessor: "userId", header: "User ID" },
    { accessor: "id", header: "ID" },
    { accessor: "title", header: "Title" },
    { accessor: "completed", header: "Completed" }, // Adjust cell render if necessary
  ],
  users: [
    { accessor: "id", header: "ID" },
    { accessor: "name", header: "Name" },
    { accessor: "username", header: "Username" },
    { accessor: "email", header: "Email" },
    { accessor: "address.street", header: "Street" },
    { accessor: "phone", header: "Phone" },
  ],
};

const columnsMapping = Object.fromEntries(
  Object.entries(baseFields).map(([key, fields]) => [
    key,
    generateColumns(fields),
  ])
);

const fetchMapping = {
  posts: fetchPosts,
  comments: fetchComments,
  albums: fetchAlbums,
  photos: fetchPhotos,
  todos: fetchTodos,
  users: fetchUsers,
};

const DataHandler = ({ type }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state[type]);

  useEffect(() => {
    dispatch(fetchMapping[type]());
  }, [dispatch, type]);

  const columns = columnsMapping[type];

  return (
    <div>
      {data.loading && <p>Loading...</p>}
      {data.error && <p>Error: {data.error}</p>}
      {!data.loading && !data.error && (
        <DataTable data={data.data} columns={columns} />
      )}
    </div>
  );
};

export default DataHandler;
