import React from "react";
import { Flex, Box, Text, Portal } from "@chakra-ui/react";
import AdminNavbar from "../../../components/Navbars/AdminNavbar.js";

const Header = () => {
  return (
    <Portal>
      <AdminNavbar />
    </Portal>
  );
};

export default Header;
