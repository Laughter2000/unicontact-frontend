import React, {useState, useEffect} from "react";
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
    Select,
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
import {FiPhone} from "react-icons/fi"
import { MdAccountCircle} from "react-icons/md";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import user from "@/services/routes/user";
import institution from "@/services/routes/institution";
import { NavBar } from "@/components/NavBar";


const account_type = [
  {
    "id": 0,
    "name": "Student"
  }, 

  {
    "id": 1,
    "name": "Lecturer"
  }
]

  export default function SignUp() {
    const [passwordState, setPasswordState] = useState("hide");
    const router = useRouter();
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [backendError, setBackendError] = useState("");
    const [creation, setCreation] = useState(false)
    const [faculties, setFaculties] = useState(null);
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();


    const submitData = async (values) => {
        setBackendError("");
        setIsSubmitting(true);
        let code
        for (var i=0; i<faculties.length; i++) {
          if (faculties[i].id === parseInt(values["faculty"])){
            code = faculties[i].email_code
          }
        }
        var first_name = (values["first_name"]).toLowerCase()
        var last_name = (values["last_name"]).toLowerCase()
        if (values["account_type"] === "Student") {

          values["email"] = `${first_name}.${last_name}.${code}.uniben.edu`
        }
        else {
          values["email"] = `${first_name}.${last_name}.uniben.edu`
        }
        values["faculty"] = parseInt(values["faculty"])
        try {
          // const response = await user.signup.request(values);
          // setCreation(true)
          console.log(values)
          setIsSubmitting(false)
        } catch (error) {
            setIsSubmitting(false);
            const keys = Object.keys(error.response.data)
            setBackendError(error.response.data[keys[0]][0])
        }
      };
      const title = "Unicontact - Sign In";
      const url = "https://unicontact.com.ng/SignUp";


      useEffect(() => {
        
        
        const getFaculties = async() => {
          try {
            const response = await institution.faculties.request()
            setFaculties(response.data)
          }
          catch(error) {
            //nothing
          }
        }


        getFaculties()



      },[])
      
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
      <Stack minH={'90vh'} mb={32} py={0}>
          {
              creation ?
            <Text mt={12} maxW="600px" mx="auto" px="4"> A verification link has been sent to your institution email. Please check your mail to complete 
                your registration. </Text> :
        <Flex mt={16} p={4} flex={1} align={'flex-start'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'sm'}>
        {/* <Heading fontSize={'4xl'} textAlign='center' color={mode('purple.500', 'purple.300')}  m={0}>Unicontact</Heading> */}
            <Heading fontSize={'2xl'} textAlign='center'>Create an account</Heading>
            {backendError && <Text color="warning" textAlign="center">{backendError}</Text>}

            <form onSubmit={handleSubmit(submitData)}>

            <FormControl id="first_name" isRequired>
              <FormLabel>First Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                mt={2}
                >
                  <MdAccountCircle />
                  </InputLeftElement>
                <Input type='text'
                h="60px"
                borderColor={errors.name && "warning"}
                placeholder='First Name'
                {...register("first_name", {
                    required: "Your First name",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            </InputGroup>
            {errors.name && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.first_name.message}
                </Text>
              )}
            </FormControl>

            <FormControl id="last_name" my={4} isRequired>
              <FormLabel>Last Name</FormLabel>
              <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                mt={2}
                >
                  <MdAccountCircle />
                  </InputLeftElement>
                <Input type='text'
                h="60px"
                borderColor={errors.name && "warning"}
                placeholder='Last Name'
                {...register("last_name", {
                    required: "Your Last name",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            </InputGroup>
            {errors.last_name && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.last_name.message}
                </Text>
              )}
            </FormControl>


            <FormControl id="phone_number" my={4} isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                mt={2}
                >
                  <FiPhone/>
                  </InputLeftElement>
                <Input type='text'
                h="60px"
                borderColor={errors.phone_number && "warning"}
                placeholder='Phone Number'
                {...register("phone_number", {
                    required: "Your Phone Number",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            </InputGroup>
            {errors.phone_number && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.phone_number.message}
                </Text>
              )}
            </FormControl>

            <FormControl id="faculty" my={4} isRequired>
              <FormLabel>Faculty</FormLabel>
                  <Select 
                  placeholder='Select Faculty'
                  onChange={e => console.log(e.target.value)}
                  ref={register}
                  {...register("faculty", {
                    required: "Faculty is required"
                  })}      
                  >
                    {
                      !faculties ? <Text>Loading...</Text> :
                      faculties.map(faculty => (
                        <option value={faculty.id} key={faculty.id}>{faculty.name}</option>
                      ))
                    }
                </Select> 

               {errors.fa && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start" mt="2">
                  {errors.faculty.message}
                </Text>
              )}
              </FormControl>

            <FormControl id="account_type" my={4} isRequired>
              <FormLabel>Account Type</FormLabel>
                  <Select 
                  placeholder='Select Account type'
                  // onChange={e => setAccountType(e.target.value)}
                  ref={register}
                  {...register("account_type", {
                    required: "Account Type is required"
                  })}      
                  >
                    {
                      account_type.map(type => (
                        <option value={type.name} key={type.id}>{type.name}</option>
                      ))
                    }
                </Select> 

               {errors.account_type && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start" mt="2">
                  {errors.account_type.message}
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
              direction="row"
                align={'start'}
                justify={'flex-start'}>
                <Text>Already have an account? </Text>
                <Link color={mode('purple.500', 'purple.300')} href="/SignUp">Sign In</Link>
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
                Sign Up
              </Button>
            </Stack>
          </form>
          </Stack>
        </Flex>
  }
      </Stack>
      </Box>
      {/* <Footer /> */}
      </>
    );
  }