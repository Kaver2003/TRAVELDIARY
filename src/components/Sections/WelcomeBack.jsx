import React from 'react';

function WelcomeBack ({ user }){
    return (
        <section className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-2">С возвращением, {user.username}!</h2>
            <p className="text-gray-600">Готовы записать новое путешествие?</p>
        </section>
    );
};

export default WelcomeBack;