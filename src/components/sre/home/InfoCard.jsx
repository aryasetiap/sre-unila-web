import React from 'react';

const InfoCard = ({ title, content, gradient }) => {
    return (
        <div className={`text-white rounded-3xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 ${gradient}`}>
            <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-2 underline">{title}</h3>
            <p className="text-lg sm:text-xl md:text-2xl">{content}</p>
        </div>
    );
};

export default InfoCard;
