import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import WildlifeComponent from '../components/Wildlife/WildlifeComponent';

function WildlifePage() {
  const [wildlifeList, setWildlifeList] = useState([
    {
      id: 1,
      name: 'Black Bear',
      imageSrc: './client/src/assets/animals/bear.jpg',
      description: 'In the majestic landscape of Rocky Mountain National Park, the black bear roams as a symbol of wilderness and resilience.  Its keen senses and powerful physique enable it to navigate the rugged slopes and dense forests with ease.',
      seen: false
    },
    {
      id: 2,
      name: 'Moose',
      imageSrc: './client/src/assets/animals/moose.jpg',
      description: 'Towering above the landscape with its massive frame and impressive antlers, the moose commands attention and respect. Often found grazing in meadows or wading through mountain lakes and streams, this magnificent creature is perfectly adapted to its natural habitat.',
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
      <Heading size="xl" alignText="center>">Welcome to the Wildlife Page!</Heading>
      {wildlifeList.map(wildlife => (
        <WildlifeComponent
          key={wildlife.id}
          name={wildlife.name}
          scientificname={wildlife.scientificname}
          imageSrc={wildlife.imageSrc}
          description={wildlife.description}
          seen={wildlife.seen}
          onCheckboxChange={() => handleCheckboxChange(wildlife.id)}
        />
      ))}
    </Box>
  );
}

export default WildlifePage;

