import {
    Box,
    Button,
    Flex,
    HStack,
    useColorModeValue as mode,
    VisuallyHidden,
    Heading
  } from '@chakra-ui/react'
import Cookies from 'js-cookie'
  import * as React from 'react'
  import { MobileNav } from './MobileNav'
  import { NavLink } from './NavLink'
  
  export const NavBar = ({active}) => {
    return (
      <Box >
        <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
          <Box maxW="7xl" mx="auto" py="4" px={{ base: '6', md: '8' }}>
            <Flex as="nav" justify="center">
              <HStack spacing="8">
                {/* <Box as="a" href="/" rel="home">
                  <VisuallyHidden>Cleanomart</VisuallyHidden>
                  <Logo h="6" iconColor="blue.500" />
                </Box> */}
                <Heading color="purple.500" as={"a"} href="/">Unicontact</Heading>
              </HStack>
              {/* <Flex align="center">
                <HStack spacing="8" display={{ base: 'none', md: Cookies.get("access_token") ? "none" : "flex"  }} 
          visibility={{md: Cookies.get("access_token") ? "hidden" : "show"}}>
                  <NavLink.Desktop active={active === "Sign In" ? true : false} href="/signin">Log in </NavLink.Desktop>
                  <Button colorScheme="yellow" rounded="full" as="a" href="/signup">
                    Sign Up
                  </Button>
                </HStack>
                <HStack>
                <Button colorScheme="yellow" rounded="full" as="a" href="/dashboard"
                display={{ base: "none", md: Cookies.get("access_token") ? "flex" : "none" }} 
                visibility={{md: Cookies.get("access_token") ? "show" : "hidden"}}
                pt="2">
                    Dashboard
                  </Button>
                  </HStack>
                <Box ml="5">
                  {/* <MobileNav /> */}
                {/* </Box> */}
              {/* </Flex> */} 
            </Flex>
          </Box>
        </Box>
      </Box>
    )
  }
  