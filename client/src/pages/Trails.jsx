import { useQuery } from "@apollo/client";
import { ALL_TRAILS, QUERY_ME } from "../utils/queries";
import TrailList from "../components/TrailList";

// DELETE ONCE BACK END CONNECTED TO FRONT END
import dummyTrailData from "../../dummyData/dumTrails.json";

const Trails = () => {
  const trails = useQuery(ALL_TRAILS);
  const user = useQuery(QUERY_ME);

  if (trails.loading) return <div>Loading...</div>;
  const trailData = trails.data?.allTrails || {};
  const userData = user.data?.me || {};

  return (
    <div className="w100">
      {/* <input type="text" /> */}
      <TrailList key={1} trails={trailData} user={userData} />
    </div>
  );
};

export default Trails;