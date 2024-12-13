

// import { useContext } from "react";
// import { Link, NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
// import { AuthContext } from "../provider/AuthProvider";

// const NavBar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const navigate = useNavigate(); // Hook to programmatically navigate

//     const handleLogout = () => {
//         logOut()
//             .then(() => {
//                 // Redirect to the login page after successful logout
//                 navigate("/login");
//             })
//             .catch((error) => {
//                 console.error("Logout failed:", error);
//             });
//     };

//     return (
//         <nav className="bg-blue-600 text-white py-4 px-6 flex flex-wrap items-center justify-between">
//             {/* Left: Logo */}
//             <div className="text-xl font-bold">
//                 <Link to="/">EquiSports</Link>
//             </div>

//             {/* Center: Navigation Links */}
//             <div className="space-x-6 text-lg hidden md:flex">
//                 <NavLink
//                     to="/"
//                     className={({ isActive }) =>
//                         isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
//                     }
//                 >
//                     Home
//                 </NavLink>
//                 <NavLink
//                     to="/addequipment"
//                     className={({ isActive }) =>
//                         isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
//                     }
//                 >
//                     AddEquipment
//                 </NavLink>
//                 <NavLink
//                     to="/my-add-visa"
//                     className={({ isActive }) =>
//                         isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
//                     }
//                 >
//                     MyEquipment
//                 </NavLink>
//                 <NavLink
//                     to="/register"
//                     className={({ isActive }) =>
//                         isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
//                     }
//                 >
//                     Register
//                 </NavLink>
//             </div>

//             {/* Right: Toggle Login/Logout Button */}
//             <div className="mt-4 md:mt-0 flex">
//                 <div className="text-red-500 px-4 py-2">
//                     {user && user.displayName}

//                 </div>

//                 {user && user?.email ? (
//                     <button
//                         onClick={handleLogout} // Use the new handleLogout function
//                         className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
//                     >
//                         LogOut
//                     </button>
//                 ) : (
//                     <NavLink to="/login">
//                         <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
//                             Login
//                         </button>
//                     </NavLink>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default NavBar;






import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate("/login"); // Redirect on logout
            })
            .catch((error) => {
                console.error("Logout failed:", error);
            });
    };

    return (
        <nav className="bg-blue-600 text-white py-4 px-6 flex flex-wrap items-center justify-between">
            {/* Left: Logo */}
            <div className="text-xl font-bold">
                <Link to="/">EquiSports</Link>
            </div>

            {/* Center: Navigation Links */}
            <div className="space-x-6 text-lg hidden md:flex">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/addequipment"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                    }
                >
                    Add Equipment
                </NavLink>
                <NavLink
                    to="/my-equipment"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                    }
                >
                    My Equipment
                </NavLink>
            </div>

            {/* Right: Conditional Rendering */}
            <div className="mt-4 md:mt-0 flex items-center space-x-4">
                {user && user.email ? (
                    <>
                        {/* Profile Section */}
                        <div className="relative group cursor-pointer">
                            <img
                                src={user.photoURL || "/default-avatar.png"}
                                alt="User Profile"
                                className="w-10 h-10 rounded-full"
                            />
                            <div className="absolute right-1 hidden group-hover:block bg-orange-500 text-black p-2 rounded shadow-md z-10">
                                <p className="font-bold">{user.displayName}</p>
                                <p className="text-sm text-gray-600">{user.email}</p>
                            </div>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
                        >
                            LogOut
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink
                            to="/login"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-yellow-600 text-white px-4 py-2 rounded"
                                    : "bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
                            }
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-yellow-600 text-white px-4 py-2 rounded"
                                    : "bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
                            }
                        >
                            Register
                        </NavLink>
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;


