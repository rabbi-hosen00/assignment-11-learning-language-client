

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const FindTutor = () => {
//     const { category } = useParams(); // Get the category from URL
//     const [tutors, setTutors] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios
//             .get(`https://assignment-11-larning-language-server.vercel.app/language?category=${category}`)
//             .then((response) => {
//                 setTutors(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching tutors:", error);
//                 setLoading(false);
//             });
//     }, [category]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="mt-10 container mx-auto px-4">
//             <h2 className="text-2xl font-bold mb-6 capitalize">
//                 Tutors for {category}
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {tutors.map((tutor) => (
//                     <div
//                         key={tutor.id}
//                         className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
//                     >
//                         <img
//                             src={tutor.image}
//                             alt={tutor.name}
//                             className="w-full h-40 object-cover rounded-t-lg mb-4"
//                         />
//                         <h3 className="text-lg font-bold">{tutor.name}</h3>
//                         <p className="text-gray-500 text-sm">
//                             Languages: {tutor.languages.join(", ")}
//                         </p>
//                         <p className="text-gray-600 text-sm">Price: BDT {tutor.price}</p>
//                         <p className="text-gray-500 text-sm">
//                             Rating: {tutor.rating} ({tutor.reviews} reviews)
//                         </p>
//                         <p className="text-gray-700 mt-2">{tutor.description}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default FindTutor;


import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FindTutor = () => {
    const { category } = useParams(); // Get the category from the URL
    const [tutors, setTutors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch tutors by category
        axios
            .get(`https://assignment-11-larning-language-server.vercel.app/language?category=${category}`)
            .then((response) => {
                setTutors(response.data); // Update state with the fetched data
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error("Error fetching tutors:", error);
                setLoading(false); // Set loading to false even if there's an error
            });
    }, [category]);

    if (loading) {
        return <div>Loading...</div>; // Show loading spinner or text while fetching data
    }

    return (
        <div className="mt-24 w-11/12   mx-auto px-4 mb-4">
            <h2 className="text-2xl font-bold mb-6 capitalize">
                Tutors for {category}
            </h2>
            {tutors.length === 0 ? (
                <p>No tutors found for {category}.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutors.map((tutor) => (
                        <div
                            key={tutor._id}
                            className="border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                            <img
                                src={tutor.image}
                                alt={tutor.userName}
                                className="w-full h-40 object-cover rounded-t-lg mb-4"
                            />
                            <h3 className="text-lg font-bold">{tutor.userName}</h3>
                            <p className="text-gray-500 text-sm">
                                Languages: {tutor.language}
                            </p>
                            <p className="text-gray-600 text-sm">
                                Price: BDT {tutor.price}
                            </p>
                            <p className="text-gray-700 mt-2">{tutor.userEmail}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FindTutor;
