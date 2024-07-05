// src/components/Layout.js
import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";

const Layout = ({ header, nav, footer, children }) => {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"70px 1fr 50px"}
      gridTemplateColumns={"200px 1fr"}
      height="100vh"
      bgGradient="linear(to-r, brand.900, brand.800)"
      color="whiteAlpha.900"
    >
      <GridItem area="header" bg="brand.700" p={0} boxShadow="lg">
        {header}
      </GridItem>
      <GridItem area="nav" p={0}>
        {nav}
      </GridItem>
      <GridItem area="main" p={4}>
        {children}
      </GridItem>
      <GridItem area="footer" bg="brand.700" p={0} boxShadow="lg">
        {footer}
      </GridItem>
    </Grid>
  );
};

export default Layout;
