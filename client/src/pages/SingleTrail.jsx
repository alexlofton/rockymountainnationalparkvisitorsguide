import { useParams } from "react-router-dom";
import dummyTrailData from '../../dummyData/dumTrails.json';
import { Container, Box } from '@chakra-ui/react'

const SingleTrail = () => {
    const { trailId } = useParams();

    // do query action to find based on trial ID

    // DUMMY DATA FUNCTION TO FIND BY ID
    const findTrailById = (trails, id) => {
        return trails.find(trail => trail._id === parseInt(id));
    };

    const trail = findTrailById(dummyTrailData, trailId)
    console.log(trail)

    return (
        <Box className="sCon">
            {trail ? (
                <div>
                    <h1 className="sTitle">{trail.name}</h1>
                    <div className="sBod">
                        <p>{trail.description}</p>
                        <img src={trail.image} alt={trail.name} />
                    </div>
                </div>
            ) : (
                <p>Trail not found</p>
            )}
        </Box>
    )
}

export default SingleTrail;