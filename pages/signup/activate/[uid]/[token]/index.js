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

import Footer from '@/components/Footer'
import {NavBar} from '@/components//NavBar'
import { NextSeo } from "next-seo";
import {useRouter} from "next/router";
import user from '@/services/routes/user';

  export default function ActivateAccount() {
      const title = "Cleanomart - Sign In";
      const url = "https://cleanomart.com.ng/forgot-password";
      const [resetLoading, setResetLoading] = useState(true)
      const router = useRouter();




    useEffect(() => {
      const verifyAccount = async () => {
        if(router.query["uid"]){
        try {
            await user.active_account.request({"uid": router.query["uid"], "token": router.query["token"]})
            router.push("/signin")
          } 
          catch(err) {
            // console.log(err.response)
            // router.push("/signup")
            setResetLoading(false)
          }
        }
      }
      verifyAccount()
    }, [router.query])




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
        <NavBar />
        {resetLoading ?
        <Stack justifyContent="center" alignItems="center" h="80vh">
        <Spinner   thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='purple.500'
                  size='xl' />

        </Stack> :
        <Text textAlign="center" mx="auto" my={"30"}>Invalid Token</Text>
        }
         
      </Box>
      {/* <Footer /> */}
      </>
    );
  }