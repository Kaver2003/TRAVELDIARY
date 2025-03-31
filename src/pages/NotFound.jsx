import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Страница не найдена</p>
            <Link
                to="/"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                На главную
            </Link>
        </div>
    );
};

export default NotFound;