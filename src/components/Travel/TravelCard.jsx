import { Link } from 'react-router-dom';
import ImageCarousel from "../ UI/ImageCarousel";
import Rating from "../ UI/Rating";


const TravelCard = ({ travel }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <ImageCarousel images={travel.images} />

            <div className="p-4">
                <Link to={`/travel/${travel.id}`} className="hover:underline">
                    <h3 className="font-bold text-lg mb-1">{travel.title}</h3>
                </Link>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-gray-600">{travel.location}</p>
                        <p className="text-sm text-gray-500 mt-1">Автор: {travel.author}</p>
                    </div>
                    <span className="font-semibold whitespace-nowrap ml-4">
                        {travel.cost.toLocaleString()} ₽
                    </span>
                </div>

                <Rating value={travel.ratings.safety} className="mb-2" />

                <div className="flex flex-wrap gap-1">
                    {travel.heritageSites.slice(0, 2).map((site, index) => (
                        <span key={index} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {site}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TravelCard;