// src/components/Layout.js
import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";

const Layout = ({ header, nav, footer, children }) => {
  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "nav footer"`}
      gridTemplateRows={"65px 1fr 50px"}
      gridTemplateColumns={"215px 1fr"}
      height="100vh"
    >
      <GridItem area="nav" p={0}>
        {nav}
      </GridItem>

      <GridItem area="main" p={4}>
        <GridItem area="header" p={0}>
          {header}
        </GridItem>
        {children}
      </GridItem>
      <GridItem area="footer" p={0}>
        {footer}
      </GridItem>
    </Grid>
  );
};

export default Layout;
