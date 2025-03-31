import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section
            className="text-white py-20 relative overflow-hidden"
            style={{
                backgroundColor: '#2563eb',
                backgroundImage: "url('/assets/images/bg/cloud.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >

            <div className="container mx-auto px-4 text-center relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Дневник путешествий</h1>
                <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
                    Открывайте мир и сохраняйте свои воспоминания
                </p>
                <div className="flex justify-center space-x-4">
                    <Link
                        to="/explore"
                        className="sm:px-6 sm:py-3 p-3 bg-white text-blue-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                        Исследовать
                    </Link>
                    <Link
                        to="/add-travel"
                        className="sm:px-6 sm:py-3 p-3 border border-white text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                        Добавить путешествие
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-30 z-0"></div>
        </section>
    );
};

export default HeroSection;