import {useAuth} from "../../context/AuthContext";
import AuthForm from "./AuthForm";

function Login() {
    const { login, loading } = useAuth();

    const handleSubmit = async (data) => {
        await login(data.email, data.password);
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Вход</h2>
            <AuthForm type="login" onSubmit={handleSubmit} loading={loading} />
        </div>
    );
};
export default Login;