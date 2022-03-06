import React, {useState, useEffect} from "react";

import {Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalFooter,
ModalBody,
ModalCloseButton,
Select,
useDisclosure,
Button,
Heading,
Table,
Tbody,
Td,
Th,
Thead,
Tr,
Input,
Text,
Flex,
Textarea,
useColorModeValue 
} from "@chakra-ui/react";
import { format } from "date-fns";


const names ={
    'relative1_name': "Relative 1 Name",
    'relative1_phone': "Relative 1 Phone",
    'relative2_name': "Relative 2 Name",
    'relative2_phone': "Relative 2 Phone",
    'relative3_name': "Relative 3 Name",
    'relative3_phone': "Relative 3 Phone",
}



const TableRow = ({details}) => {
    const detailsKeys = Object.keys(details);
    detailsKeys = detailsKeys.filter(item => item.startsWith("relative"))
    const textColor = useColorModeValue("gray.700", "white");

    return (
        detailsKeys.map((key) => 
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




function ContactDetails({contacts}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const textColor = useColorModeValue("gray.700", "white");

    return (
      <>
              <Button
                colorScheme="purple"
                size="md"
                w={{ base: 'full', md: 'auto' }}
                minW="10rem"
                flexShrink={0}
                fontSize="md"
                onClick={onOpen}
              >
                View Contacts
              </Button>
  
        <Modal onClose={onClose} isOpen={isOpen}  scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent w={{base: "90%", md: "initial"}}>
            <ModalHeader>Contact Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
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
            <TableRow details={contacts} />
            </Tbody>
          </Table>

         
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  }


export default ContactDetails;
