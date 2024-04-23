// Complete the Index page component for "United By Racing" website
import { Box, Flex, Text, Button, Image, VStack, HStack, Link, Input, Textarea, useToast } from "@chakra-ui/react";
import { FaUserAlt, FaEnvelope, FaPhone, FaInstagram, FaFacebookF, FaTwitter, FaCar } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast({
      title: "Contact Request Sent",
      description: "We will get back to you shortly!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box bg="brand.700">
      <Flex direction="column" align="center" m={4}>
        <Image src="https://images.unsplash.com/photo-1473322780082-eca592c43a0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB0ZWFtJTIwbG9nb3xlbnwwfHx8fDE3MTM5MDQxNDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="United By Racing Logo" boxSize="150px" />
        <Text fontSize="4xl" fontWeight="bold" mt={2}>
          United By Racing
        </Text>
        <Text fontSize="xl" color="gray.600">
          Speed, Strategy, Success
        </Text>
        <Text fontSize="md" mt={4} p={4} textAlign="center">
          United By Racing is dedicated to showcasing top-tier racing performance and strategy. Our team is composed of seasoned professionals who excel in their respective roles, ensuring that every race is a step towards victory.
        </Text>
      </Flex>

      <VStack spacing={8} p={8}>
        <Flex justify="space-around" w="full">
          <TeamMemberCard name="John Doe" role="Lead Driver" image="https://images.unsplash.com/photo-1570980426553-301665047186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBkcml2ZXJ8ZW58MHx8fHwxNzEzOTA0MTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <TeamMemberCard name="Jane Smith" role="Engineer" image="https://images.unsplash.com/photo-1642767226927-0f08d21d0c63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBlbmdpbmVlcnxlbnwwfHx8fDE3MTM5MDQxNDl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <TeamMemberCard name="Mike Ross" role="Tactics Manager" image="https://images.unsplash.com/photo-1469564810962-ff989827328e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB0YWN0aWNzJTIwbWFuYWdlcnxlbnwwfHx8fDE3MTM5MDQxNDl8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Flex>

        <Flex direction="column" align="center">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Contact Us
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <Input placeholder="Your Name" icon={<FaUserAlt />} required />
              <Input placeholder="Email Address" type="email" icon={<FaEnvelope />} required />
              <Input placeholder="Phone Number" type="tel" icon={<FaPhone />} required />
              <Textarea placeholder="Your Message" required />
              <Button type="submit" colorScheme="blue" leftIcon={<FaEnvelope />}>
                Send Message
              </Button>
            </VStack>
          </form>
        </Flex>
      </VStack>

      <Flex justify="center" p={4}>
        <Link href="https://instagram.com" isExternal>
          <FaInstagram size="2em" />
        </Link>
        <Link href="https://facebook.com" isExternal ml={4}>
          <FaFacebookF size="2em" />
        </Link>
        <Link href="https://twitter.com" isExternal ml={4}>
          <FaTwitter size="2em" />
        </Link>
      </Flex>
    </Box>
  );
};

const TeamMemberCard = ({ name, role, image }) => (
  <VStack bg="gray.100" p={4} borderRadius="lg" boxShadow="md">
    <Image src={image} alt={name} boxSize="100px" borderRadius="full" />
    <Text fontWeight="bold">{name}</Text>
    <Text fontSize="sm" color="gray.500">
      {role}
    </Text>
    <Button leftIcon={<FaCar />} colorScheme="teal">
      View Profile
    </Button>
  </VStack>
);

export default Index;
