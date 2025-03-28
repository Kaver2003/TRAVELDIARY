import React from 'react';

function Section  ({ title, children, className = '' }) {
    return (
        <section className={`mb-12 ${className}`}>
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            {children}
        </section>
    );
};

export default Section;