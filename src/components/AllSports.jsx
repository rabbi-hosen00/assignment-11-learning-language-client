


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllSports = () => {
    const [sports, setSports] = useState([]);
    console.log(sports)
    const navigate = useNavigate();

    // Fetch sports data from the server
    useEffect(() => {
        fetch("http://localhost:5000/sports")
            .then((res) => res.json())
            .then((data) => setSports(data));
    }, []);

    const handleViewDetails = (id) => {
        navigate(`/sports/${id}`);
        console.log(id)
    };

    return (
        <div className="container mt-20 mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">All Sports Equipment</h1>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr className="text-center">
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Category</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sports.map((sport) => (
                            <tr key={sport._id} className="hover:bg-gray-100 text-center">
                                <td className="border px-4 py-2">{sport.name}</td>
                                <td className="border px-4 py-2">{sport.categoryName}</td>
                                <td className="border px-4 py-2">${sport.price}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        onClick={() => handleViewDetails(sport._id)}
                                        className="btn btn-outline btn-secondary"
                                    >
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSports;



