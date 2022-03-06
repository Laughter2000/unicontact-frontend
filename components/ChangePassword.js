import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Flex,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Input,
    ModalCloseButton,
    
  } from "@chakra-ui/react";

import { useForm } from "react-hook-form";
import account from "@/services/routes/user";

export const ChangePassword = () =>  {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [backendError, setBackendError] = useState("");
    const [backendSuccess, setBackendSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [newPassword, setNewPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");


    const updateProfile = async () => {
        if (!newPassword || !oldPassword) {
            setBackendError("Please enter the empty field")
        }
        else {
        try {
            setIsSubmitting(true);
            setBackendSuccess("");
            setBackendError("");
            const response = await account.change_password.request({
                "current_password": oldPassword,
                "new_password": newPassword
            });
            setBackendSuccess("Password Changed Successfully");
            setIsSubmitting(false);
            onClose()
          } catch (error) {
            //Output the first error
            setBackendError(error.response.data["error"]);
            setIsSubmitting(false);
          }}
    }
  
    return (
      <>
        <Button onClick={onOpen} 
            p={4}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'primary'}>Change Password</Button>
  
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent mx="20px">
            <ModalHeader>Change Password</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

                <Flex
                  direction="column"
                  w="90%"
                  mx="auto"
                  mb="20px"
                  justifyContent="center"
                >
                {backendError && (
                  <Text color="warning" my="20px" mx="auto">
                    {backendError}
                  </Text>
                )}
                {backendSuccess && (
                  <Text color="primary" my="20px" mx="auto">
                    {backendSuccess}
                  </Text>
                )}
                <Input
                  name="old_password"
                  focusBorderColor="primary"
                  placeholder="Old Password"
                  color="primary"
                  py="25px"
                  pl="20px"
                  mb="40px"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                <Input
                  name="new_password"
                  focusBorderColor="primary"
                  placeholder="New Password"
                  color="primary"
                  py="25px"
                  pl="20px"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </Flex>
            </ModalBody>
            <ModalFooter>
            <Button
                  color="white"
                  fontSize="16px"
                  cursor="pointer"
                  type="submit"
                  p={8}
                  isLoading={isSubmitting}
                  loadingText="Submitting"
                  isDisabled={isSubmitting}
                  bgColor="primary"
                  mx='auto'
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
                  onClick={() => updateProfile()}
                >
                  Change Password
                </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

