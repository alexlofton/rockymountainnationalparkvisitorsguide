import { useQuery } from "@apollo/client";

import TrailList from '../components/TrailList'

// DELETE ONCE BACK END CONNECTED TO FRONT END
import dummyTrailData from '../../dummyData/dumTrails.json';

const Trails = () => {
    console.log(dummyTrailData)
    return (
        <div>
            {/* <input type="text" /> */}
            <TrailList key={1} trails={dummyTrailData}/>
        </div>
    )
}

export default Trails
