// src/components/InfoCard.jsx
import React from 'react';

const InfoCard = ({ title, content, gradient }) => {
    return (
        <div className={`text-white rounded-[60px] shadow-xl p-12 ${gradient}`}>
            <h3 className="font-bold text-4xl mb-2 underline">{title}</h3>
            <p className="text-2xl">{content}</p>
        </div>
    );
};

export default InfoCard;
