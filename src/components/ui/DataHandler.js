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
import { Spinner, Flex, Box } from "@chakra-ui/react";

// Base fields for each type
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

// Generate columns based on base fields
const columnsMapping = Object.fromEntries(
  Object.entries(baseFields).map(([key, fields]) => [
    key,
    generateColumns(fields),
  ])
);

// Map fetch actions to types
const fetchMapping = {
  posts: fetchPosts,
  comments: fetchComments,
  albums: fetchAlbums,
  photos: fetchPhotos,
  todos: fetchTodos,
  users: fetchUsers,
};

const DataHandler = ({ type, tableName }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state[type]);

  useEffect(() => {
    dispatch(fetchMapping[type]());
  }, [dispatch, type]);

  const columns = columnsMapping[type];

  return (
    <Box position="relative" mt="15px" minHeight="800px">
      {data.loading && (
        <Flex
          justify="center"
          align="center"
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.6)"
          zIndex="10"
          borderRadius="15px"
        >
          <Spinner size="xl" color="brand.200" />
        </Flex>
      )}
      <Box opacity={data.loading ? "0.4" : "1"}>
        {!data.loading && !data.error && (
          <DataTable data={data.data} columns={columns} tableName={tableName} />
        )}
        {data.error && <Box color="red.500">Error: {data.error}</Box>}
      </Box>
    </Box>
  );
};

export default DataHandler;
