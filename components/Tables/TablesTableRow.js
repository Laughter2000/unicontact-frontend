
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

  function TablesTableRow(props) {
 
    const { contestant, contest, number_of_votes, date_voted } = props;
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
                {contestant}
              </Text>
          </Flex>
        </Td>
  
        <Td>
            <Text fontSize="sm" color={textColor} fontWeight="bold">
              {contest}
            </Text>
        </Td>
        <Td>
        <Text fontSize="sm" color={textColor} fontWeight="bold">
              {number_of_votes}
        </Text>
        </Td>
        <Td>
          <Text fontSize="sm" color={textColor} fontWeight="bold" pb=".5rem">
            {format(new Date(date_voted), "PPp")}
          </Text>
        </Td>
      </Tr>
    );
  }
  
  export default TablesTableRow;