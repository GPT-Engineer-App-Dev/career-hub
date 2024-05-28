import { useState, useEffect } from "react";
import { Container, VStack, Heading, Box, Text } from "@chakra-ui/react";

const ViewApplications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const storedApplications = JSON.parse(localStorage.getItem("applications")) || [];
    setApplications(storedApplications);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Job Applications</Heading>
        {applications.length === 0 ? (
          <Text>No applications submitted.</Text>
        ) : (
          applications.map((application, index) => (
            <Box key={index} width="100%" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
              <Heading as="h2" size="md">{application.name}</Heading>
              <Text mt={2}><strong>Email:</strong> {application.email}</Text>
              <Text mt={2}><strong>Cover Letter:</strong> {application.coverLetter}</Text>
              <Text mt={2}><strong>Resume:</strong> {application.resume ? application.resume.name : "No resume uploaded"}</Text>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default ViewApplications;