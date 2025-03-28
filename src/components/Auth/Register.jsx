import {useAuth} from "../../context/AuthContext";
import AuthForm from "./AuthForm";

function Register  ()  {
    const {register, loading} = useAuth();

    const handleSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            alert('Пароли не совпадают!');
            return;
        }
        await register(data.email, data.password, data.username);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
            <AuthForm type="register" onSubmit={handleSubmit} loading={loading}/>
        </div>
    );
};

export default Register;