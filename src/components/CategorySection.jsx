
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategorySection = () => {
    // eslint-disable-next-line no-unused-vars
    const [ language, setLanguages] = useState([]);
    const navigate = useNavigate();

    // Fetch tutorials
    useEffect(() => {
        axios
            .get("http://localhost:5000/language")
            .then((response) => {
                setLanguages(response.data);
            })
            .catch((error) => {
                console.error("Error fetching tutorials:", error);
            });
    }, []);

    const categories = [
        { name: "English tutors", count: "95 teachers", icon: "🏫" },
        { name: "Spanish tutors", count: "56 teachers", icon: "🏰" },
        { name: "French tutors", count: "95 teachers", icon: "🗼" },
        { name: "German tutors", count: "63 teachers", icon: "🏛" },
        { name: "Italian tutors", count: "42 teachers", icon: "🍝" },
        { name: "Chinese tutors", count: "86 teachers", icon: "🏮" },
        { name: "Arabic tutors", count: "58 teachers", icon: "🕌" },
        { name: "Japanese tutors", count: "24 teachers", icon: "⛩️" },
        { name: "Portuguese tutors", count: "41 teachers", icon: "🏟️" },
    ];

    return (
        <section className=" py-10 w-11/12 mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                    Category Section
                </h2>
                <p className="text-center mb-5">Find tutors for various languages quickly!</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(`/find-tutors/${category.name.split(" ")[0].toLowerCase()}`)}
                            className="cursor-pointer flex items-center justify-between bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-3xl">{category.icon}</span>
                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">
                                        {category.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{category.count}</p>
                                </div>
                            </div>
                            <span className="text-gray-500 text-lg font-bold">&gt;</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;

