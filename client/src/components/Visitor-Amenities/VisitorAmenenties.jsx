import React from 'react';
import { Box, Heading, Text, Link, UnorderedList, ListItem, Center, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';

function VisitorsAmenities() {
    return (
        <Center>
            <Box maxW="xl">
                <Card mb={8}
                      bgImage={`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0)), url('https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?cs=srgb&dl=pexels-xue-guangjian-1687845.jpg&fm=jpg')`}
                      bgSize="cover"
                      bgPosition="center"
                      borderRadius="md" 
                      boxShadow="md" 
                >
                    <CardHeader>
                        <Heading size="lg" color="white">Camping</Heading>
                    </CardHeader>
                    <CardBody className="camping-card-body">
                        <Text mt={2} color="white">Rocky Mountain National Park offers various camping options, including:</Text>
                        <UnorderedList mt={2} listStyleType="none" color="white">
                            <ListItem>Aspenglen Campground</ListItem>
                            <ListItem>Glacier Basin Campground</ListItem>
                            <ListItem>Longs Peak Campground</ListItem>
                            <ListItem> Timber Creek Campground</ListItem>
                        </UnorderedList>
                        <Text color="white">Fees are $30/night in winter and $35/night in summer. </Text>
                        <Text mt={2} color="white">For more information and reservations, visit the <Link href="https://www.recreation.gov/camping/campgrounds/232448" isExternal>National Park Service website</Link>.</Text>
                    </CardBody>
                </Card>

                {/* 
         basic camping card is done, work on styling other cards - visitor centers, fees and passes, internet  */}
            </Box>
        </Center>
    );
}

export default VisitorsAmenities;
