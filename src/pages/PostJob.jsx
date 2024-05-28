import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { jobTitle, description, location };
    const storedJobs = JSON.parse(localStorage.getItem("jobs")) || [];
    storedJobs.push(newJob);
    localStorage.setItem("jobs", JSON.stringify(storedJobs));
    setJobTitle("");
    setDescription("");
    setLocation("");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Post a Job</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="job-title" isRequired>
              <FormLabel>Job Title</FormLabel>
              <Input
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Enter job title"
              />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter job description"
              />
            </FormControl>
            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter job location"
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="100%">
              Post Job
            </Button>
            <Button as={Link} to="/view-applications" colorScheme="teal" variant="outline" width="100%">
              View Applications
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default PostJob;