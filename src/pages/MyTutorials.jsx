
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// // import useAxiosSecur from "../components/useAxiosSecur";



// const MyTutorials = () => {
//   const [languages, setLanguages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // const axiosSecure = useAxiosSecur()

//   // Fetch tutorials
//   useEffect(() => {
//     axios
//       .get("https://assignment-11-larning-language-server.vercel.app/language/all",{withCredentials: true})
//       .then((response) => {
//         setLanguages(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching tutorials:", error);
//         setLoading(false);
//       });
//   }, []);

//   // Handle delete tutorial
//   const handleDelete = (id) => {
//     console.log(id)
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios
//           .delete(`https://assignment-11-larning-language-server.vercel.app/language/${id}`)
//           .then(() => {
//             setLanguages(languages.filter((lan) => lan._id !== id));
//             Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
//           })
//           .catch((error) => {
//             console.error("Error deleting tutorial:", error);
//             Swal.fire("Error!", "Failed to delete tutorial.", "error");
//           });
//       }
//     });
//   };


//   console.log(languages)

//   return (
//     <div className="container mx-auto p-4 mt-16">
//       <h1 className="text-3xl font-bold text-center text-orange-500 mb-6">My Tutorials</h1>
//       {loading ? (
//         <div className="text-center">
//           <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status"></div>
//           <p>Loading...</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full text-left border-collapse border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">Name</th>
//                 <th className="border border-gray-300 px-4 py-2">Image</th>
//                 <th className="border border-gray-300 px-4 py-2">Language</th>
//                 <th className="border border-gray-300 px-4 py-2">Price</th>
//                 <th className="border border-gray-300 px-4 py-2">Description</th>
//                 <th className="border border-gray-300 px-4 py-2">Review</th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {languages.map((lang) => (
//                 <tr key={lang._id} className="hover:bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-2">{lang.userName}</td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <img src={lang.image} alt={lang.language} className="h-12 w-12 object-cover rounded" />
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">{lang.language}</td>
//                   <td className="border border-gray-300 px-4 py-2">${lang.price}</td>
//                   <td className="border border-gray-300 px-4 py-2">{lang.description.slice(0, 15)}...</td>
//                   <td className="border border-gray-300 px-4 py-2">{lang.review}</td>
//                   <td className="border border-gray-300 px-4 py-2 flex gap-2">
//                     <Link to={`/updatetorials/${lang._id}`}>
//                       <button
//                         //   onClick={() => handleUpdate(lang._id)}
//                         className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                       >
//                         <FaEdit />
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(lang._id)}

//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       <MdDelete />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTutorials;



// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const MyTutorials = () => {
//   const [languages, setLanguages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order

//   // Fetch tutorials
//   useEffect(() => {
//     axios
//       .get("https://assignment-11-larning-language-server.vercel.app/language/all", { withCredentials: true })
//       .then((response) => {
//         setLanguages(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching tutorials:", error);
//         setLoading(false);
//       });
//   }, []);

//   // Handle delete tutorial
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         axios
//           .delete(`https://assignment-11-larning-language-server.vercel.app/language/${id}`)
//           .then(() => {
//             setLanguages(languages.filter((lan) => lan._id !== id));
//             Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
//           })
//           .catch((error) => {
//             console.error("Error deleting tutorial:", error);
//             Swal.fire("Error!", "Failed to delete tutorial.", "error");
//           });
//       }
//     });
//   };

//   // Handle sorting
//   const handleSort = (order) => {
//     setSortOrder(order);
//     const sortedLanguages = [...languages].sort((a, b) => {
//       if (order === "asc") {
//         return a.price - b.price;
//       } else {
//         return b.price - a.price;
//       }
//     });
//     setLanguages(sortedLanguages);
//   };

//   return (
//     <div className="container mx-auto p-4 mt-16">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-center text-orange-500">My Tutorials</h1>

//         {/* Sorting Dropdown */}
//         <div className="relative">
//           <select
//             onChange={(e) => handleSort(e.target.value)}
//             value={sortOrder}
//             className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//           >
//             <option value="asc">Price: Low to High</option>
//             <option value="desc">Price: High to Low</option>
//           </select>
//           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//             <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
//               <path d="M7 10l5 5 5-5H7z" />
//             </svg>
//           </div>
//         </div>
//       </div>

//       {loading ? (
//         <div className="text-center">
//           <div
//             className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
//             role="status"
//           ></div>
//           <p>Loading...</p>
//         </div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full text-left border-collapse border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="border border-gray-300 px-4 py-2">Name</th>
//                 <th className="border border-gray-300 px-4 py-2">Image</th>
//                 <th className="border border-gray-300 px-4 py-2">Language</th>
//                 <th className="border border-gray-300 px-4 py-2">Price</th>
//                 <th className="border border-gray-300 px-4 py-2">Description</th>
//                 <th className="border border-gray-300 px-4 py-2">Review</th>
//                 <th className="border border-gray-300 px-4 py-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {languages.map((lang) => (
//                 <tr key={lang._id} className="hover:bg-gray-50">
//                   <td className="border border-gray-300 px-4 py-2">
//                     {lang.userName}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     <img
//                       src={lang.image}
//                       alt={lang.language}
//                       className="h-12 w-12 object-cover rounded"
//                     />
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {lang.language}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     ${lang.price}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {lang.description.slice(0, 15)}...
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2">
//                     {lang.review}
//                   </td>
//                   <td className="border border-gray-300 px-4 py-2 flex gap-2">
//                     <Link to={`/updatetorials/${lang._id}`}>
//                       <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
//                         <FaEdit />
//                       </button>
//                     </Link>
//                     <button
//                       onClick={() => handleDelete(lang._id)}
//                       className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                     >
//                       <MdDelete />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyTutorials;















import axios from "axios";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyTutorials = () => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc"); // State for sorting order

  // Fetch tutorials
  useEffect(() => {
    axios
      .get("https://assignment-11-larning-language-server.vercel.app/language/all", { withCredentials: true })
      .then((response) => {
        setLanguages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching tutorials:", error);
        setLoading(false);
      });
  }, []);

  // Handle delete tutorial
  const handleDelete = (id) => {
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
        axios
          .delete(`https://assignment-11-larning-language-server.vercel.app/language/${id}`)
          .then(() => {
            setLanguages(languages.filter((lan) => lan._id !== id));
            Swal.fire("Deleted!", "Your tutorial has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting tutorial:", error);
            Swal.fire("Error!", "Failed to delete tutorial.", "error");
          });
      }
    });
  };

  // Handle sorting
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedLanguages = [...languages].sort((a, b) => {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setLanguages(sortedLanguages);
  };

  return (
    <div className="w-11/12 mx-auto p-4 mt-16">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-orange-500">My Tutorials</h1>
      </div>

      {/* Sorting Dropdown */}
      <div className="flex justify-end mb-4">
        <div className="relative">
          <select
            onChange={(e) => handleSort(e.target.value)}
            value={sortOrder}
            className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          ></div>
          <p>Loading...</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Image</th>
                <th className="border border-gray-300 px-4 py-2">Language</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Description</th>
                <th className="border border-gray-300 px-4 py-2">Review</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {languages.map((lang) => (
                <tr key={lang._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {lang.userName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={lang.image}
                      alt={lang.language}
                      className="h-12 w-12 object-cover rounded"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {lang.language}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${lang.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {lang.description.slice(0, 15)}...
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {lang.review}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex gap-2">
                    <Link to={`/updatetorials/${lang._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(lang._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTutorials;
