import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Box,
    Grid,
    GridItem
} from '@chakra-ui/react'


const TrailList = ({ trails }) => {
    // if (blah) {
    // return <h1>No trails, sorry</h1>
    // }
    return (
        <Container>
            <Accordion>
                {trails &&
                    trails.map((trail) => (
                        <AccordionItem key={trail._id}>
                            <AccordionButton>
                                    <Grid templateColumns="repeat(2, 1fr)" w="100%">
                                        <GridItem className='trailGitem' textAlign='left'>
                                            {trail.name}
                                        </GridItem>
                                        <GridItem className='trailGitem' textAlign='right'>
                                            {trail.length}
                                        </GridItem>
                                    </Grid>
                                <AccordionIcon />
                            </AccordionButton>
                            <AccordionPanel>
                                {trail.description}
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </Container>
    )
}

export default TrailList