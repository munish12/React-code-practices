import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex justify="space-between" align="center" p={4} color="white">
      <Text fontSize="xl" fontWeight="bold">
        My Application
      </Text>
      <Box>{/* Add any other header content here */}</Box>
    </Flex>
  );
};

export default Header;
