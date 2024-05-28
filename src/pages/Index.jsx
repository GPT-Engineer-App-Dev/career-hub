import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaSearch, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <Button as={Link} to="/job-list" leftIcon={<FaBriefcase />} colorScheme="teal" variant="solid" width="100%">
              Browse Jobs
            </Button>
            <Button as={Link} to="/post-job" leftIcon={<FaPlus />} colorScheme="teal" variant="outline" width="100%">
              Post a Job
            </Button>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;