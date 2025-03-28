import React from 'react';
import {useAuth} from "../../context/AuthContext";
import {Link} from "react-router-dom";

function Navbar(props) {
    const {user, logout} = useAuth();

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">TravelDiary</Link>
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <Link to="/profile" className="hover:text-blue-600">Профиль</Link>
                            <button onClick={logout} className="hover:text-blue-600">Выйти</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hover:text-blue-600">Вход</Link>
                            <Link to="/register" className="hover:text-blue-600">Регистрация</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )


}

export default Navbar;