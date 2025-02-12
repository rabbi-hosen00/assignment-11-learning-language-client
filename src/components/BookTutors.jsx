

// eslint-disable-next-line react/prop-types
const BookTutors = ({ tutors }) => {
    // eslint-disable-next-line react/prop-types
    const {  image, language, price, userName } = tutors;
    console.log(tutors);


    
  
    return (
      <div className="flex justify-center items-center mt-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-sm">
          <img
            src={image}
            alt={userName}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{userName}</h2>
            <p className="text-gray-600 mt-2">
              <span className="font-bold">Language:</span> {language}
            </p>
            <p className="text-gray-600 mt-2">
              <span className="font-bold">Price:</span> ${price}
            </p>
            
            <div className="mt-4 flex justify-end">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
                Review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BookTutors;
  