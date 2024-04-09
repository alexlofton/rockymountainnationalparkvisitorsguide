import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react';
import WildlifeComponent from '../components/Wildlife/WildlifeComponent';
import '../App.css';


function WildlifePage() {
  const [wildlifeList, setWildlifeList] = useState([
    {
      id: 1,
      name: 'Black Bear',
      imageSrc:'/assets/animals/bear.jpg',
      description: 'In the majestic landscape of Rocky Mountain National Park, the black bear roams as a symbol of wilderness and resilience.  Its keen senses and powerful physique enable it to navigate the rugged slopes and dense forests with ease.',
    },
    {
      id: 2,
      name: 'Moose',
      imageSrc: '/assets/animals/moose.jpg',
      description: 'Towering above the landscape with its massive frame and impressive antlers, the moose commands attention and respect. Often found grazing in meadows or wading through mountain lakes and streams, this magnificent creature is perfectly adapted to its natural habitat.',
    },

    {
      id: 3,
      name: 'Bighorn Sheep',
      imageSrc: '/assets/animals/bighornsheep.jpg',
      description: "The bighorn sheep commands attention with its imposing presence and rugged beauty. With its magnificent curved horns and rugged, muscular build, this iconic creature embodies a spirit of mastery in this alpine wilderness.",
    },

    //Add more species or groups of species 
    
  ]);

  return (
    <div className="wildlife-styles">
    <Box>
      <Heading size="xl">Welcome to the Wildlife Page!</Heading>
      {wildlifeList.map(wildlife => (
        <WildlifeComponent
          key={wildlife.id}
          name={wildlife.name}
          imageSrc={wildlife.imageSrc}
          description={wildlife.description}
          seen={wildlife.seen}
          onCheckboxChange={() => handleCheckboxChange(wildlife.id)}
        />
      ))}
    </Box>
    </div>
  );
}

export default WildlifePage;

