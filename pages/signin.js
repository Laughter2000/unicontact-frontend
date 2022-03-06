import React, {useState, useContext} from "react";
import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    useColorModeValue as mode,
    Box,
    Text
  } from '@chakra-ui/react';
  import Cookies from "js-cookie";

// import Footer from '@/components/Footer'
import { PasswordLock, EmailIcon, HideIcon, ShowIcon} from "@/components/Icons/Icons"
import {BiShowAlt, BiHide} from "react-icons/bi"
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import account from "@/services/routes/user";
import { api } from "@/services/api";
import { NavBar } from "@/components/NavBar";
import { useAuth } from "@/contexts/UserProvider";


  export default function SignIn() {
    const [passwordState, setPasswordState] = useState("hide");
    const router = useRouter();
    const {user, setUser} = useAuth()
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [backendError, setBackendError] = useState("");
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();


    const submitData = async (values) => {
        setBackendError("");
        setIsSubmitting(true);
        try {
          const response = await account.signin.request(values);
          Cookies.set("access_token", response.data.access);
          Cookies.set("refresh_token", response.data.refresh)
          api.defaults.headers['Authorization'] =
					'JWT ' + response.data.access;

        const user_details = await account.user_details.request();
        console.log(user_details.data)
        setUser(user_details.data)
          if (router.query.next) {
            router.push(`/${router.query.next}`);
          } else {
            router.push("/dashboard");
          }
        } catch (error) {
          setBackendError("Invalid Email or Password");
          setIsSubmitting(false);
        }
      };
      const title = "Unicontact - Sign In";
      const url = "https://unicontact.com.ng/signin";

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
        <NavBar active="Sign In" />
      <Stack minH={'90vh'} mb={32} py={0}>
        <Flex mt={16} p={4} flex={1} align={'flex-start'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'sm'}>
        {/* <Heading fontSize={'4xl'} textAlign='center' color={mode('purple.500', 'purple.300')}  m={0}>Unicontact</Heading> */}
            <Heading fontSize={'2xl'} textAlign='center'>Sign in to your account</Heading>
            {backendError && <Text color="warning" textAlign="center">{backendError}</Text>}

            <form onSubmit={handleSubmit(submitData)}>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                mt={2}
                >
                  <EmailIcon/>
                  </InputLeftElement>
                <Input type='email'
                h="60px"
                borderColor={errors.password && "warning"}
                placeholder='Email Address'
                {...register("email", {
                    required: "Your email address",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            </InputGroup>
            {errors.email && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.email.message}
                </Text>
              )}
            </FormControl>
            <FormControl id="password" my={4} isRequired>
            <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                mt={2}
                >
                  <PasswordLock/>
                  </InputLeftElement>

                <Input 
                placeholder='Password'
                h="60px"
                type={passwordState === "show" ? "text" : "password"}
                borderColor={errors.password && "warning"}
                {...register("password", {
                    required: "Please enter Password"
                  })}/>

                {passwordState === "hide" ? (
                  <InputRightElement
                  mt="5px"
                  onClick={() => setPasswordState("show")}
                  
                  >
                  <BiHide boxSize={6} mr={16}/>
                  </InputRightElement>

                ) : (
                  <InputRightElement
                  onClick={() => setPasswordState("hide")}
                  mt="5px"
                  >
                  <BiShowAlt boxSize={6} mr={16}/>
                  </InputRightElement>

                )}
            </InputGroup>
            {errors.password && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.password.message}
                </Text>
              )}
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={mode('purple.500', 'purple.300')}  href="/forgot-password">Forgot password?</Link>
              </Stack>
              <Button 
                colorScheme="purple"
                isLoading={isSubmitting}
                loadingText='Submitting'
                spinnerPlacement='start'
                isDisabled={isSubmitting}
                type="submit"
                h="60px"
                onClick={() => handleSubmit(submitData)}>
                Sign In
              </Button>
            </Stack>
          </form>
          </Stack>
        </Flex>
      </Stack>
      </Box>
      {/* <Footer /> */}
      </>
    );
  }