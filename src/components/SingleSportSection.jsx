/* eslint-disable react/prop-types */


// const SingleSportSection = ({ equipment }) => {
//     const {
//         image,
//         name,
//         categoryName,
//         // description,
//         price,
//         rating,
//         // customization,
//         // time,
//         // stockStatus,
//     } = equipment;

//     return (
//         <div className="border-2 border-gray-300 p-4 rounded-lg shadow-lg">
//             <img
//                 src={image}
//                 alt={name}
//                 className="w-full h-48 object-cover rounded-md mb-4"
//             />
//             <h2 className="text-xl font-bold">{name}</h2>
//             <p className="text-gray-600">Category: {categoryName}</p>
//             {/* <p className="text-gray-700 mt-2">{description}</p> */}
//             <p className="mt-2 text-lg font-semibold">Price: ${price}</p>
//             <p className="text-gray-600">Rating: ⭐ {rating}</p>
//             {/* <p className="text-gray-600">Customization: {customization}</p>
//             <p className="text-gray-600">Processing Time: {time}</p>
//             <p className="text-gray-600">Stock Status: {stockStatus}</p> */}

//             <button className="mt-4 w-full btn btn-primary">View Details</button>
//         </div>
//     );
// };

// export default SingleSportSection;



import { useState } from "react";

const SingleSportSection = ({ equipment }) => {
    const [showModal, setShowModal] = useState(false);

    const {
        image,
        name,
        categoryName,
        description,
        price,
        rating,
        customization,
        time,
        stockStatus,
    } = equipment;

    return (
        <>
            {/* Product Card */}
            <div className="border-2 border-gray-300 p-4 rounded-lg shadow-lg">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold">{name}</h2>
                <p className="text-gray-600">Category: {categoryName}</p>
                <p className="mt-2 text-lg font-semibold">Price: ${price}</p>
                <p className="text-gray-600">Rating: ⭐ {rating}</p>
                <button
                    onClick={() => setShowModal(true)}
                    className="mt-4 w-full btn btn-primary"
                >
                    View Details
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-xl">

                        <div className="h-52">
                            <img
                            
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover rounded-md mb-4"
                        />
                        </div>
                        <h2 className="text-2xl font-bold mb-4">{name}</h2>
                        <p className="text-gray-600">Category: {categoryName}</p>
                        <p className="text-gray-700 mt-2">{description}</p>
                        <p className="text-lg font-semibold mt-2">
                            Price: ${price}
                        </p>
                        <p className="text-gray-600">Rating: ⭐ {rating}</p>
                        <p className="text-gray-600">
                            Customization: {customization}
                        </p>
                        <p className="text-gray-600">Processing Time: {time}</p>
                        <p className="text-gray-600">
                            Stock Status: {stockStatus}
                        </p>

                        <button
                            onClick={() => setShowModal(false)}
                            className="mt-6 w-full btn btn-secondary"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleSportSection;

