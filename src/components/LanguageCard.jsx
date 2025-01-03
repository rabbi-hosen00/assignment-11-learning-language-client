import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const LanguageCard = ({ lang }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, image, description, language, userName } = lang;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4">
            {/* Tutor Image */}
            <div className="w-36 h-40">
                <img src={image} alt={userName} className="w-full h-full object-cover rounded-md" />
            </div>

            {/* Tutor Details */}
            <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">{userName}</h2>
                <p className="text-xl text-gray-600">Language: {language}</p>
                <p className="text-sm text-gray-500 mt-2">{description}</p>
                <Link to={`/details/${_id}`}>
                    <button className="mt-4 ml-5 px-20 bg-pink-500 text-white  py-2 rounded hover:bg-pink-600 transition">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default LanguageCard;






