const Testimonials = () => {
    const testimonials = [
      {
        name: "John Doe",
        review: "The platform made finding the perfect tutor so easy. Highly recommended!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvl-3s27sN3QHbWiuRzijVHVJRcZevBK56VQ&s",
      },
      {
        name: "Jane Smith",
        review: "I improved my French skills in just a few weeks. The tutors are amazing!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_12ffm1d7Z5lxa3xetJm2g1oU5_x9q1S26A&s",
      },
      {
        name: "Carlos Garcia",
        review: "Great experience! The booking process is smooth, and the tutors are professional.",
        image: "https://media.licdn.com/dms/image/v2/D4E03AQG8dgZG_qu34w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725953212291?e=2147483647&v=beta&t=D0X871Gif7BkN-fxewn72abDqx8B73-OyTT16sYJft4",
      },
    ];
  
    return (
      <section className="py-10 w-11/12 mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold text-blue-700 mb-8">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 border rounded-lg shadow-md text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4"
                />
                <p className="italic font-extralight text-gray-400">{testimonial.review}</p>
                <h3 className="text-blue-600 font-bold mt-2">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  