function TravelCard  ({ travel, onClick })  {
    return (
        <div
            onClick={onClick}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
            <img
                src={travel.images[0] || '/placeholder.jpg'}
                alt={travel.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg">{travel.title}</h3>
                <p className="text-gray-600">{travel.location}</p>
                <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-500">
            {new Date(travel.startDate).toLocaleDateString()} - {new Date(travel.endDate).toLocaleDateString()}
          </span>
                    <span className="font-semibold">{travel.cost} ₽</span>
                </div>
            </div>
        </div>
    );
};

export default TravelCard;