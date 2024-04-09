import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { ONE_TRAIL } from "../utils/queries";

// import dummyTrailData from '../../dummyData/dumTrails.json';
import { Container, Box } from '@chakra-ui/react'
import TrailComments from "../components/TrailComments";

const SingleTrail = () => {
    const { trailId } = useParams();

    // do query action to find based on trial ID
    const { loading, data } = useQuery(ONE_TRAIL, {
        variables: { trailId: trailId }
    })

    const trail = data?.oneTrail || {};

    if (loading) {
        return <div>Loading...</div>;
    }
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
                    <TrailComments comments={trail.comments} />
                    <form action=""></form>
                </div>
            ) : (
                <p>Trail not found</p>
            )}
        </Box>
    )
}

export default SingleTrail;