import React, {useState, useEffect} from "react";
import SidebarWithHeader from '@/components/Sidebar';
import {
  Flex,
  Text,
  Heading,
  Input,
  Button,
  Skeleton,
  Image,
  Textarea
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useForm } from "react-hook-form";

import account from "@/services/routes/user";
import "@fontsource/inter"
import "@fontsource/poppins"
import { ChangePassword } from "@/components/ChangePassword";




const Profile = () => {
    const title = "Memexify - Profile";
    const url = "https://memexify.com/profile";
    const [backendError, setBackendError] = useState("");
    const [backendSuccess, setBackendSuccess] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [image, setImage] = useState(null);
    const [user, setUser] = useState(null);
    const [imageError, setImageError] = useState("");
    const [src, setSrc] = useState(null);
    const {
      register,
      handleSubmit,
      formState: { errors }
    } = useForm();
  
  
  
  
    const handleImage = (e) => {
      setImage(e.target.files[0]);
  
      var image = document.getElementById("output")
      image.src = URL.createObjectURL(e.target.files[0])
    };
  
    const getFormData = (object) =>
      Object.keys(object).reduce((formData, key) => {
        formData.append(key, object[key]);
        return formData;

      }, new FormData());

    const updateProfile = async (values) => {
        console.log(values)
        setBackendError("");
        setBackendSuccess("");
        validateFiles(image);
        var newFile;
        if (values && image) {
          newFile = { ...values, profile_picture: image };
        } else if (values) {
          newFile = { ...values };
        } else if (image) {
          newFile = { profile_picture: image };
        }
        if (!imageError) {
          try {
            setIsSubmitting(true);
            const response = await account.update_profile.request(getFormData(newFile));
            setBackendSuccess("Profile Updated Successfully");
            setIsSubmitting(false);
          } catch (error) {
            //Output the first error
            console.log(error);
            // const errors = error.response && Object.keys(error.response.data);
            // const first_error = errors && errors[0];
            // const displayError = first_error && error.response.data[first_error][0];
            // setBackendError(displayError && displayError);
            setBackendError(error.response.data)
            setIsSubmitting(false);
          }
        }
      };

  const validateFiles = (value) => {
    // if (value.length < 1) {
    //   return 'Files is required'
    // }
    if (value) {
      const fsMb = value.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return setImageError("Max file size 10mb");
      }
    }
    return true;
  };

    useEffect(() => {

        const getUser = async () => {
            try {
                const { data } = await account.user_details.request()
                setUser(data);
                console.log(data);
                setIsLoading(false)
            }
            catch(err) {
                console.log(err)
                setIsLoading(false);
            }
        }
    
        getUser()

    }, [])

    if (isLoading) {
        return (
          <SidebarWithHeader page="profile">
            <Skeleton height="100px" w="90%" mx="auto" my="20px" />
            <Skeleton height="100px" w="90%" mx="auto" my="20px" />
            <Skeleton height="100px" w="90%" mx="auto" my="20px" />
          </SidebarWithHeader>
        );
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
        <SidebarWithHeader page="Profile">
            <Flex flexDirection="column" pt={{ base: "10px", md: "10px" }}  p="4"  bg="white" justifyContent="center" mb={8}>
             <form
              encType="multipart/form-data"
              onSubmit={handleSubmit(updateProfile)}
            >
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mt="40px"
                mb="60px"
                w="100%"
              >
                <Heading fontSize="30px">Profile</Heading>
                <ChangePassword />
              </Flex>
              <Flex direction="column" mx="20px">
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

                {/* <Flex
                  direction="column"
                  w="90%"
                  mx="auto"
                  mb="20px"
                  justifyContent="center" */}
                {/* > */}
{/*                 
                  <Flex mx="auto" w="100%" justifyContent="center">
                  <div className="profile-pic">
                    <label className="-label" htmlFor="file">
                      <span className="glyphicon glyphicon-camera"></span>
                      <span>Change</span>
                    </label>
                    <input id="file" type="file" onChange={(e) => handleImage(e)}/>
                    <img src={user?.profile_picture ? user?.profile_picture : "/images/profilebg.jpg"} id="output" width="100" />
                  
                  </div>
                  </Flex>

                  {imageError && (
                    <Text
                      fontSize="10px"
                      color="warning"
                      justifySelf="flex-start"
                      mx="auto"
                    >
                      {imageError}
                    </Text>
                  )}
                </Flex> */}
                <Input
                  focusBorderColor="primary"
                  placeholder="Your First name"
                  color="primary"
                  py="25px"
                  pl="20px"
                  mb="40px"
                  value={user.first_name}
                  isReadOnly={true}
                />
                <Input
                  focusBorderColor="primary"
                  placeholder="Your Last name"
                  color="primary"
                  py="25px"
                  pl="20px"
                  mb="40px"
                  value={user.last_name}
                  isReadOnly={true}
                />
                <Input
                  focusBorderColor="primary"
                  placeholder="Email Address"
                  color="primary"
                  py="25px"
                  pl="20px"
                  mb="40px"
                  value={user.email}
                  isReadOnly={true}
                />
                <Input
                  name="phone"
                  focusBorderColor="primary"
                  placeholder="Mobile number e.g. 081111222333"
                  color="primary"
                  py="25px"
                  pl="20px"
                  mb="40px"
                  defaultValue={user.phone_number}
                  ref={register}
                  {...register("phone_number", {
                    minLength: 11,
                    maxLength: 80
                  })}
                  isReadOnly={true}
                />
                <Input
                  name="phone"
                  focusBorderColor="primary"
                  placeholder=""
                  color="primary"
                  py="25px"
                  pl="20px"
                  mb="40px"
                  defaultValue={user.faculty_name}
                  ref={register}
                  {...register("faculty_name", {
                    minLength: 11,
                    maxLength: 80
                  })}
                  isReadOnly={true}
                />
{/* 
                <Input
                  name="username"
                  focusBorderColor="primary"
                  placeholder="User Name e.g memexify"
                  color="primary"
                  py="25px"
                  pl="20px"
                  borderColor={errors.user_name && "warning"}
                  mb="40px"
                  defaultValue={user.user_name}
                  ref={register}
                  {...register("user_name", {
                    required: "Required",
                    minLength: {
                      value: 3,
                      message: "User name too short"
                    },
                    maxLength: 20
                  })}
                />
               {errors.user_name && (
                <Text fontSize="10px" color="warning" justifySelf="flex-start">
                  {errors.user_name.message}
                </Text>
              )} */}
                {/* <Input
                  name="social_link"
                  focusBorderColor="primary"
                  placeholder="social link e.g https://instagram.com/memexify"
                  color="primary"
                  py="25px"
                  pl="20px"
                  mb="40px"
                  defaultValue={user.social_link}
                  ref={register}
                  {...register("social_link", {
                    minLength: 11,
                    maxLength: 80
                  })}
                />
                 <Textarea
                  placeholder='Give a little detail about your self'
                  size='sm'
                  mb="40px"
                  resize={"none"}
                  defaultValue={user.about}
                  ref={register}
                  {...register("about", {
                    minLength: 1
                  })}
                />
              </Flex>
                <Flex mx='auto'>
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
                  onClick={() => handleSubmit(updateProfile)}
                >
                  Update Profile
                </Button> */}
                </Flex>
            </form> 
 
            </Flex>   
            <Flex>

{ user.role ? 
     <Button
       color="white"
       fontSize="16px"
       cursor="pointer"
       p={8}
       bgColor="primary"
       mx='auto'
       as={"a"}
       href="/institution"
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
     >
       View Institution Data
     </Button> :
     
     <Button
       color="white"
       fontSize="16px"
       cursor="pointer"
       p={8}
       bgColor="primary"
       mx='auto'
       as={"a"}
       href="/institution/create"
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
     >
       Create Institution Data
     </Button>}        
 </Flex>   
        </SidebarWithHeader>
    </>
  )
}


Profile.requiresAuth = true;
Profile.redirectUnauthenticated = "/signin";

export default Profile;