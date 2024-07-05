import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justify="center" align="center" p={4} color="white">
      <Text fontSize="sm">© 2023 My Application. All rights reserved.</Text>
    </Flex>
  );
};

export default Footer;
