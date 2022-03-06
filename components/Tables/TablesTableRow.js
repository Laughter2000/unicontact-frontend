
import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
  import { format } from "date-fns";
  import ContactDetails from "@/components/ContactDetails";

  function TablesTableRow(props) {
 
    const { first_name, last_name, mat_no, phone_number, alldata } = props;
    const textColor = useColorModeValue("gray.700", "white");
    const bgStatus = useColorModeValue("gray.400", "#1a202c");
    const colorStatus = useColorModeValue("white", "gray.400");
  
    return (
      <Tr>
        <Td pl="0px">
          <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
              <Text
                fontSize="sm"
                color={textColor}
                fontWeight="bold"
                minWidth="100%"
              >
                {first_name}
              </Text>
          </Flex>
        </Td>
  
        <Td>
            <Text fontSize="sm" color={textColor} fontWeight="bold">
              {last_name}
            </Text>
        </Td>
        <Td>
        <Text fontSize="sm" color={textColor} fontWeight="bold">
              {mat_no}
        </Text>
        </Td>
        <Td>
          <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
            {phone_number}
          </Text>
        </Td>
        <Td>
          <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
            <ContactDetails contacts={alldata}/>
          </Text>
        </Td>
      </Tr>
    );
  }
  
  export default TablesTableRow;