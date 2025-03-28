import {useAuth} from "../context/AuthContext";
import {Navigate, useNavigate} from "react-router-dom";
import TravelForm from "../components/Travel/TravelForm";

function AddTravel  () {
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (data) => {
        try {
            // Отправка данных
            navigate('/profile');
        } catch (error) {
            alert('Ошибка при сохранении');
        }
    };

    if (!user) return <Navigate to="/login" />;

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Добавить путешествие</h1>
            <TravelForm onSubmit={handleSubmit} />
        </div>
    );
};
export default AddTravel;   