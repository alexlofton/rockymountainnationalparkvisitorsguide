import { useQuery } from "@apollo/client";
import { ALL_TRAILS, QUERY_ME } from "../utils/queries";
import TrailList from '../components/TrailList'

// DELETE ONCE BACK END CONNECTED TO FRONT END
import dummyTrailData from '../../dummyData/dumTrails.json';

const Trails = () => {
    const {loading, data } = useQuery(ALL_TRAILS)
    console.log("data", data)
    const trailData = data?.allTrails|| {}
    console.log(trailData)

    const { loading: loadingUser, data: dataUser } = useQuery(QUERY_ME)
    const userData = dataUser?.me|| {}
    console.log(userData)
    //console.log(dummyTrailData)
    return (
        <div className="w100">
            {/* <input type="text" /> */}
            <TrailList key={1} trails={trailData}/>
        </div>
    )
};

export default Trails;
