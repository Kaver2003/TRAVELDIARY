import TravelList from "../components/Travel/TravelList";
import {useEffect, useState} from "react";
import Input from "../components/ UI/Input";
import {searchTravels} from "../services/travel";
import Spinner from "../components/ UI/Spinner";

function Explore  ()  {
    const [travels, setTravels] = useState([]);
    const [filters, setFilters] = useState({
        search: '',
        country: '',
        minCost: '',
        maxCost: ''
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchTravels = async () => {
            setLoading(true);
            try {
                const result = await searchTravels(filters);
                setTravels(result);
            } finally {
                setLoading(false);
            }
        };

        const debounceFetch = setTimeout(fetchTravels, 500);
        return () => clearTimeout(debounceFetch);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-8">Исследовать путешествия</h1>

            {/* Фильтры */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Input
                        name="search"
                        placeholder="Поиск по названию"
                        value={filters.search}
                        onChange={handleFilterChange}
                    />
                    <Input
                        name="country"
                        placeholder="Страна"
                        value={filters.country}
                        onChange={handleFilterChange}
                    />
                    <Input
                        name="minCost"
                        type="number"
                        placeholder="Мин. стоимость"
                        value={filters.minCost}
                        onChange={handleFilterChange}
                    />
                    <Input
                        name="maxCost"
                        type="number"
                        placeholder="Макс. стоимость"
                        value={filters.maxCost}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            {/* Результаты */}
            {loading ? (
                <div className="flex justify-center py-12">
                    <Spinner size="lg" />
                </div>
            ) : travels.length > 0 ? (
                <TravelList travels={travels} />
            ) : (
                <div className="text-center py-12">
                    <p className="text-gray-500">Путешествий не найдено</p>
                    <p className="text-gray-400 text-sm mt-2">Попробуйте изменить параметры поиска</p>
                </div>
            )}
        </div>
    );
};
export default Explore