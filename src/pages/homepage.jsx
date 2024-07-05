import React from "react";
import CardsList from "../components/ui/cardList";
import { Container } from "react-bootstrap";
import { Box } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Box boxShadow='inner' p='6' rounded='md' bg='white'>
      <CardsList />
    </Box>
  );
};

export default Homepage;
