// Testimonials.jsx


const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      review: 'Great quality products and excellent service!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPmHJbRyeZy21ylCHwgSoes_zqDl1vQfXxxg&s',
    },
    {
      id: 2,
      name: 'Ab De Villiers',
      review: 'Fast shipping and amazing prices. Highly recommend!',
      image: 'https://static-files.cricket-australia.pulselive.com/headshots/440/792-camedia.png',
    },
    {
      id: 3,
      name: 'Jane Smith',
      review: 'Fast shipping and amazing prices. Highly recommend!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eVibMwdNlf0o01_Qv6v2uuSwcSicj8iZDQ&s',
    },
  ];

  return (
    <section className="py-10 w-11/12 mx-auto bg-white">
      <h2 className="text-4xl text-orange-600 font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 bg-gray-100 rounded-lg shadow-md">
            <img src={review.image} alt={review.name} className="w-44 h-28 rounded-lg mx-auto" />
            <p className="text-lg font-medium mt-4 text-center">{review.review}</p>
            <p className="text-center text-gray-700 mt-2">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


