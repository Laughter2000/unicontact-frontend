import React, {useState, useContext, useEffect} from "react";
import SidebarWithHeader from '@/components/Sidebar';
import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Image,
  Portal,
  Progress,
  SimpleGrid,
  Spacer,
  Stat,
  Stack,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
  useColorModeValue,
  Heading,
  
} from "@chakra-ui/react";
import IconBox from "components/Icons/IconBox";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import { GiVote } from "react-icons/gi";
import { FaVoteYea } from "react-icons/fa";
import { MdHowToVote } from "react-icons/md";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import TableSkeletonRow from "@/components/TableSkeletonRow";
import { NextSeo } from "next-seo";
import "@fontsource/inter"
import "@fontsource/poppins"
import {useAuth} from "@/contexts/UserProvider";
import StudentDetails from "@/components/StudentDetails";
import InstitutionDetails from "@/components/InstitutionDetails";





const Dashboard = () => {
    const title = "Unicontact - Dashboard";
    const url = "https://unicontact.com/dashboard";
    const [userStats, setUserStats] = useState(null)
    const [userVotes, setUserVotes] = useState(null)
    const {user, setUser} = useAuth();
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");

    useEffect(() => {


    //   const getVotes = async () => {
    //     try {
    //       const { data } = await contest.votes.request()
    //       setUserVotes(data)
    //     }
    //     catch(err) {
    //       console.log(err)
    //     }
    //   }
    // getStatistics()
    // getVotes()

    }, [])

  return (
    <>
    <NextSeo
    title={title}
    canonical={url}
    openGraph={{
        title,
        url
    }}
      />
        <SidebarWithHeader page="Dashboard">
        <Flex flexDirection="column" pt={{ base: "10px", md: "10px" }}>
          <Heading fontWeight={"400"} fontFamily="poppins" my={4} fontSize={{base: "2xl", md: "4xl"}}>{`Welcome ${user && user.first_name}`}</Heading>
      
        </Flex>

        
        <Flex direction="column" pt={{ base: "50px", md: "50px" }} justifyContent="center">
          {
            !user?.role ? 
            (<Stack direction="column" textAlign="center" justifyContent="center">
              <Heading as={"h6"} fontSize="20px">Hi, Click the link below to setup your institution profile</Heading>
                   
    <Flex>
     <Button
      mt="40px"
       color="white"
       fontSize="16px"
       cursor="pointer"
       p={8}
       maxWidth="250px"
       bgColor="primary"
       mx='auto'
       as={"a"}
       href="/institution/create"
       textAlign="center"
       _hover={{
         bgColor: "none"
       }}
       _active={{
         borderColor: "none",
         bgColor: "none"
       }}
       _focus={{
         borderColor: "none",
         bgColor: "none"
       }}
     >
       Create Institution Data
     </Button>
     </Flex>
            </Stack>)
            :
            user?.role === "normal" ?
            (
                <InstitutionDetails />
            )
            :
            <StudentDetails />


    }
      </Flex>

        </SidebarWithHeader>
    </>
  )
}


Dashboard.requiresAuth = true;
Dashboard.redirectUnauthenticated = "/signin";

export default Dashboard;