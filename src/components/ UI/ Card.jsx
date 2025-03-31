function Card({children, className = '', ...props}) {
    return (
        <div
            className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

Card.Header = ({children, className}) => (
    <div className={`px-6 py-4 border-b ${className}`}>
        {children}
    </div>
);

Card.Body = ({children, className}) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);

Card.Footer = ({children, className}) => (
    <div className={`px-6 py-4 bg-gray-50 ${className}`}>
        {children}
    </div>
);

export default Card;