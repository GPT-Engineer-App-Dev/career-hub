import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";

const ApplyJob = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { name, email, resume, coverLetter };
    const storedApplications = JSON.parse(localStorage.getItem("applications")) || [];
    storedApplications.push(newApplication);
    localStorage.setItem("applications", JSON.stringify(storedApplications));
    setName("");
    setEmail("");
    setResume(null);
    setCoverLetter("");
  };

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Apply for Job</Heading>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl id="resume" isRequired>
              <FormLabel>Resume</FormLabel>
              <Input
                type="file"
                onChange={handleResumeUpload}
              />
            </FormControl>
            <FormControl id="cover-letter" isRequired>
              <FormLabel>Cover Letter</FormLabel>
              <Textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                placeholder="Enter your cover letter"
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" width="100%">
              Submit Application
            </Button>
          </VStack>
        </form>
      </VStack>
    </Container>
  );
};

export default ApplyJob;