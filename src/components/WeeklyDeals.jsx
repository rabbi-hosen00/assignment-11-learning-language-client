// CategoriesSection.jsx



// Mock JSON data (can be fetched from an API)
const dealsData = {
  deals: [
    { name: "Tennis Racket", price: 89.99, discount: 30, image: "https://cdn.pixabay.com/photo/2021/06/04/06/54/racket-6308994_640.jpg", link: "/product/4" },
    { name: "Cycling Helmet", price: 69.99, discount: 25, image: "https://i.guim.co.uk/img/media/63ddd858f845f3675c6eda215e74a5bd38e655b8/0_41_3800_2280/master/3800.jpg?width=700&quality=85&auto=format&fit=max&s=f9c23b2487f18ec446f1f254751a2bd7", link: "/product/5" },
    { name: "Tennis Racket", price: 89.99, discount: 30, image: "https://cdn.pixabay.com/photo/2021/06/04/06/54/racket-6308994_640.jpg", link: "/product/4" },
  ]
};

function WeeklyDeals() {
  const { deals } = dealsData; // Extract deals from the JSON data

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Weekly Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img
                src={deal.image}
                alt={deal.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{deal.name}</h3>
              <p className="text-gray-700 mt-2">
                <span className="line-through text-gray-500">${deal.price.toFixed(2)}</span>{" "}
                <span className="text-red-600 font-bold">
                  ${((deal.price * (1 - deal.discount / 100))).toFixed(2)}
                </span>
              </p>
              <a
                
                className="mt-4 inline-block bg-red-600 text-white py-2 px-4 rounded"
              >
                Get Deal
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeeklyDeals;
