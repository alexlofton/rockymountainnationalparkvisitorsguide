import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import WildlifeComponent from '../components/Wildlife';

function WildlifePage() {
  const [wildlifeList, setWildlifeList] = useState([
    {
      id: 1,
      name: 'TEST',
      scientificName: 'TEST TEST',
      imageSrc: 'TEST.jpg',
      description: 'This is only a test',
      seen: false
    },
    {
      id: 2,
      name: 'Cat',
      scientificName: 'CAT TEST',
      imageSrc: 'cat.jpg',
      description: 'Cat',
      seen: false
    },

    //Add more species or groups of species 
    
  ]);

  const handleCheckboxChange = (id) => {
    setWildlifeList(prevWildlifeList => {
      return prevWildlifeList.map(wildlife => {
        if (wildlife.id === id) {
          return { ...wildlife, seen: !wildlife.seen };
        }
        return wildlife;
      });
    });
  };

  return (
    <Box>
      <Heading size="xl">Welcome to the Wildlife Page!</Heading>
      {wildlifeList.map(wildlife => (
        <WildlifeComponent
          key={wildlife.id}
          name={wildlife.name}
          scientificName={wildlife.scientificName}
          imageSrc={wildlife.imageSrc}
          season={wildlife.season}
          description={wildlife.description}
          seen={wildlife.seen}
          onCheckboxChange={() => handleCheckboxChange(wildlife.id)}
        />
      ))}
    </Box>
  );
}

export default WildlifePage;
