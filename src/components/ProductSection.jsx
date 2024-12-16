


import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import SingleSportSection from "./SingleSportSection";

const ProductSection = () => {
    const allEquipment = useLoaderData();
    const [sortedEquipment, setSortedEquipment] = useState(allEquipment);

    // Sort by ascending price
    const handleSortAscending = () => {
        const sorted = [...sortedEquipment].sort((a, b) => a.price - b.price);
        setSortedEquipment(sorted);
    };

    return (
        <div className="col-span-9 ">
           <div className="flex justify-around gap-4">
            <div>
                <h2 className="font-extrabold text-5xl text-orange-600 ">sports section</h2>
            </div>
           <div className="flex justify-end mb-4">
                <button
                    onClick={handleSortAscending}
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                >
                    Sort by Price 
                </button>
            </div>
           </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
                {sortedEquipment.map((equipment) => (
                    <SingleSportSection key={equipment._id} equipment={equipment} />
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
