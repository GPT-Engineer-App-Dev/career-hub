import { useState, useEffect } from "react";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Job Listings</Heading>
        {jobs.length === 0 ? (
          <Text>No job postings available.</Text>
        ) : (
          jobs.map((job, index) => (
            <Box key={index} width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
              <Heading as="h2" size="md">{job.jobTitle}</Heading>
              <Text mt={2}>{job.description}</Text>
              <Text mt={2} fontWeight="bold">{job.location}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default JobList;