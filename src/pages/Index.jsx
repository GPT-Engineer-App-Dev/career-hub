import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to JobFinder
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop destination for finding your dream job.
        </Text>
        <Box width="100%" padding={4} borderWidth={1} borderRadius="lg" boxShadow="md">
          <HStack spacing={4}>
            <IconButton aria-label="Search jobs" icon={<FaSearch />} size="lg" />
            <Button leftIcon={<FaBriefcase />} colorScheme="teal" variant="solid" width="100%">
              Browse Jobs
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;