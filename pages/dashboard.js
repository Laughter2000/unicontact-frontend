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




const Dashboard = () => {
    const title = "Unicontact - Dashboard";
    const url = "https://unicontact.com/dashboard";
    const [userStats, setUserStats] = useState(null)
    const [userVotes, setUserVotes] = useState(null)
    const {user, setUser} = useAuth();
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");

    useEffect(() => {
    //   const getStatistics = async() => {
    //     try {
    //       let values = []
    //       const response = await contest.statistics.request()
    //       const allkeys = Object.keys(response.data)
          
    //       for (var i = 0; i < allkeys.length; i++) {
    //         if (response.data['is_contestant'] == true ) {
    //           if (allkeys[i] !== 'is_contestant') {
    //           let newValues = {}
    //           newValues["name"] = name[allkeys[i]]
    //           newValues["amount"] = response.data[allkeys[i]]
    //           newValues["icon"] = stats[allkeys[i]]
    //           values.push(newValues);}
    //         }
    //          else {
    //            if ((allkeys[i] !== "total_votes_gotten" ) && (allkeys[i] !== 'is_contestant')){
    //           let newValues = {}
    //           newValues["name"] = name[allkeys[i]]
    //           newValues["amount"] = response.data[allkeys[i]]
    //           newValues["icon"] = stats[allkeys[i]]
    //           values.push(newValues);}
    //         }
    //       }
      
    //       setUserStats(values);
    //     }
    //     catch(err) {
    //       console.log(err);
    //     }
    //   }


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
          <Heading fontWeight={"400"} fontFamily="poppins" my={4} fontSize={{base: "2xl", md: "4xl"}}>{`Welcome ${user?.first_name}`}</Heading>
      
        </Flex>

        
        <Flex direction="column" pt={{ base: "50px", md: "50px" }}>
        
      {/* <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Your Votes Table
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th pl="0px" color="gray.400">
                  Contestant
                </Th>
                <Th color="gray.400">Contest</Th>
                <Th color="gray.400">Votes</Th>
                <Th color="gray.400">Date Voted</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              { userVotes ? (userVotes.length >= 1 ? userVotes.map((votes) => {
                return (
                  <TablesTableRow
                    key={votes.id}
                    contestant={votes.contestant}
                    contest={votes.contest}
                    number_of_votes={votes.number_of_votes}
                    date_voted={votes.date_voted}
                  />
                );
              }) :
              <Flex w="100%" justifyContent="center" mx="auto">
              <Text textAlign="center" fontWeight="bold" mx="auto" w="100%" fontFamily="inter" m={8}>You have not voted any contestant yet.</Text>
             </Flex>
              ): 
              <>
              <TableSkeletonRow />
              <TableSkeletonRow />
              <TableSkeletonRow />
              </>}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}
      </Flex>

        </SidebarWithHeader>
    </>
  )
}


Dashboard.requiresAuth = true;
Dashboard.redirectUnauthenticated = "/signin";

export default Dashboard;