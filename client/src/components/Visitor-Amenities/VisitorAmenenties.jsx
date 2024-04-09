import React from 'react';
import { Box, Heading, Text, Link, UnorderedList, ListItem, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import "../../App.css";

function VisitorsAmenities() {
    return (
        <Box className="vis-amn-styles">
           <Box maxW="100%" alignItems="center">
                <Card mb={8}
                      bgImage={`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0)), url('https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?cs=srgb&dl=pexels-xue-guangjian-1687845.jpg&fm=jpg')`}
                      bgSize="cover"
                      bgPosition="center"
                      borderRadius="md" 
                      boxShadow="md" 
                >
                    <CardHeader>
                        <Heading size="lg" color="white" as='u'>Camping</Heading>
                    </CardHeader>
                    <CardBody className="camping-card-body">
                        <Text mt={2} color="white">Rocky Mountain National Park offers various camping options, including:</Text>
                        <UnorderedList mt={2} color="white">
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

            <Card mb={8}
                      bgImage={`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0)), url('https://www.nps.gov/common/uploads/structured_data/1A040051-E81A-FA40-C7A5F1E24F6E78D0.jpg')`}
                      bgSize="cover"
                      bgPosition="center"
                      borderRadius="md" 
                      boxShadow="md" 
                >
                    <CardHeader>
                        <Heading size="lg" color="white" as='u'>Visitor Centers</Heading>
                    </CardHeader>
                    <CardBody className="visitors-card-body">
                        <Text mt={2} color="white">Rocky Mountain National Park offers various visitor center options, including:</Text>
                        <UnorderedList mt={2} color="white">
                            <ListItem>Beaver Meadows Visitor Center</ListItem>
                            <ListItem>Alpine Visitor Center</ListItem>
                            <ListItem>Lawuneeche Visitor Center</ListItem>
                            <ListItem>Fall River Visitor Center</ListItem>
                        </UnorderedList>
                        <Text mt={2} color="white">For more information, visit the <Link href="https://www.nps.gov/romo/planyourvisit/visitorcenters.htm" isExternal>National Park Service website</Link>.</Text>
                    </CardBody>
                </Card>
           
                <Card mb={8}
                      bgImage={`linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.0)), url('https://www.jellystoneofestes.com/wp-content/uploads/2016/12/rockymountain.jpg')`}
                      bgSize="cover"
                      bgPosition="center"
                      borderRadius="md" 
                      boxShadow="md" 
                >
                    <CardHeader>
                        <Heading size="lg" color="white" as='u'>Fees & Passes</Heading>
                    </CardHeader>
                    <CardBody className="fees-card-body">
                        <Text mt={2} color="white">A valid entrance fee or park pass is always required to enter Rocky Mountain National Park, 24 hours a day, 7 days a week.</Text>
                        <UnorderedList mt={2} color="white">
                            <ListItem>1 Day Private Vehicle - $30</ListItem>
                            <ListItem>7 Day Private Vehicle - $35</ListItem>
                            <ListItem>1 Day Per Person (Walk In) - $15</ListItem>
                            <ListItem>1 Day Motorcycle - $30</ListItem>
                            <ListItem>7 Day Motorcycle - $35</ListItem>
                        </UnorderedList>
                        <Text mt={2} color="white">For more information, visit the <Link href="https://www.nps.gov/romo/planyourvisit/fees.htm" isExternal>National Park Service website</Link>.</Text>
                    </CardBody>
                </Card>
           
            </Box>
        </Box>
    );
}

export default VisitorsAmenities;
