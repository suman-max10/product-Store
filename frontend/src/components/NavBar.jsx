import React from 'react'
import {container} from '@chakra-ui/react'  
const NavBar = () => {
  return (
    <container maxW={"1140px"} px={4}>
        <Flex h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",  
          sm:"row"  
        }}>

        <Text></Text>


        </Flex>
    </container>
  )
}

export default NavBar