
import React from 'react';

const ActivityCard = ({ imageSrc, altText, title, description }) => {
    return (
        <div className="bg-white rounded-4xl shadow-lg p-4 border-2 border-emerald-200">
            <img
                src={imageSrc}
                alt={altText}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-emerald-700 font-bold text-lg mb-2">{title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        </div>
    );
};

export default ActivityCard;
