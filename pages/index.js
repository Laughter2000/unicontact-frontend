import { Box, Button, Flex, Heading, HStack, Img, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { HiChevronRight } from 'react-icons/hi'


export default function Home() {
  return (
    <Box bg="gray.800" as="section" minH="100vw" position="relative">
      <Text position="relative">Unicontact</Text>
      <Box py="32" position="relative" zIndex={1}>
        <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }} color="white">
          <Box maxW="xl">
            <Heading as="h1" size="3xl" fontWeight="extrabold">
             Get Connected and Be Connected
            </Heading>
            <Text fontSize={{ md: '2xl' }} mt="4" maxW="lg">
              Unicontact is a holistic database for university students in order to easily access
              there relative&apos;s contacts during emergency.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} mt="10" spacing="4">
              <Button
                as="a"
                href="/signin"
                colorScheme="purple"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                Sign In
              </Button>
              <Button
                as="a"
                href="/signup"
                bgColor="white"
                color="purple.500"
                px="8"
                rounded="full"
                size="lg"
                fontSize="md"
                fontWeight="bold"
              >
                sign Up
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Flex
        id="image-wrapper"
        position="absolute"
        insetX="0"
        insetY="0"
        w="full"
        h="full"
        overflow="hidden"
        align="center"
      >
        <Box position="relative" w="full" h="full">
          <Img
            src="./images/africa.webp"
            alt="Main Image"
            w="full"
            h="full"
            objectFit="cover"
            objectPosition="top bottom"
            position="absolute"
          />
          <Box position="absolute" w="full" h="full" bg="blackAlpha.600" />
        </Box>
      </Flex>
    </Box>
  )
}
