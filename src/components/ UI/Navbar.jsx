import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-200 shadow-sm fixed w-full z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    <Link to="/" className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-blue-600">Travel</span>
              <span className="text-green-600">Diary</span>
            </span>
                    </Link>

                    <div className="hidden md:flex space-x-6">
                        <Link to="/explore" className="nav-link">Исследовать</Link>
                        <Link to="/add-travel" className="nav-link">Добавить</Link>
                    </div>

                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden py-2 space-y-2">
                        <Link
                            to="/explore"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Исследовать
                        </Link>
                        <Link
                            to="/add-travel"
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Добавить путешествие
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;