import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Layout = ({ header, footer, nav, children }) => {
  return (
    <Grid
      templateAreas={`"header header"
                    "nav main"
                    "nav footer"`}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"150px 1fr"}
      height="100vh"
      gap="4"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl={2} bg="orange.300" area="header">
        {header}
      </GridItem>
      <GridItem pl={2} bg="pink.300" area={"nav"}>
        {nav}
      </GridItem>
      <GridItem pl={2} area="main">
        {children}
      </GridItem>
      <GridItem pl={2} bg="blue.300" area="footer">
        {footer}
      </GridItem>
    </Grid>
  );
};

export default Layout;
