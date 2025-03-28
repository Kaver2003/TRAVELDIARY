import React, { useState, useEffect } from 'react';
import HeroSection from '../components/Sections/HeroSection';
import WelcomeBack from '../components/Sections/WelcomeBack';
import Section from '../components/Sections/Section';
import TravelList from '../components/Travel/TravelList';
import { useAuth } from '../context/AuthContext';
import { fetchUserTravels } from '../services/travel';

const Home = () => {
    const { user } = useAuth();
    const [featuredTravels, setFeaturedTravels] = useState([]);

    useEffect(() => {
        fetchUserTravels().then(setFeaturedTravels);
    }, []);

    return (
        <div>
            <HeroSection />
            {user && <WelcomeBack user={user} />}
            <Section title="Популярные путешествия">
                <TravelList travels={featuredTravels} />
            </Section>
        </div>
    );
};

export default Home;