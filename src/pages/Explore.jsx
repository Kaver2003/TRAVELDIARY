import { useState, useEffect } from 'react';
import { mockTravels } from '../data/mockTravels';
import TravelList from "../components/Travel/TravelList";

const Explore = () => {
    const [travels, setTravels] = useState([]);
    const [sortOption, setSortOption] = useState('newest');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const savedTravels = JSON.parse(localStorage.getItem('travels')) || [];
        setTravels([...savedTravels, ...mockTravels]);
    }, []);

    const calculateAverageRating = (ratings) => {
        const values = Object.values(ratings);
        return values.reduce((sum, rating) => sum + rating, 0) / values.length;
    };

    const sortedAndFilteredTravels = travels
        .map(travel => ({
            ...travel,
            averageRating: calculateAverageRating(travel.ratings)
        }))
        .filter(travel => {
            if (filter === 'all') return true;
            if (filter === 'top-rated') return travel.averageRating >= 4;
            return true;
        })
        .sort((a, b) => {
            if (sortOption === 'newest') return b.id - a.id;
            if (sortOption === 'oldest') return a.id - b.id;
            if (sortOption === 'price-low') return a.cost - b.cost;
            if (sortOption === 'price-high') return b.cost - a.cost;
            if (filter === 'all') return b.averageRating - a.averageRating;
            return 0;
        });

    return (
        <div className="container mx-auto py-8 px-4 pt-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h1 className="text-3xl font-bold mb-4 md:mb-0">Исследовать путешествия</h1>

                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="all">Все</option>
                        <option value="top-rated">Только топовые (4+★)</option>
                    </select>

                    <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="p-2 border rounded"
                    >
                        <option value="newest">Сначала новые</option>
                        <option value="oldest">Сначала старые</option>
                        <option value="price-low">Цена (по возрастанию)</option>
                        <option value="price-high">Цена (по убыванию)</option>
                    </select>
                </div>
            </div>

            <TravelList travels={sortedAndFilteredTravels} />
        </div>
    );
};
export default Explore