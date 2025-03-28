import {createContext, useContext, useState} from "react";

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
    const [currentTravel, setCurrentTravel] = useState(null);
    const [featuredTravels, setFeaturedTravels] = useState([]);
    const [recentTravels, setRecentTravels] = useState([]);

    const fetchTravelById = async (id) => {
        try {
            const response = await fetch(`/api/travels/${id}`);
            const data = await response.json();
            setCurrentTravel(data);
            return data;
        } catch (error) {
            console.error('Failed to fetch travel:', error);
            throw error;
        }
    };

    const createTravel = async (travelData) => {
        // Логика создания нового путешествия
    };

    const searchTravels = async (filters = {}) => {
        // Логика поиска с фильтрами
    };

    return (
        <TravelContext.Provider value={{
            currentTravel,
            featuredTravels,
            recentTravels,
            fetchTravelById,
            createTravel,
            searchTravels
        }}>
            {children}
        </TravelContext.Provider>
    );
};

export const useTravel = () => useContext(TravelContext);