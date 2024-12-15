

import { useLoaderData, useNavigate } from "react-router-dom";

const ViewDetails = () => {
    const sportsEquipment = useLoaderData();
    const navigate = useNavigate();

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
    } = sportsEquipment;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image Section */}
                <div className="h-60% w-60%">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover p-5"
                    />
                </div>

                {/* Details Section */}
                <div className="p-8 space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">{name}</h2>
                    <hr></hr>
                    <div className="grid grid-cols-2 gap-6 text-gray-700">
                        <p>
                            <span className="font-semibold">Category: </span>
                            {categoryName}
                        </p>

                        <p>
                            <span className="font-semibold">Price: </span>${price}
                        </p>

                        <p>
                            <span className="font-semibold">Rating: </span>⭐ {rating}
                        </p>

                        <p>
                            <span className="font-semibold">Stock Status: </span>
                            {stockStatus}
                        </p>

                        <p>
                            <span className="font-semibold">Customization: </span>
                            {customization}
                        </p>

                        <p>
                            <span className="font-semibold">Processing Time: </span>
                            {time}
                        </p>
                    </div>
                    <hr></hr>
                    <p className="text-gray-600">
                        <span className="font-semibold">Description: </span>
                        {description}
                    </p>

                    <button
                        onClick={() => navigate("/allSports")}
                        className="btn btn-accent  w-full mt-6"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
