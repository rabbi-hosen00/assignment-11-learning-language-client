
// {
//     "_id": "675c5c59157593d06f6353df",
//     "image": "rabbi",
//     "name": "2",
//     "categoryName": "3",
//     "description": "4",
//     "price": "5",
//     "rating": "6",
//     "customization": "7",
//     "time": "22:11",
//     "stockStatus": "9",
//     "userName": "rabbi hosen",
//     "userEmail": "rabbihosen01581@gmail.com"
// },

import { useLoaderData } from "react-router-dom";
import SingleSportSection from "./SingleSportSection";

const ProductSection = () => {

    const allEquipment = useLoaderData()


    return (
        <div className="col-span-9 border-2 border-green-500 p-4 rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                {
                    allEquipment.map((equipment) => <SingleSportSection key={equipment._id} equipment={equipment}></SingleSportSection>)
                }
            </div>
        </div>
    );
};

export default ProductSection;