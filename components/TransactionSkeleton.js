import { Box, SkeletonCircle, SkeletonText, Skeleton, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";


function TransactionSkeleton() {

  return (
    <Flex my="1rem" justifyContent="space-between">
        <SkeletonText noOfLines={2} spacing='4' h="10px" w="90%"/>
    </Flex>
  );
}

export default TransactionSkeleton;