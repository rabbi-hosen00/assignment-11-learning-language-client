

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateTutorials = () => {
    const tutorials = useLoaderData(); // Loaded tutorial data
    const { user } = useContext(AuthContext); // Authenticated user context
    const navigate = useNavigate();

    const { _id, image, description, price, language, review, userName, userEmail } = tutorials;

    const handleUpdateTutorial = async (e) => {
        e.preventDefault();

        // Extract form data
        const form = e.target;
        const updatedTutorial = {
            image: form.image.value,
            description: form.description.value,
            price: form.price.value,
            language: form.language.value,

            userName: form.userName.value,
            userEmail: form.email.value,
        };

        // Log for debugging
        console.log("Sending updated data:", updatedTutorial);

        // Send PUT request
        fetch(`https://assignment-11-larning-language-server.vercel.app/language/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedTutorial),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed with status ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Success!", "Tutorial updated successfully!", "success");
                    navigate("/mytutorials");
                } else {
                    Swal.fire("Info!", "No changes were made.", "info");
                }
            })
            .catch((error) => {
                console.error("Error updating tutorial:", error);
                Swal.fire("Error!", "Something went wrong.", "error");
            });
    };

    return (
        <div className="lg:w-3/6 mx-auto mt-20 mb-3">
            <div className="text-center p-10">
                <h1 className="text-5xl text-orange-500 font-bold">Update Tutorial</h1>
                <p className="py-6">Update your tutorial details below!</p>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleUpdateTutorial} className="card-body">
                    {/* User Details */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label htmlFor="userName" className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                defaultValue={userName || (user && user.displayName)}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label htmlFor="email" className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={userEmail || (user && user.email)}
                                className="input input-bordered"
                                readOnly
                            />
                        </div>
                    </div>

                    {/* Tutorial Details */}
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label htmlFor="image" className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                defaultValue={image}
                                placeholder="Tutorial Image URL"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label htmlFor="description" className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                defaultValue={description}
                                placeholder="Brief description"
                                className="input input-bordered"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control flex-1">
                            <label htmlFor="price" className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control flex-1">
                            <label htmlFor="language" className="label">
                                <span className="label-text">Language</span>
                            </label>
                            <input
                                type="text"
                                id="language"
                                name="language"
                                defaultValue={language}
                                placeholder="Language of the tutorial"
                                className="input input-bordered"
                                required
                            />
                        </div>
                    </div>

                    {/* Additional Details */}
                    <div className="form-control flex-1">
                        <label htmlFor="review" className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <input
                            type="text"
                            id="review"
                            name="review"
                            defaultValue={review}
                            value={0}
                            readOnly
                            placeholder="Review score"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTutorials;



