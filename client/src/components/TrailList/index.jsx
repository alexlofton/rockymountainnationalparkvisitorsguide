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

import { Link } from 'react-router-dom'


const TrailList = ({ trails, user }) => {
    // console.log("user", user)
    // if (blah) {
    // return <h1>No trails, sorry</h1>
    // }
    // console.log(trails)
    return (
        <Container className='accCont'>
            <Accordion >
                {trails &&
                    trails.map((trail) => (
                        <AccordionItem key={trail._id} className='accItem'>
                            <AccordionButton className='accBtn'>
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
                            <AccordionPanel className='accPanel'>
                                <p>
                                    {trail.description}
                                    {trail._id}
                                </p>
                                <div className='btnDiv'>
                                    <Link
                                        className='accPanBtn'
                                        to={`/Trails/${trail._id}`}>
                                        FULL PAGE
                                    </Link>
                                </div>
                                <div className='tImgDiv'>
                                    <img src={trail.image} alt="" className='tImg'/>
                                </div>
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </Container>
    )
}

export default TrailList