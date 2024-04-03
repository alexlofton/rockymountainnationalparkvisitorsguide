import React from 'react';
import { Box, Heading, Text, Link } from '@chakra-ui/react';

function VisitorsAmenities() {
    return (
        <Box p={4}>
            <Heading size="xl">Visitor Amenities</Heading>

            <Box mt={4}>
                <Heading size="lg">Camping</Heading>
                <Text mt={2}>Rocky Mountain National Park offers various camping options, including:</Text>
                <ul>
                    <li>Aspenglen Campground</li>
                    <li>Glacier Basin Campground</li>
                    <li>Longs Peak Campground</li>
                    {/* Add more camping options as needed */}
                </ul>
                <Text mt={2}>For more information and reservations, visit the <Link href="https://www.recreation.gov/camping/campgrounds/232448" isExternal>National Park Service website</Link>.</Text>
            </Box>

            <Box mt={8}>
                <Heading size="lg">Visitor Centers</Heading>
                <Text mt={2}>Rocky Mountain National Park has several visitor centers located throughout the park:</Text>
                <ul>
                    <li>Beaver Meadows Visitor Center</li>
                    <li>Alpine Visitor Center</li>
                    <li>... (add more visitor centers)</li>
                </ul>
                <Text mt={2}>Each visitor center offers exhibits, information, and ranger programs.</Text>
            </Box>

            <Box mt={8}>
                <Heading size="lg">Trailheads</Heading>
                <Text mt={2}>Explore Rocky Mountain National Park's trails from various trailheads:</Text>
                <ul>
                    <li>Bear Lake Trailhead</li>
                    <li>Emerald Lake Trailhead</li>
                    <li>... (add more trailheads)</li>
                </ul>
                <Text mt={2}>Each trailhead provides access to different hiking trails with varying difficulty levels and scenic views.</Text>
            </Box>
        </Box>
    );
}

export default VisitorsAmenities;
