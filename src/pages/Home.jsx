import React, {useEffect, useState} from 'react';
import HeroSection from '../components/Sections/HeroSection';

import Section from '../components/Sections/Section';
import TravelList from '../components/Travel/TravelList';

import {mockTravels} from '../data/mockTravels';

const Home = () => {
    const [travels, setTravels] = useState([]);

    useEffect(() => {
        const loadTravels = () => {
            try {
                const savedTravels = JSON.parse(localStorage.getItem('travels')) || [];
                setTravels(savedTravels.slice(-6).reverse());
            } catch (error) {
                console.error('Ошибка загрузки путешествий:', error);
                setTravels([]);
            }
        };

        loadTravels();
        window.addEventListener('storage', loadTravels);
        return () => window.removeEventListener('storage', loadTravels);
    }, []);

    return (
        <div className=" min-h-screen">
            <HeroSection/>

            {travels.length > 0 && (<div className="container mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold m-7 text-center">Последние добавленные путешествия</h1>
                <TravelList travels={travels}/>
            </div>)}
            <Section className="container mx-auto px-4 " title="Популярные путешествия других пользователей">
                <TravelList travels={mockTravels.slice(-6).reverse()} />
            </Section>


        </div>
    );
};

export default Home;