



import { useState, useEffect } from "react";

const SportsCategory = () => {
    const [categories, setCategories] = useState([]);

    // Fetch categories from the backend (replace with actual API endpoint)
    useEffect(() => {
        fetch("https://assignment-10-lotas-server.vercel.app/sports")
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    return (
        <div className="left col-span-3  p-4 rounded-md">
            <h2 className="text-3xl font-bold mb-4 text-orange-600">Sports Categories</h2>
            <div className="grid grid-cols-1  gap-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
                        
                    >
                        {category.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SportsCategory;
