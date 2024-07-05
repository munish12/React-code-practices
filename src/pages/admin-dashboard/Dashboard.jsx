import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "./Layout";
import DataHandler from "../../components/ui/DataHandler";

const Dashboard = () => {
  return (
    <Layout
      header={<Box>Header Content</Box>}
      nav={<Box>Nav Content</Box>}
      footer={<Box>Footer Content</Box>}
    >
      <Box>
        <h2>Posts</h2>
        <DataHandler type="posts" />
        <h2>Comments</h2>
        <DataHandler type="comments" />
        <h2>Albums</h2>
        <DataHandler type="albums" />
        <h2>Photos</h2>
        <DataHandler type="photos" />
        <h2>Todos</h2>
        <DataHandler type="todos" />
        <h2>Users</h2>
        <DataHandler type="users" />
      </Box>
    </Layout>
  );
};

export default Dashboard;
