const Input = ({
                   label,
                   value,
                   onChange,
                   type = 'text',
                   className = '',
                   required = false,
                   ...props
               }) => {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border p-2 ${className}`}
                required={required}
                {...props}
            />
        </div>
    );
};

export default Input;