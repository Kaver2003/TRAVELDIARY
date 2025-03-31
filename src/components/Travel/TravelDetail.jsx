import {useNavigate, useParams} from 'react-router-dom';

import {useEffect, useState} from "react";
import Button from "../ UI/Button";
import Rating from "../ UI/Rating";
import TravelActions from "./TravelActions";
import {mockTravels} from "../../data/mockTravels";


const TravelDetail = () => {
    const [mainImageIndex, setMainImageIndex] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const [travel, setTravel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isUserCreated, setIsUserCreated] = useState(false);

    useEffect(() => {
        const loadTravel = () => {

            const savedTravels = JSON.parse(localStorage.getItem('travels')) || [];
            const userTravel = savedTravels.find(t => t.id === Number(id));

            if (userTravel) {
                setTravel(userTravel);
                setIsUserCreated(true);
                setLoading(false);
                return;
            }

            const mockTravel = mockTravels.find(t => t.id === Number(id));

            if (mockTravel) {
                setTravel(mockTravel);
                setIsUserCreated(false);
            } else {
                navigate('/not-found', { replace: true });
            }
            setLoading(false);
        };

        loadTravel();
    }, [id, navigate]);

    if (loading) return <div>Загрузка...</div>;

    if (!travel) {
        return (
            <div className="text-center pt-20 py-12">
                <p className="text-gray-500 mb-4">Путешествие не найдено</p>
                <Button onClick={() => navigate('/')}>На главную</Button>
            </div>
        );
    }

    const displayedImages = travel.images.slice(0, 5);

    return (
        <div className="container pt-20 mx-auto py-8 px-4">
            <div className="flex items-baseline gap-4">
                <Button
                    onClick={() => navigate(-1)}
                    className="mb-6"
                    variant="outline"
                >
                    ← Назад к путешествиям
                </Button>

                {isUserCreated && (
                    <TravelActions
                        travelId={travel.id}
                        isAuthor={true}
                        onDelete={() => navigate('/')}
                    />
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="space-y-4">

                    <div className="rounded-lg overflow-hidden h-80">
                        <img
                            src={travel.images[mainImageIndex]}
                            alt={`${travel.title} ${mainImageIndex + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {displayedImages.length > 1 && (
                        <div className="grid grid-cols-3 gap-2">
                            {displayedImages.map((img, index) => (
                                <button
                                    key={index}
                                    onClick={() => setMainImageIndex(index)}
                                    className={`h-24 rounded-md overflow-hidden transition-all ${mainImageIndex === index ? 'ring-2 ring-blue-500' : 'opacity-80 hover:opacity-100'}`}
                                >
                                    <img
                                        src={img}
                                        alt={`${travel.title} ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    )}

                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold">{travel.title}</h1>
                    <p className="text-gray-600 text-xl">{travel.location}</p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-gray-700">{travel.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-3">Оценки</h2>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span>Транспорт:</span>
                                    <Rating value={travel.ratings.transport}/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Безопасность:</span>
                                    <Rating value={travel.ratings.safety}/>

                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Населённость:</span>
                                    <Rating value={travel.ratings.population}/>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Зелёные зоны:</span>
                                    <Rating value={travel.ratings.greenery}/>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Информация</h2>
                            <p><span className="font-medium">Стоимость:</span> {travel.cost.toLocaleString()} ₽</p>
                            <p><span className="font-medium">Автор:</span> {travel.author}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {travel.heritageSites.filter(site => site.trim() !== '').length > 0 && (
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold mb-3">Места культурного наследия</h2>
                                <ul className="list-disc pl-5 space-y-1">
                                    {travel.heritageSites
                                        .filter(site => site.trim() !== '')
                                        .map((site, index) => (
                                            <li key={index}>{site}</li>
                                        ))}
                                </ul>
                            </div>
                        )}

                        {travel.placesToVisit.filter(place => place.trim() !== '').length > 0 && (
                            <div>
                                <h2 className="text-xl font-semibold mb-3">Рекомендуемые места для посещения</h2>
                                <ul className="list-disc pl-5 space-y-1">
                                    {travel.placesToVisit
                                        .filter(place => place.trim() !== '')
                                        .map((place, index) => (
                                            <li key={index}>{place}</li>
                                        ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TravelDetail;

