
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTutorials = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddTutorial = async (e) => {
    e.preventDefault();

    // Extract form data
    const form = e.target;
    const image = form.image.value;
    const description = form.description.value;
    const price = form.Price.value;
    const language = form.language.value;
    const time = form.time.value;
    const review = form.review.value;
    const userName = form.userName.value;
    const userEmail = form.email.value;

    const newTutorial = {
      image,
      description,
      price,
      language,
      review,
      time,
      userName,
      userEmail,
    };

    // Log data for debugging
    console.log("Sending data:", newTutorial);

    try {
      // Send data to the server using Axios
      const response = await axios.post("http://localhost:5000/language", newTutorial, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Check if insertion was successful
      if (response.data.insertedId) {
        Swal.fire("Success!", "Tutorial added successfully!", "success");
        navigate("/"); // Redirect to the homepage
      } else {
        Swal.fire("Error!", "Failed to add the tutorial.", "error");
      }
    } catch (error) {
      console.error("Error adding tutorial:", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div className="lg:w-3/6 mx-auto mt-20">
      <div className="text-center p-10">
        <h1 className="text-5xl text-orange-500 font-bold">Add Tutorial!</h1>
        <p className="py-6">
          Share your expertise by adding a tutorial. Provide the details below
          and help others learn!
        </p>
      </div>
      <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
        <form onSubmit={handleAddTutorial} className="card-body">
          {/* User Details */}
          <div className="flex flex-col lg:flex-row gap-5">
            {user && user.displayName && (
              <div className="form-control flex-1">
                <label htmlFor="userName" className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  value={user.displayName}
                  className="input input-bordered"
                  readOnly
                />
              </div>
            )}

            {user && user.email && (
              <div className="form-control flex-1">
                <label htmlFor="email" className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  className="input input-bordered"
                  readOnly
                />
              </div>
            )}
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
                placeholder="Brief description"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label htmlFor="Price" className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                id="Price"
                name="Price"
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
                placeholder="Language of the tutorial"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Additional Details */}
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="form-control flex-1">
              <label htmlFor="review" className="label">
                <span className="label-text">Review</span>
              </label>
              <input
                type="text"
                id="review"
                name="review"
                defaultValue="0"
                placeholder="Review score"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label htmlFor="time" className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                type="time"
                id="time"
                name="time"
                className="input input-bordered"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTutorials;
