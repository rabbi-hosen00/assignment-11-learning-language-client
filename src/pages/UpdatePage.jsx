


import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const sports = useLoaderData();
  // console.log(sports);

  const nevagate = useNavigate()


  const { _id, image, name, categoryName, price, rating } = sports;

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedSport = {
      image: e.target.image.value,
      name: e.target.name.value,
      categoryName: e.target.categoryName.value,
      price: e.target.price.value,
      rating: e.target.rating.value,
    };
    // console.log(updatedSport);

    fetch(`https://assignment-10-lotas-server.vercel.app/sports/${_id}`, {
      method: "PUT", // Correct method for updating
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSport),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed with status ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "Equipment updated successfully!", "success");
          nevagate("/myequipment")
        } else {
          Swal.fire("Info!", "No changes were made.", "info");
        }
      })
      .catch((error) => {
        console.error("Error updating equipment:", error);
        Swal.fire("Error!", "Something went wrong.", "error");
      });
  };

  return (
    <div>
      <div className="lg:w-3/4 mx-auto">
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold">Update Equipment!</h1>
          <p className="py-6">
            Update sports equipment information by filling out the form below.
          </p>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleUpdate} className="card-body">
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Enter image URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Enter item name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category Name</span>
                </label>
                <input
                  type="text"
                  name="categoryName"
                  defaultValue={categoryName}
                  placeholder="Enter category name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Enter price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Enter rating"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Update Equipment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;

