

import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu toggle

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
        <nav className="bg-gray-500 text-white py-4 px-6 flex items-center justify-between  fixed top-0  left-0 w-full shadow-md z-50 backdrop-blur-3xl bg-gray-500/70">
            {/* Left: Hamburger Menu and Logo Side by Side */}
            <div className="flex items-center space-x-4">
                {/* Hamburger Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="block md:hidden text-white focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Logo */}
                <div className="text-xl font-bold">
                    <Link to="/">
                        {/* <img
                            src="https://greenwoodhigh.edu.in/wp-content/uploads/2021/03/sports-2-1.jpg.webp"
                            alt="Visa Logo"
                            className="w-12 h-12 rounded-2xl"
                        /> */}

                        <div className="flex items-center space-x-2">
                            {/* Replace with your logo */}
                            <img src="https://greenwoodhigh.edu.in/wp-content/uploads/2021/03/sports-2-1.jpg.webp"
                            
                            alt="Website Logo" className="h-8 w-8" />
                            <span className="text-white font-bold text-xl">LearnHub</span>
                        </div>
                    </Link>
                </div>
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
                    to="/allSports"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                    }
                >
                    All Sports
                </NavLink>
                <NavLink
                    to="/addtutorials"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                    }
                >
                    Add Tutorials
                </NavLink>
                <NavLink
                    to="/mytutorials"
                    className={({ isActive }) =>
                        isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                    }
                >
                    My Tutorials
                </NavLink>
                
            </div>

            {/* Right: Conditional Rendering for User and Logout */}
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

            {/* Mobile Menu (Sidebar on Mobile) */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-start">
                    <div className="bg-blue-600 text-white w-64 p-6 space-y-6 flex flex-col">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white text-2xl mb-4"
                        >
                            &times; {/* Close the menu */}
                        </button>

                        {/* Navigation Links */}
                        <NavLink
                            to="/"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/allSports"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                            }
                        >
                            All Sports
                        </NavLink>
                        <NavLink
                            to="/addequipment"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                            }
                        >
                            Add Euipment
                        </NavLink>
                        <NavLink
                            to="/myequipment"
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) =>
                                isActive ? "text-yellow-300 font-bold" : "hover:text-yellow-300"
                            }
                        >
                            My Equipment
                        </NavLink>

                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;