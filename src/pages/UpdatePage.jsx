



const UpdatePage = () => {

  const handleUpdate = e => {
    e.preventDefault();

    const image = e.target.image.value;
    const name = e.target.name.value;
    const categoryName = e.target.categoryName.value;
    const price = e.target.Price.value;
    const rating = e.target.rating.value;
    const newSports = { image, name, categoryName,  price, rating   }
    console.log(newSports)
  }

  return (
    <div>
      <div className='lg:w-3/4 mx-auto'>
        <div className="text-center p-10">
          <h1 className="text-5xl font-bold">Update Equipment!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handleUpdate} className="card-body">
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
                  <span className="label-text"> Price</span>
                </label>
                <input type="text" name='Price' placeholder="coffee name" className="input input-bordered" required />
              </div>
            </div>



            <div className='flex flex-col lg:flex-row gap-5'>

              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input type="text" name='rating' placeholder="chef name" className="input input-bordered" required />
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
