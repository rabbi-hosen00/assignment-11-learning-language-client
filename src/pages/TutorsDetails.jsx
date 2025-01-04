

import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const TutorsDetails = () => {
  const tutorsDetails = useLoaderData();
  console.log(tutorsDetails);

  const {
    _id,
    description,
    image,
    language,
    price,
    review,
    userName,
    userEmail,
  } = tutorsDetails;

  const [showModal, setShowModal] = useState(false);
  const [loggedInUserEmail] = useState("user@example.com"); // Replace with logged-in user's email

  const handleBooking = () => {
    const bookingDetails = {
      tutorId: _id,
      image,
      language,
      price,
      userName,
      userEmail,
    };

    console.log("Booking Details:", bookingDetails);

    // Simulate sending data to the database
    fetch("https://assignment-11-larning-language-server.vercel.app/booked-tutor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Booking successful:", data);
        Swal.fire({
            icon: "success",
            title: "Success",
            text: "Booking successful",
          });
        setShowModal(false); // Close modal after submission
      })
      .catch((err) => console.error("Error booking tutor:", err));
  };

  return (
    <div className="flex justify-center items-center mt-24 px-4 sm:px-6 lg:px-8 mb-5">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-3xl">
        <img src={image} alt={userName} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800">{userName}</h2>
          <p className="text-gray-600 mt-2">
            <span className="font-bold">Language:</span> {language}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-bold">Description:</span> {description}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-bold">Price:</span> ${price}
          </p>
          <p className="text-gray-600 mt-2">
            <span className="font-bold">Reviews:</span> {review}
          </p>
          <div className="mt-6 flex justify-end">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Confirm Booking</h3>
            <div className="space-y-4">
              <p>
                <span className="font-bold">Tutor ID:</span> {_id}
              </p>
              <p>
                <span className="font-bold">Tutor Name:</span> {userName}
              </p>
              <p>
                <span className="font-bold">Language:</span> {language}
              </p>
              <p>
                <span className="font-bold">Price:</span> ${price}
              </p>
              <p>
                <span className="font-bold">Tutor Email:</span> {userEmail}
              </p>
              <p>
                <span className="font-bold">Your Email:</span> {loggedInUserEmail}
              </p>
              <div>
                <label className="block font-bold mb-1" htmlFor="tutor-id">
                  Tutor ID (Editable):
                </label>
                <input
                  type="text"
                  id="tutor-id"
                  defaultValue={_id}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2"
                  
                />
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleBooking}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TutorsDetails;




