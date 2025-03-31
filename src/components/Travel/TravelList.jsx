import TravelCard from './TravelCard';

const TravelList = ({ travels }) => {
    if (travels.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">Путешествий пока нет</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {travels.map(travel => (
                <TravelCard key={travel.id} travel={travel} />
            ))}
        </div>
    );
};

export default TravelList;