import React from "react";
import { Box } from "@chakra-ui/react";
import Layout from "./Layout";
import DataHandler from "../../components/ui/DataHandler";
import Header from "../../components/ui/admin/Header";
import SideNav from "../../components/ui/admin/SideNav";
import Footer from "../../components/ui/admin/Footer";
import Sidebar from "../../components/ui/admin/SideNav";

const Dashboard = () => {
  return (
    <Layout header={<Header />} nav={<Sidebar />} footer={<Footer />}>
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
