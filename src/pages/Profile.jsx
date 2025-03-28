import {useAuth} from "../context/AuthContext";
import {useEffect, useState} from "react";
import {Link, Navigate} from "react-router-dom";

import TravelList from "../components/Travel/TravelList";
import Button from "../components/ UI/Button";
import {fetchUserTravels} from "../services/travel";

function Profile  ()  {
    const {user, logout} = useAuth();
    const [userTravels, setUserTravels] = useState([]);
    const [activeTab, setActiveTab] = useState('travels');

    useEffect(() => {
        if (user) {
            // Загрузка путешествий пользователя
            fetchUserTravels(user.id).then(setUserTravels);
        }
    }, [user]);

    if (!user) return <Navigate to="/login"/>;

    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Сайдбар профиля */}
                <div className="md:w-1/4">
                    <div className="bg-white rounded-lg shadow p-6 sticky top-4">
                        <div className="flex flex-col items-center mb-6">
                            <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                                {user.avatar ? (
                                    <img src={user.avatar} alt={user.username}/>
                                ) : (
                                    <span className="flex items-center justify-center h-full text-2xl">
                    {user.username.charAt(0).toUpperCase()}
                  </span>
                                )}
                            </div>
                            <h2 className="text-xl font-bold">{user.username}</h2>
                            <p className="text-gray-500">{user.email}</p>
                        </div>

                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab('travels')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'travels' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                            >
                                Мои путешествия
                            </button>
                            <button
                                onClick={() => setActiveTab('favorites')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'favorites' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                            >
                                Избранное
                            </button>
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`w-full text-left px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
                            >
                                Настройки
                            </button>
                        </nav>

                        <Button
                            onClick={logout}
                            variant="outline"
                            className="w-full mt-6"
                        >
                            Выйти
                        </Button>
                    </div>
                </div>

                {/* Основное содержимое */}
                <div className="md:w-3/4">
                    {activeTab === 'travels' && (
                        <>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold">Мои путешествия</h3>
                                <Link to="/add-travel">
                                    <Button>Добавить путешествие</Button>
                                </Link>
                            </div>
                            {userTravels.length > 0 ? (
                                <TravelList travels={userTravels}/>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 mb-4">У вас пока нет путешествий</p>
                                    <Link to="/add-travel">
                                        <Button>Создать первое путешествие</Button>
                                    </Link>
                                </div>
                            )}
                        </>
                    )}

                    {activeTab === 'favorites' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Избранное</h3>
                            {/* Компонент с избранными путешествиями */}
                        </div>
                    )}

                    {activeTab === 'settings' && (
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Настройки профиля</h3>
                            {/* Форма редактирования профиля */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Profile