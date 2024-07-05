import React from "react";
import { Box, VStack, Link, Text } from "@chakra-ui/react";

const SideNav = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="200px"
      height="100vh"
      p={4}
      bg="linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)"
      color="white"
      boxShadow="0 7px 30px rgba(0, 0, 0, 0.12)"
      backdropFilter="blur(10px)"
      zIndex="1"
    >
      <VStack align="start" spacing={4}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Navigation
        </Text>
        <Link
          href="#posts"
          _hover={{ textDecoration: "none", color: "brand.400" }}
        >
          Posts
        </Link>
        <Link
          href="#comments"
          _hover={{ textDecoration: "none", color: "brand.400" }}
        >
          Comments
        </Link>
        <Link
          href="#albums"
          _hover={{ textDecoration: "none", color: "brand.400" }}
        >
          Albums
        </Link>
        <Link
          href="#photos"
          _hover={{ textDecoration: "none", color: "brand.400" }}
        >
          Photos
        </Link>
        <Link
          href="#todos"
          _hover={{ textDecoration: "none", color: "brand.400" }}
        >
          Todos
        </Link>
        <Link
          href="#users"
          _hover={{ textDecoration: "none", color: "brand.400" }}
        >
          Users
        </Link>
      </VStack>
    </Box>
  );
};

export default SideNav;
