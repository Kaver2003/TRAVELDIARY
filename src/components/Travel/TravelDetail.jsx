import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { useAuth } from '../../context/AuthContext';
import { useTravel } from '../../context/TravelContext';
import Spinner from "../ UI/Spinner";
import Button from "../ UI/Button";


const TravelDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { currentTravel, fetchTravelById } = useTravel();
    const [activeImage, setActiveImage] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTravel = async () => {
            try {
                setLoading(true);
                await fetchTravelById(id);
            } catch (err) {
                setError('Не удалось загрузить данные о путешествии');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadTravel();
    }, [id, fetchTravelById]);

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <Spinner size="lg" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 mb-4">{error}</p>
                <Button onClick={() => navigate(-1)}>Назад</Button>
            </div>
        );
    }

    if (!currentTravel) {
        return (
            <div className="text-center py-12">
                <p className="text-gray-500">Путешествие не найдено</p>
                <Button onClick={() => navigate('/')} className="mt-4">
                    На главную
                </Button>
            </div>
        );
    }

    // Безопасное получение координат
    const position = currentTravel.coordinates
        ? [currentTravel.coordinates.lat, currentTravel.coordinates.lng]
        : [55.7558, 37.6176]; // Координаты Москвы по умолчанию

    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Галерея изображений */}
                <div>
                    <div className="h-96 bg-gray-100 rounded-lg overflow-hidden mb-4">
                        {currentTravel.images?.length > 0 ? (
                            <img
                                src={currentTravel.images[activeImage]}
                                alt={currentTravel.title}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                Нет изображений
                            </div>
                        )}
                    </div>
                    {currentTravel.images?.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto py-2">
                            {currentTravel.images.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveImage(index)}
                                    className={`h-20 w-20 flex-shrink-0 ${activeImage === index ? 'ring-2 ring-blue-500' : ''}`}
                                >
                                    <img src={img} className="w-full h-full object-cover" alt={`Превью ${index + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Информация о путешествии */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{currentTravel.title || 'Без названия'}</h1>
                    <div className="flex items-center gap-4 mb-6">
            <span className="text-gray-500">
              {currentTravel.startDate ? new Date(currentTravel.startDate).toLocaleDateString() : 'Дата не указана'} -{' '}
                {currentTravel.endDate ? new Date(currentTravel.endDate).toLocaleDateString() : 'Дата не указана'}
            </span>
                        {user?.id === currentTravel.userId && (
                            <Button variant="outline" onClick={() => navigate(`/travel/${id}/edit`)}>
                                Редактировать
                            </Button>
                        )}
                    </div>

                    {/* Карта */}
                    <div className="h-64 mb-6 rounded-lg overflow-hidden">
                        <MapContainer center={position} zoom={13} className="h-full">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={position} />
                        </MapContainer>
                        <p className="text-sm text-gray-500 mt-1">
                            {currentTravel.location || 'Местоположение не указано'}
                        </p>
                    </div>

                    {/* Детали */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-semibold">Описание</h3>
                            <p className="text-gray-700">
                                {currentTravel.description || 'Описание отсутствует'}
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <div>
                                <h3 className="font-semibold">Стоимость</h3>
                                <p className="text-gray-700">
                                    {currentTravel.cost ? `${currentTravel.cost} ₽` : 'Не указана'}
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Автор</h3>
                                <p className="text-gray-700">
                                    {currentTravel.user?.username || 'Неизвестный автор'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TravelDetail;