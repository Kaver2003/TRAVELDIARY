import { createContext, useState, useContext } from 'react';
import { mockTravels } from '../data/mockTravels';

const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
    const [travels, setTravels] = useState(mockTravels);

    const addTravel = (newTravel) => {
        setTravels([...travels, { ...newTravel, id: Date.now() }]);
    };

    return (
        <TravelContext.Provider value={{ travels, addTravel }}>
            {children}
        </TravelContext.Provider>
    );
};

export const useTravel = () => {
    const context = useContext(TravelContext);
    if (context === undefined) {
        throw new Error('useTravel must be used within a TravelProvider');
    }
    return context;
};