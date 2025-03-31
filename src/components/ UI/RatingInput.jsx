const RatingInput = ({ label, value, onChange }) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-gray-700">{label}</span>
            <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        type="button"
                        onClick={() => onChange(star)}
                        className="text-2xl px-1 focus:outline-none"
                    >
                        {star <= value ? '★' : '☆'}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RatingInput;