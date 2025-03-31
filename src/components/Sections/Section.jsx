import React from 'react';

function Section  ({ title, children, className = '' }) {
    return (
        <section className={`${className}`}>
            <h2 className="text-2xl font-bold mdm-7 m-3 text-center">{title}</h2>
            {children}
        </section>
    );
};

export default Section;