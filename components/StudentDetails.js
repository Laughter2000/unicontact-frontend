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
  Spinner,
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
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement
  
} from "@chakra-ui/react";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesTableRow from "components/Tables/TablesTableRow";
import TableSkeletonRow from "@/components/TableSkeletonRow";
import { NextSeo } from "next-seo";
import "@fontsource/inter"
import "@fontsource/poppins"
import {useAuth} from "@/contexts/UserProvider";
import NotFound from "@/components/NotFound";
import user from "@/services/routes/user";
import {FaSearch} from "react-icons/fa"
import { api } from "@/services/api";




const StudentDetails = () => {
    const [studentDatas, setStudentDatas] = useState(null)
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");


    const [nextPage, setNextPage] = useState(null);
    const [nextLoading, setNextLoading] = useState(false);
    const [dataUpdated, setDataUpdated] = useState(false);
    const [name, setName] = useState("");
    const [error, setError] = useState(false);



    const loadMore = async() => {
        try {
        setNextLoading(true)
        const { data } = await api.get(nextPage)
        setNextPage(data.next)
        setStudentDatas(prev => [...prev, ...data.results]);
        setDataUpdated(prev => !prev)

        setNextLoading(false)
      }
      catch(err) {
        setNextLoading(false)
      }
    }


    useEffect(() => {


      const getStudentData = async () => {
        try {
            if (name) {
                const { data } = await user.all_profile.request({mat_no: name})
                setStudentDatas(data.results)
                setNextPage(data.next)
            }
            else {
                const { data } = await user.all_profile.request()
                setStudentDatas(data.results)
                setNextPage(data.next)
            }

        }
        catch(err) {
            // if (err.response.status === 404) {
            //     setError(true)
            //   }
        }
      }

    getStudentData()

    }, [name])

    useEffect(() => {

    }, [dataUpdated])


    if (error) {
        return <NotFound />
      }


    return (

        <Flex direction="column">
        <Flex w="100%" justifyContent={{base: "center"}} my="50px">
          <InputGroup w="80%" maxW="500px" my={8} >
    <InputLeftElement
      pointerEvents='none'>
        <FaSearch color='gray.300' />
        </InputLeftElement>
    <Input type='text' h="40px" bgColor="white" placeholder='Search for a student using mat. no'
     borderRadius="20px" onChange={e => setName(e.target.value)}/>
  </InputGroup>
  </Flex>
       <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
       <CardHeader p="6px 0px 22px 0px">
         <Text fontSize="xl" color={textColor} fontWeight="bold">
           Student&apos;s Table
         </Text>
       </CardHeader>
       <CardBody>
         <Table variant="simple" color={textColor}>
           <Thead>
             <Tr my=".8rem" pl="0px" color="gray.400">
               <Th pl="0px" color="gray.400">
                 First Name
               </Th>
               <Th color="gray.400">Last Name</Th>
               <Th color="gray.400">Mat. No</Th>
               <Th color="gray.400">Phone Number</Th>
               <Th color="gray.400">Contacts</Th>
             </Tr>
           </Thead>
           <Tbody>
             { studentDatas ? (studentDatas.length >= 1 ? studentDatas.map((data) => {
               return (
                 <TablesTableRow
                   key={data.id}
                   first_name={data.first_name}
                   last_name={data.last_name}
                   mat_no={data.mat_no}
                   phone_number={data.phone_number}
                   alldata={data}
                 />
               );
             }) :
             <Flex w="100%" justifyContent="center" mx="auto">
             <Text textAlign="center" fontWeight="bold" mx="auto" w="100%" fontFamily="inter" m={8}>No student data yet.</Text>
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
     </Card>


     <Flex w="100%" justifyContent="center" my={8}>
    { (nextPage && nextLoading == false) && <Button
        bgColor={"purple.500"}
        color="white"
        minW="110px"
        h="40px"
        onClick={() => loadMore()}
        mx="auto"
        textAlign="center"
        fontSize="xs"
        px="1.5rem"
      >
        Load More
      </Button>}
      {
        nextLoading &&
        <Spinner   thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='lg' />
      }
        </Flex>
     </Flex>

    )
}


export default StudentDetails;