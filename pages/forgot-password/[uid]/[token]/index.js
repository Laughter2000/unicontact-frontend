import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    Spinner,
    Box,
    useColorModeValue as mode,
    Container,
    Image,
  } from '@chakra-ui/react';
  


import React, {useState, useEffect} from "react";

// import Footer from '@/components/Footer'
import {NavBar} from '@/components/NavBar'
import { NextSeo } from "next-seo";
import {useRouter} from "next/router";
import user from '@/services/routes/user';

  export default function ForgotPassword() {
      const title = "Unicontact - Reset Password";
      const url = "https://unicontact.com.ng/forgot-password";
      const [backendError, setBackendError] = useState("")
      const [backendSuccess, setBackendSuccess] = useState("")
      const [newPassword, setNewPassword] = useState("")
      const [reset, setReset] = useState(false);
      const [loading, setLoading] = useState(false)
      const [resetLoading, setResetLoading] = useState(true)
      const router = useRouter();



    const resetPassword = async() => {
      setBackendError(false)
      setBackendSuccess(false)
      if (newPassword) {
        setLoading(true)
        try {
          await user.reset_password.request({"uid": router.query["uid"], "token": router.query["token"], "new_password": newPassword})
          setBackendSuccess("Password Reset Successfully")
          setLoading(false)
          router.push('/signin')
        }
        catch(err) {
          // setBackendSuccess("The Reset Link has been sent to your mail")

          try {
            if(err.response.data["new_password"][0]) {
              setBackendError(err.response.data["new_password"][0])
              setLoading(false)
            }
          }
          catch {
            setLoading(false)
          }
        }
      }
      else {
        setBackendError("Please Enter your new Password")
      }

    }






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
        <Box my={0}>
        <NavBar  />
        <Flex
        minH={'100vh'}
        justify={'center'}
        bg={"gray.50"}>
        <Stack
       spacing={4}
       w={'80%'}
       maxW={'md'}
       h={"100%"}
       bg={"white"}
       rounded={'xl'}
       boxShadow={'lg'}
       textAlign="center"
       p={6}
       my={16}>
          <Heading lineHeight={1.1} fontSize={{ base: 'xl', md: 'xl' }}>
            Reset Your Password
          </Heading>
        { backendError && <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={"warning"}>
              {backendError}
          </Text>}
          { backendSuccess && <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={mode('purple.500', 'purple.300')}>
              {backendSuccess}
          </Text>}
          <FormControl id="password">
            <Input
              placeholder="Enter New Password"
              _placeholder={{ color: 'gray.500' }}
              type="text"
              onChange={e => setNewPassword(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              colorScheme="purple"
              disabled={loading}
              isLoading={loading}
              loadingText='Submitting'
              onClick={() => resetPassword()}
              _hover={{
                bg: 'purple.300',
              }}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
      
      </Box>
      {/* <Footer /> */}
      </>
    );
  }