import { Button, Center, Container, Flex, HStack, Text, useColorMode} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const{colorMode,toggleColorMode} = useColorMode();
  return (
    <Container minW={"1140px"} px={4} >
      <Flex 
      h={16}
      alignItems={"center"} 
      justifyContent={"space-between"}
      flexDir={{base:'column',sm:'row'}}
      >
        <Text
        fontSize={{base:"22",sm:"28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r,green.400,blue.400)"}
        bgClip={"text"}
        _hover={{ transform: "translateY(2px)", shadow: "xl" }}
        >

        <Link to={'/'} >ShreyasMart 🛒</Link>
        </Text>
        <HStack spacing={2} alignItems={'center'}>
          <Link to={"/create"} >
            <Button>
            <CiSquarePlus fontSize={20}/>
            </Button>
          </Link>

          <Button onClick={toggleColorMode}>
            {colorMode ==="dark" ? <LuSun size="20"/>: <IoMoon/>}
          </Button>

        </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar
