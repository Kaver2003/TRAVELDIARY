function Input({
                   label,
                   name,
                   type = 'text',
                   value,
                   onChange,
                   error,
                   ...props
               }) {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <div className="space-y-1">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${error ? 'border-red-500' : 'border'}`}
                {...props}
            />
            {error && <p className="text-sm text-red-600">{error}</p>}
        </div>
    );
}

export default Input;