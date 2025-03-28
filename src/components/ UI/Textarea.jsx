import React from 'react';

function Textarea({ label,
                      name,
                      value,
                      onChange,
                      rows = 4,
                      className = '',
                      ...props }) {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                rows={rows}
                value={value}
                onChange={onChange}
                className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border ${className}`}
                {...props}
            />
        </div>
    );
}

export default Textarea;