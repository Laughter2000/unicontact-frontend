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
    useColorModeValue,
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
      const title = "Unicontact - Forgot Password";
      const url = "https://unicontact.com.ng/forgot-password";
      const [email, setEmail] = useState("")
      const [backendError, setBackendError] = useState("")
      const [backendSuccess, setBackendSuccess] = useState("")
      const [loading, setLoading] = useState(false)


    const sendEmail = async() => {
      setBackendError(false)
      setBackendSuccess(false)
      if (email) {
        setLoading(true)
        try {
          await user.forgot_password.request({"email": email})
          setBackendSuccess("The Reset Link has been sent to your mail")
          setLoading(false)
        }
        catch(err) {
          // setBackendSuccess("The Reset Link has been sent to your mail")
          setLoading(false)
        }
      }
      else {
        setBackendError("Please Enter your email")
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
            Forgot your password?
          </Heading>
        { backendError && <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={"warning"}>
              {backendError}
          </Text>}
          { backendSuccess && <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={"purple.500"}>
              {backendSuccess}
          </Text>}
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            >
            You&apos;ll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              onChange={e => setEmail(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
            colorScheme="purple"
              disabled={loading}
              isLoading={loading}
              loadingText='Submitting'
              onClick={() => sendEmail()}
              _hover={{
                bg: 'purple.300',
              }}>
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
      </Box>
      {/* <Footer /> */}
      </>
    );
  }