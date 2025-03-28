import TravelDetail from "./TravelDetail";
import TravelCard from "./TravelCard";
import {useNavigate} from "react-router-dom";

function TravelList  ({ travels })  {
    const navigate = useNavigate();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {travels.map(travel => (
                <TravelCard
                    key={travel.id}
                    travel={travel}
                    onClick={() => navigate(`/travel/${travel.id}`)}
                />
            ))}
        </div>
    );
};

export default TravelDetail;