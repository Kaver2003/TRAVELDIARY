function Rating ({ value, max = 5, className = '' }) {
    return (
        <div className={`flex items-center ${className}`}>
            {[...Array(max)].map((_, i) => (
                <span
                    key={i}
                    className={`text-xl ${i < value ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                    ★
                </span>
            ))}
            <span className="ml-2 text-sm text-gray-500">{value}/{max}</span>
        </div>
    );
};
export default Rating;