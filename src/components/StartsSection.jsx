

const StartsSection = () => {
  const stats = [
    { value: "32,000+", label: "Experienced tutors" },
    { value: "300,000+", label: "5-star tutor reviews" },
    { value: "120+", label: "Subjects taught" },
    { value: "180+", label: "Tutor nationalities" },
    { value: "4.8 ★★★★", label: "on the App Store" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
          Stats Section
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <p className="text-4xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartsSection;
