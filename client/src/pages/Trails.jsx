import { useQuery } from "@apollo/client";

import TrailList from '../components/TrailList'

// DELETE ONCE BACK END CONNECTED TO FRONT END
import dummyTrailData from '../../dummyData/dumTrails.json';
// query allTrails here then map with props into SingleTrail card

const Trails = () => {
    console.log(dummyTrailData)
    return (
        <div className="w100">
            {/* <input type="text" /> */}
            <TrailList key={1} trails={dummyTrailData}/>
        </div>
    )
};

export default Trails;
