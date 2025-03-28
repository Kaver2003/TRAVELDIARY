import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection ()  {
    return (
        <section className="bg-blue-600 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Дневник путешествий</h1>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Сохраняйте свои воспоминания и вдохновляйтесь путешествиями других
                </p>
                <div className="space-x-4">
                    <Link
                        to="/register"
                        className="inline-block px-6 py-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100"
                    >
                        Начать сейчас
                    </Link>
                    <Link
                        to="/explore"
                        className="inline-block px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-blue-700"
                    >
                        Исследовать
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;