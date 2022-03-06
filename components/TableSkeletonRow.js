
import {
    Avatar,
    Badge,
    Button,
    Flex,
    Td,
    Text,
    Tr,
    useColorModeValue,
    Skeleton,
    SkeletonText
  } from "@chakra-ui/react";
  import React from "react";

  function TableSkeletonRow() {
 
    const textColor = useColorModeValue("gray.700", "white");
  
    return (
      <Tr>
        <Td minWidth={{ sm: "250px" }} pl="0px">
          <SkeletonText mt='2' noOfLines={1} w="70%" h="10px"/>
        </Td>
  
        <Td>
        <SkeletonText mt='2' noOfLines={1} w="70%" h="10px"/>
        </Td>
        <Td>
        <SkeletonText mt='2' noOfLines={1} w="70%" h="10px"/>
        </Td>
        <Td>
        <SkeletonText mt='2' noOfLines={1} w="70%" h="10px"/>
        </Td>
      </Tr>
    );
  }
  
  export default TableSkeletonRow;