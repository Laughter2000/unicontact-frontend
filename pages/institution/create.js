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
import account from "@/services/routes/user";
import institution from "@/services/routes/institution";
import { NavBar } from "@/components/NavBar";

import SidebarWithHeader from '@/components/Sidebar';
import { useAuth } from "@/contexts/UserProvider";


const levels = ["100", "200", "300", "400", "500", "600", "700", "800", "900"]

  export default function SignUp() {
    const router = useRouter();
  
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [backendError, setBackendError] = useState("");

    const {user, setUser} = useAuth();
    const [departments, setDepartment] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();


    const submitData = async (values) => {
        setBackendError("");
        setIsSubmitting(true);
        values["department_id"] = parseInt(values["department_id"])
        try {
          const response = await account.create_data.request(values)
          router.push("/profile")
          setIsSubmitting(false)
        } catch (error) {
            setIsSubmitting(false);
            const keys = Object.keys(error.response.data)
            setBackendError(error.response.data[keys[0]][0])
        }
      };
      const title = "Unicontact - Institution Data";
      const url = "https://unicontact.com.ng/institution";



      useEffect(() => {

        const getDepartments = async() => {
            try {
              const response = await institution.department(user.faculty_code).request()
              setDepartment(response.data)
            }
            catch(error) {
              //nothing
            }
          }
  
  
          getDepartments()

    }, [user])

      
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
<SidebarWithHeader page="Profile">
      <Stack minH={'90vh'} mb={32} py={0}>
        <Flex mt={16} p={4} flex={1} align={'flex-start'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'sm'}>
        {/* <Heading fontSize={'4xl'} textAlign='center' color={mode('purple.500', 'purple.300')}  m={0}>Unicontact</Heading> */}
            <Heading fontSize={'2xl'} textAlign='center'>Create Institution Data</Heading>
            {backendError && <Text color="warning" textAlign="center">{backendError}</Text>}

            <form onSubmit={handleSubmit(submitData)}>

            <FormControl id="department" my={4} isRequired>
              <FormLabel>Department</FormLabel>
                  <Select 
                  placeholder='Select Department'
                  onChange={e => console.log(e.target.value)}
                  ref={register}
                  {...register("department_id", {
                    required: "Department is required"
                  })}      
                  >
                    {
                      !departments ? <Text>Loading...</Text> :
                      departments.map(department => (
                        <option value={department.id} key={department.id}>{department.name}</option>
                      ))
                    }
                </Select> 

              </FormControl>




            <FormControl id="level" my={4} isRequired>
              <FormLabel>Level</FormLabel>
                  <Select 
                  placeholder='Select Level'
                  // onChange={e => setAccountType(e.target.value)}
                  ref={register}
                  {...register("level", {
                    required: "Account Type is required"
                  })}      
                  >
                    {
                      levels.map((level, index) => (
                        <option value={level} key={index}>{level}</option>
                      ))
                    }
                </Select> 

               {errors.level && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start" mt="2">
                  {errors.level.message}
                </Text>
              )}
              </FormControl>
              


              <FormControl id="Matriculation Number" isRequired>
              <FormLabel>Matriculation Number</FormLabel>
                <Input type='text'
                h="60px"
                borderColor={errors.mat_no && "warning"}
                placeholder='Mat. Number'
                {...register("mat_no", {
                    required: "Your Mat. Number",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            {errors.mat_no && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.mat_no.message}
                </Text>
              )}
            </FormControl>


            <FormControl id="phone_number" my={4} isRequired>
              <FormLabel>Phone Number</FormLabel>
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
            {errors.phone_number && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.phone_number.message}
                </Text>
              )}
            </FormControl>

            <FormControl id="relative1_name" my={4} isRequired>
              <FormLabel>Relative 1 Name</FormLabel>
                <Input type='text'
                h="60px"
                borderColor={errors.relative1_name && "warning"}
                placeholder='Relative 1 Name'
                {...register("relative1_name", {
                    required: "Your Relative 1 Name",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            {errors.relative1_name && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.relative1_name.message}
                </Text>
              )}
            </FormControl>


            <FormControl id="relative1_phone" my={4} isRequired>
              <FormLabel>Relative 1 Phone</FormLabel>
                <Input type='text'
                h="60px"
                borderColor={errors.relative1_phone && "warning"}
                placeholder='Relative 1 phone'
                {...register("relative1_phone", {
                    required: "Your Relative 1 Phone",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            {errors.relative1_phone && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.relative1_phone.message}
                </Text>
              )}
            </FormControl>



            <FormControl id="relative2_name" my={4} isRequired>
              <FormLabel>Relative 2 Name</FormLabel>
                <Input type='text'
                h="60px"
                borderColor={errors.relative2_name && "warning"}
                placeholder='Relative 2 Name'
                {...register("relative2_name", {
                    required: "Your Relative 2 Name",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            {errors.relative2_name && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.relative2_name.message}
                </Text>
              )}
            </FormControl>


            <FormControl id="relative2_phone" my={4} isRequired>
              <FormLabel>Relative 2 Phone</FormLabel>
                <Input type='text'
                h="60px"
                borderColor={errors.relative2_phone && "warning"}
                placeholder='Relative 2 phone'
                {...register("relative2_phone", {
                    required: "Your Relative 2 Phone",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            {errors.relative2_phone && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.relative2_phone.message}
                </Text>
              )}
            </FormControl>


            <FormControl id="relative3_name" my={4} isRequired>
              <FormLabel>Relative 3 Name</FormLabel>
                <Input type='text'
                h="60px"
                borderColor={errors.relative3_name && "warning"}
                placeholder='Relative 3 Name'
                {...register("relative3_name", {
                    required: "Your Relative 3 Name",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            {errors.relative3_name && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.relative3_name.message}
                </Text>
              )}
            </FormControl>


            <FormControl id="relative3_phone" my={4} isRequired>
              <FormLabel>Relative 3 Phone</FormLabel>
                <Input type='text'
                h="60px"
                borderColor={errors.relative3_phone && "warning"}
                placeholder='Relative 3 phone'
                {...register("relative3_phone", {
                    required: "Your Relative 3 Phone",
                    minLength: 3,
                    maxLength: 80
                  })}
                   />
            {errors.relative3_phone && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.relative3_phone.message}
                </Text>
              )}
            </FormControl>



            <Stack spacing={6} mt="40px">
              <Button 
                colorScheme="purple"
                isLoading={isSubmitting}
                loadingText='Submitting'
                spinnerPlacement='start'
                isDisabled={isSubmitting}
                type="submit"
                h="60px"
                onClick={() => handleSubmit(submitData)}>
                Create Data
              </Button>
            </Stack>
          </form>
          </Stack>
        </Flex>
      </Stack>
      </SidebarWithHeader>
      {/* <Footer /> */}
      </>
    );
  }