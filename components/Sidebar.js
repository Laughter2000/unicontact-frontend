import React from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  Link,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import Cookies from "js-cookie";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { BiSupport } from "react-icons/bi";
import { useRouter } from "next/router";
import { ProfileIcon, WalletIcon, ContestLogo, LogoutIcon, Hamburger} from "@/components/Icons/Icons";
import user from "@/services/routes/user";
// import Footer from '@/components/LandingPage/Footer'
import "@fontsource/inter";
import "@fontsource/poppins";


const LinkItems = [
  { name: 'Dashboard', icon: FiHome, link: "/dashboard" },
  { name: 'Profile', icon: ProfileIcon, link: "/profile"},
  // { name: 'Contact Us', icon: BiSupport, link: "/contact-us" },
];

export default function SidebarWithHeader({
  children, page=""
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
        page={page}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs">
        <DrawerContent>
          <SidebarContent onClose={onClose} page={page}/>
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4" bg={useColorModeValue('gray.100', 'gray.900')}>
        {children}
      </Box>
    </Box>
    {/* <Footer /> */}
    </>
  );
}


const SidebarContent = ({ onClose, page, ...rest }) => {
  const router = useRouter();
  const logout = async() => {
    const refreshToken = Cookies.get("refresh_token")
    try {
    // await user.logout.request({"refresh_token": refreshToken})
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    router.push("/");
    }
    catch(err) {
      console.log(err.response)
    }
  }

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text bgClip='text' bgGradient= 'linear(to-r, #48ACC8, #5B58DD)' fontSize="2xl" fontFamily="poppins" fontWeight="bold">
          Unicontact
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} page={page} link={link.link}>
          {link.name}
        </NavItem>
      ))}
          <NavItem  icon={LogoutIcon} page={page} onClick={() => logout() } >
          Logout
        </NavItem>


    </Box>
  );
};


const NavItem = ({ icon, page, link, children, ...rest }) => {
  return (
    <Link href={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        // as={'a'}
        mx="4"
        my={2}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bgColor ={(page === children && "purple.500")}
        color ={(page === children && "white")}
        _hover={{
          bg: 'purple.500',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}

      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<Hamburger color="black"/>}
      />

      <Text
        display={{ base: 'flex' }}
        fontSize="2xl"
        fontFamily="poppins"
        fontWeight="bold"
        bgClip='text' 
        bgGradient= 'linear(to-r, #48ACC8, #5B58DD)'
        w="60%"
        textAlign="center"
        >
          Unicontact
      </Text>

    </Flex>
  );
};
