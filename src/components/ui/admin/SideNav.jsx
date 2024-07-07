import React from "react";
import { Box, Stack, Link, Text, Flex, Button } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiFileText,
  FiMessageSquare,
  FiImage,
  FiCamera,
  FiList,
  FiUsers,
} from "react-icons/fi";
import { Separator } from "../../Separator/Separator";
import IconBox from "../../Icons/IconBox";
import { SimmmpleLogoWhite } from "../../../components/Icons/Icons";

const SideNav = () => {
  const location = useLocation();
  const activeRoute = (routeName) => location.pathname === routeName;
  const variantChange = "0.2s linear";
  const activeBg = "#1A1F37";
  const inactiveBgTransparent = "transparent";
  const inactiveBg = "#1A1F37";
  const activeColor = "white";
  const inactiveColor = "white";
  const sidebarActiveShadow = "none";

  const links = [
    { path: "/admin-dashboard/posts", name: "Posts", icon: FiFileText },
    {
      path: "/admin-dashboard/comments",
      name: "Comments",
      icon: FiMessageSquare,
    },
    { path: "/admin-dashboard/albums", name: "Albums", icon: FiImage },
    { path: "/admin-dashboard/photos", name: "Photos", icon: FiCamera },
    { path: "/admin-dashboard/todos", name: "Todos", icon: FiList },
    { path: "/admin-dashboard/users", name: "Users", icon: FiUsers },
  ];

  const brand = (
    <Box pt={"25px"} mb="12px">
      <Link
        href={`${process.env.PUBLIC_URL}/#/`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="10px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <SimmmpleLogoWhite w="22px" h="22px" me="10px" mt="2px" />
        <Box
          bg="linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)"
          bgClip="text"
        >
          <Text
            fontSize="sm"
            letterSpacing="3px"
            mt="3px"
            mb="0"
            color="transparent"
          >
            React
          </Text>
        </Box>
      </Link>
      <Separator />
    </Box>
  );

  return (
    <Box
      bg="linear-gradient(111.84deg, rgba(6, 11, 38, 0.94) 59.3%, rgba(26, 31, 55, 0) 100%)"
      position="fixed"
      top="0"
      left="0"
      width="200px"
      h="calc(100vh - 32px)"
      color="white"
      boxShadow="0 7px 30px rgba(0, 0, 0, 0.12)"
      backdropFilter="blur(10px)"
      zIndex="1"
      ps="20px"
      pe="20px"
      m="16px 0px 16px 16px"
      borderRadius="16px"
    >
      <Box>{brand}</Box>
      <Stack direction="column" mb="40px">
        {links.map((link) => (
          <NavLink to={link.path} key={link.name}>
            {activeRoute(link.path) ? (
              <Button
                boxSize="initial"
                justifyContent="flex-start"
                alignItems="center"
                boxShadow={sidebarActiveShadow}
                bg={activeBg}
                transition={variantChange}
                backdropFilter="blur(42px)"
                mb="12px"
                mx="auto"
                ps="16px"
                py="12px"
                borderRadius="15px"
                _hover="none"
                w="100%"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "0px 7px 11px rgba(0, 0, 0, 0.04)",
                }}
              >
                <Flex>
                  <IconBox
                    bg="brand.200"
                    color="white"
                    h="30px"
                    w="30px"
                    me="12px"
                    transition={variantChange}
                  >
                    <link.icon />
                  </IconBox>
                  <Text color={activeColor} my="auto" fontSize="sm">
                    {link.name}
                  </Text>
                </Flex>
              </Button>
            ) : (
              <Button
                boxSize="initial"
                justifyContent="flex-start"
                alignItems="center"
                mb="12px"
                mx="auto"
                ps="16px"
                py="12px"
                borderRadius="15px"
                bg={inactiveBgTransparent}
                _hover="none"
                w="100%"
                _active={{
                  bg: "inherit",
                  transform: "none",
                  borderColor: "transparent",
                }}
                _focus={{
                  boxShadow: "none",
                }}
              >
                <Flex>
                  <IconBox
                    bg={inactiveBg}
                    color="brand.200"
                    h="30px"
                    w="30px"
                    me="12px"
                    transition={variantChange}
                  >
                    <link.icon />
                  </IconBox>
                  <Text color={inactiveColor} my="auto" fontSize="sm">
                    {link.name}
                  </Text>
                </Flex>
              </Button>
            )}
          </NavLink>
        ))}
      </Stack>
    </Box>
  );
};

export default SideNav;
