import {Link} from "react-router-dom";

const Button = ({
                    children,
                    onClick,
                    to,
                    className = '',
                    variant = 'primary',
                    ...props
                }) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
        text: 'text-blue-600 hover:bg-blue-50'
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;