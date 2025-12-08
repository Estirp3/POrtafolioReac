import React from 'react';

const BentoItem = ({ children, className = "", title, span = "col-span-1" }) => {
    return (
        <div className={`bento-card ${span} ${className} group relative overflow-hidden`}>
            {title && (
                <h3 className="text-lg font-semibold text-slate-100 mb-4 z-10 relative">
                    {title}
                </h3>
            )}
            <div className="relative z-10 h-full">
                {children}
            </div>
            {/* Subtle background gradient effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

export default BentoItem;
