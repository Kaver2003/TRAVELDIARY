export const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    // Обработка ответа
};

export const register = async (email, password, username) => {
    // Аналогичная логика
};