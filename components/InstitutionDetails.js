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
  Td,
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



const names ={
    'first_name': "First Name",
    'last_name': "Last Name",
    "department": "Department",
    "faculty": "Faculty",
    "level": "Level",
    "mat_no": "Matriculation Number",
    "phone_number": "Phone Number",
    'relative1_name': "Relative 1 Name",
    'relative1_phone': "Relative 1 Phone",
    'relative2_name': "Relative 2 Name",
    'relative2_phone': "Relative 2 Phone",
    'relative3_name': "Relative 3 Name",
    'relative3_phone': "Relative 3 Phone",
}


const TableRow = ({details}) => {
    const detailsKeys = details && Object.keys(details);
    const textColor = useColorModeValue("gray.700", "white");

    return (
        detailsKeys && detailsKeys.map((key) => 
(
    <Tr key={key}>
    <Td>
          <Text
            fontSize="sm"
            color={textColor}
            fontWeight="bold"
            minWidth="100%"
            pl="0px"
            textTransform='capitalize'
          >
            {names[key] ? names[key] : key}
          </Text>
    </Td>

    <Td>
        <Text fontSize="sm" color={textColor} fontWeight="normal">
        {details[key]}
        </Text>
    </Td>
    </Tr>
       ))
          )
}





const InstitutionDetails = () => {
    const [studentDatas, setStudentDatas] = useState(null)
    const iconBoxInside = useColorModeValue("white", "white");
    const textColor = useColorModeValue("gray.700", "white");
    const [error, setError] = useState(false);



    useEffect(() => {


      const getStudentData = async () => {
        try {
          const { data } = await user.all_profile.request()
          setStudentDatas(data.results[0])

        }
        catch(err) {
            console.log(err.response)
            // if (err.response.status === 404) {
            //     setError(true)
            //   }
        }
      }

    getStudentData()

    }, [])


    if (error) {
        return <NotFound />
      }


    return (
       <Card overflowX={{ sm: "scroll", xl: "hidden" }}>
       <CardHeader p="6px 0px 22px 0px">
         <Text fontSize="xl" color={textColor} fontWeight="bold">
           Your Institution Data
         </Text>
       </CardHeader>
       <CardBody>
       <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400">
                <Th color="gray.400">
                  Name
                </Th>
                <Th color="gray.400">Value</Th>
              </Tr>
            </Thead>
            <Tbody>
            <TableRow details={studentDatas} />
            </Tbody>
          </Table>
       </CardBody>
     </Card>

    )
}


export default InstitutionDetails;