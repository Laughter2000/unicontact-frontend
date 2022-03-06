import { Box, Heading, Text, Button, Link, useColorModeValue} from '@chakra-ui/react';

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6} mt={8}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgClip='text' 
        bgGradient= 'linear(to-r, yellow.500, yellow.300)'>
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you are looking for does not seem to exist
      </Text>
    <Link href="/">
      <Button
        as = {"a"}
        colorScheme="yellow"
        color="white"
        variant="solid">
        Go to Home
      </Button>
      </Link>
    </Box>
  );
}
