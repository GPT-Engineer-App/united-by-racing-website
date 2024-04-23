import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

function TeamProfiles() {
  return (
    <Box bg="brand.700">
      <Text fontSize="2xl" fontWeight="bold">
        Meet Our Team
      </Text>
      <Image src="path_to_team_photo.jpg" alt="Team Photo" />
      <Text mt={4}>Description of the team...</Text>
    </Box>
  );
}

export default TeamProfiles;
