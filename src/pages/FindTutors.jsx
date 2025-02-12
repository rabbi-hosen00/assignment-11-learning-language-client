// import axios from "axios";
// import { useEffect, useState } from "react";
// import LanguageCard from "../components/LanguageCard";


// const FindTutors = () => {


//     const [languages, setLanguages] = useState([]);
//     const [setLoading] = useState(true);



//     // Fetch tutorials
//     useEffect(() => {
//         axios
//             .get("http://localhost:5000/language/all")
//             .then((response) => {
//                 setLanguages(response.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching tutorials:", error);
//                 setLoading(false);
//             });
//     }, []);



//     return (
//         <div className="mt-28 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4 gap-6 ">


//             {
//                 languages.map((lang, idx) => <LanguageCard key={idx} lang={lang}></LanguageCard>)
//             }

//         </div>
//     );
// };

// export default FindTutors;




import axios from "axios";
import { useEffect, useState } from "react";
import LanguageCard from "../components/LanguageCard";

const FindTutors = () => {
    const [languages, setLanguages] = useState([]);
    const [filteredLanguages, setFilteredLanguages] = useState([]); // For search filtering
    const [searchText, setSearchText] = useState(""); // Search input value
    const [loading, setLoading] = useState(true);

    // Fetch all tutors
    useEffect(() => {
        axios
            .get("http://localhost:5000/language")
            .then((response) => {
                setLanguages(response.data);
                setFilteredLanguages(response.data); // Initialize filteredLanguages
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching tutorials:", error);
                setLoading(false);
            });
    }, []);

    // Filter tutors based on the search text
    useEffect(() => {
        const filtered = languages.filter((lang) =>
            lang.language.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredLanguages(filtered);
    }, [searchText, languages]);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="mt-24 w-11/12 mx-auto">
            {/* Search Bar */}
            <div className="mb-6 flex items-center justify-center">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search by language..."
                    className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
            </div>

            {/* Display Filtered Tutors */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLanguages.length > 0 ? (
                    filteredLanguages.map((lang, idx) => (
                        <LanguageCard key={idx} lang={lang}></LanguageCard>
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-600">
                        No tutors found for the search term {searchText}.
                    </p>
                )}
            </div>
        </div>
    );
};

export default FindTutors;
