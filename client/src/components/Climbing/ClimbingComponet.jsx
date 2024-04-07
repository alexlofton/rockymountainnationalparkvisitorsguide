import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Image, Text, Checkbox, Center } from '@chakra-ui/react';

function ClimbingComponent({ name, description, location, trail }) {
  return (
    <Center>
      <Accordion allowToggle>
        <AccordionItem border="none" mt={0} mb={0}>
          <h2>
            <AccordionButton bg="#1a472a" color="white" fontSize="15px" fontWeight="bold" px={4} py={2} borderRadius="md" _hover={{ bg: "#2F855A" }}>
              <Box flex="1" textAlign="left">
                {name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel mt={0} mb={0}>
            <Box p={4} borderWidth="0" borderRadius="lg" overflow="hidden" shadow="md" bg="#2a623d">
              <Image src={imageSrc} alt={name} borderRadius="md" />
              <Text mt={4} fontWeight="bold" fontSize="xl" color="white">{name}</Text>
              <Text mt={2} color="white">{description}</Text>
              <Text mt={2} color="white">{location}</Text>
              <Text mt={2} color="white">{trail}</Text>
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Center>
  );
}

export default ClimbingComponent;
