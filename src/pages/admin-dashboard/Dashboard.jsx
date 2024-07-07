import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "./Layout";
import DataHandler from "../../components/ui/DataHandler";
import Header from "../../components/ui/admin/Header";
import Sidebar from "../../components/ui/admin/SideNav";
import Footer from "../../components/ui/admin/Footer";

const Dashboard = ({ type }) => {
  const tableNames = {
    posts: "Posts",
    comments: "Comments",
    albums: "Albums",
    photos: "Photos",
    todos: "Todos",
    users: "Users",
  };

  return (
    <Layout header={<Header />} nav={<Sidebar />} footer={<Footer />}>
      <Box w={{ base: "100%" }}>
        <DataHandler type={type} tableName={tableNames[type]} />
      </Box>
    </Layout>
  );
};

export default Dashboard;
