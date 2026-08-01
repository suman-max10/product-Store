/** @format */

import { Container, Flex, HStack, Text, Button, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { FiMoon, FiSun } from "react-icons/fi";


const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode(); 
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}>
        <Text
          as={RouterLink}
          to={"/"}
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign='center'
          bgGradient='linear(to-r, cyan.400, blue.500)'
          bgClip={"text"}>
          Product Store 🛒
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Button as={RouterLink} to={"/create"}>
           <CiSquarePlus />
          </Button>
          <Button onClick={toggleColorMode}>
           {colorMode === "light" ? <FiMoon /> : <FiSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;



