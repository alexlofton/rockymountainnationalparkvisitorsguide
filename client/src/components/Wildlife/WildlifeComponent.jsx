import React from 'react';
import { Box, Image, Text, Checkbox } from '@chakra-ui/react';

function WildlifeComponent({ name, imageSrc, scientificName, season, description, seen, onCheckboxChange }) {
  return (
    <Box p={4}>
      <Image src={imageSrc} alt={name} />
      <Text mt={2} fontWeight="bold">{name}</Text>
      <Text mt={2} fontStyle="italic">{scientificName}</Text>
      <Text mt={2} fontWeight="bold">{season}</Text>
      <Text mt={2}>{description}</Text>
      <Checkbox mt={2} isChecked={seen} onChange={onCheckboxChange}>
        Seen
      </Checkbox>
    </Box>
  );
}

export default WildlifeComponent;
