import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddEquipment = () => {

    const { user } = useContext(AuthContext);


    const handleAddCoffee = e => {
        e.preventDefault();


        const image = e.target.image.value;
        const name = e.target.name.value;
        const categoryName = e.target.categoryName.value;
        const description = e.target.description.value;
        const price = e.target.Price.value;
        const rating = e.target.rating.value;
        const time = e.target.time.value;
        const stockStatus = e.target.stockStatus.value;
        const customization = e.target.customization.value;
        const userName = e.target.userName.value;
        const userEmail = e.target.email.value;

        const newCoffee = { image, name, categoryName, description, price, rating, customization, time, stockStatus, userName, userEmail }
        console.log(newCoffee)

        // send data to the server and database


    }

    return (
        <div className='lg:w-3/4 mx-auto'>
            <div className="text-center p-10">
                <h1 className="text-5xl font-bold">Add Equipment!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
            </div>
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleAddCoffee} className="card-body">
                    {/* form first row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Image Url</span>
                            </label>
                            <input type="text" name='image' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name='name' placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>



                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Category Name</span>
                            </label>
                            <input type="text" name='categoryName' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" name='description' placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>



                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input type="text" name='Price' placeholder="coffee name" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="chef name" className="input input-bordered" required />
                        </div>
                    </div>



                    {/* form second row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text"> Customization</span>
                            </label>
                            <input type="text" name='customization' placeholder="coffee supplier" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text"> Processing Time</span>
                            </label>
                            <input type="time" name='time' placeholder="taste name" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* form third row */}
                    <div className='flex flex-col lg:flex-row gap-5'>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">StockStatus</span>
                            </label>
                            <input type="text" name='stockStatus' placeholder="coffee Category" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" name='details' placeholder="Coffee Details" className="input input-bordered" required />
                        </div> */}

                        {/* Display logged-in user's email in a read-only input field */}
                        {user && user.displayName && (
                            <div className="form-control flex-1 ">
                                <label className="label">
                                    <span className="label-text"> User Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="userName"
                                    value={user.displayName} // Set the value to the logged-in user's email
                                    className="input input-bordered"
                                    readOnly // Make it read-only
                                />
                            </div>
                        )}
                    </div>




                    {user && user.email && (
                        <div className="form-control flex-1 ">
                            <label className="label">
                                <span className="label-text"> User Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={user.email} // Set the value to the logged-in user's email
                                className="input input-bordered"
                                readOnly // Make it read-only
                            />
                        </div>
                    )}


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Equipment</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddEquipment;
