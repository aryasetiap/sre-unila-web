const SpeakerCard = ({ image, name, title }) => {
    return (
        <div className="bg-[#EAF4E6] rounded-3xl p-6 text-center shadow-md hover:shadow-lg transition">
            <img
                src={image}
                alt={name}
                className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-[#1D6935]">{name}</h3>
            <p className="text-sm text-gray-700 mt-1">{title}</p>
        </div>
    );
};

export default SpeakerCard;
