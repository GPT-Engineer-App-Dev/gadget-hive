import { Box, Container, VStack, Text, Image, Grid, GridItem, Link, Flex, Heading, Button } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.800" color="white" p={4}>
        <Flex justify="space-between" align="center" maxW="container.lg" mx="auto">
          <Heading size="lg">ElectroShop</Heading>
          <Flex gap={4}>
            <Link href="#" color="white">Home</Link>
            <Link href="#" color="white">Products</Link>
            <Link href="#" color="white">About Us</Link>
            <Link href="#" color="white">Contact Us</Link>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={10}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="start" spacing={4}>
              <Heading size="2xl">Featured Product</Heading>
              <Text fontSize="lg">Check out our latest and greatest electronic gadgets!</Text>
              <Button colorScheme="blue">Shop Now</Button>
            </VStack>
            <Image src="https://via.placeholder.com/400" alt="Featured Product" boxSize="400px" objectFit="cover" />
          </Flex>
        </Container>
      </Box>

      {/* Product Grid */}
      <Box as="section" py={10}>
        <Container maxW="container.lg">
          <Heading size="lg" mb={6}>Our Products</Heading>
          <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={6}>
            {Array.from({ length: 6 }).map((_, index) => (
              <GridItem key={index} bg="white" shadow="md" borderRadius="md" overflow="hidden">
                <Image src="https://via.placeholder.com/300" alt={`Product ${index + 1}`} />
                <Box p={4}>
                  <Text fontWeight="bold">Product {index + 1}</Text>
                  <Text>$99.99</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={6}>
        <Container maxW="container.lg">
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
            <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
            <Flex gap={4}>
              <Link href="#" color="white"><FaFacebook /></Link>
              <Link href="#" color="white"><FaTwitter /></Link>
              <Link href="#" color="white"><FaInstagram /></Link>
            </Flex>
            <Flex gap={4}>
              <Link href="#" color="white">Terms of Service</Link>
              <Link href="#" color="white">Privacy Policy</Link>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;