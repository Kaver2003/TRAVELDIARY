import {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Проверка токена при загрузке
        const token = localStorage.getItem('token');
        if (token) {
            // Запрос за данными пользователя
        } else {
            setLoading(false);
        }
    }, []);

    const login = async (email, password) => {
        // Логика входа
    };

    const register = async (email, password, username) => {
        // Логика регистрации
    };

    const logout = () => {
        // Логика выхода
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);