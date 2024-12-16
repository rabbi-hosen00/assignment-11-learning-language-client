

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const UserSportsEquipment = () => {
    const { user } = useContext(AuthContext);
    const [sports, setSports] = useState([]);
    const userEmail = user?.email;

    useEffect(() => {
        if (userEmail) {
            fetch(`https://assignment-10-lotas-server.vercel.app/sports/email/${userEmail}`)
                .then((res) => res.json())
                .then((data) => setSports(data))
                .catch((error) => console.error("Error fetching sports data:", error));
        }
    }, [userEmail]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-lotas-server.vercel.app/sports/${_id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            setSports(sports.filter((sport) => sport._id !== _id));
                            Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        } else {
                            Swal.fire("Error!", "Failed to delete the file.", "error");
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting sport:", error);
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            }
        });
    };

    return (
        <div className="container mt-20 mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">My Equipment List</h1>

            {sports.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sports.map((sport) => (
                        <div
                            key={sport._id}
                            className="bg-white p-4 rounded-lg shadow-lg"
                        >
                            <img
                                src={sport.image}
                                alt={sport.name}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-xl font-bold">{sport.name}</h2>
                            <p className="text-gray-600">Category: {sport.categoryName}</p>
                            <p className="mt-2 text-lg font-semibold">Price: ${sport.price}</p>
                            <p className="text-gray-600">Rating: ⭐ {sport.rating}</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                <NavLink to={`/update/${sport._id}`}>
                                    <button className="mt-4 w-full bg-lime-600 text-white p-2 rounded-lg">
                                        Update
                                    </button>
                                </NavLink>
                                <button
                                    onClick={() => handleDelete(sport._id)}
                                    className="mt-4 w-full bg-red-500 text-white p-2 rounded-lg"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-red-500 text-xl font-bold mt-6">
                    My Equipment  Not Available
                </p>
            )}
        </div>
    );
};

export default UserSportsEquipment;

