import { useQuery } from "@apollo/client";

import TrailList from '../components/TrailList'

// DELETE ONCE BACK END CONNECTED TO FRONT END
import dummyTrailData from '../../dummyData/dumTrails.json';

const Trails = () => {
    console.log(dummyTrailData)
    return (
        <div>
            {/* <input type="text" /> */}
            <TrailList trails={dummyTrailData}/>
        </div>
    )
}

export default Trails
