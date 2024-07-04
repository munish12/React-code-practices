import React from "react";
import CardsList from "../components/ui/cardList";
import { Container } from "react-bootstrap";
import { Box } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Box mt={20} mb={0} w='100%' p={4} bg="blue.600" centerContent>
      <CardsList />
    </Box>
  );
};

export default Homepage;
