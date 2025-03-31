import Button from "../ UI/Button";

const TravelActions = ({ travelId, isAuthor, onDelete }) => {
    const handleDelete = () => {
        if (window.confirm('Удалить это путешествие?')) {
            const travels = JSON.parse(localStorage.getItem('travels')) || [];
            const updatedTravels = travels.filter(t => t.id !== travelId);
            localStorage.setItem('travels', JSON.stringify(updatedTravels));
            onDelete?.();
        }
    };

    if (!isAuthor) return null;

    return (
        <div className="mt-4">
            <Button
                variant="outline"
                size="sm"
                className="text-red-500 border-red-300"
                onClick={handleDelete}
            >
                Удалить
            </Button>
        </div>
    );
};

export default TravelActions;