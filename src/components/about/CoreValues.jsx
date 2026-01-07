const CoreValues = () => {
  return (
<<<<<<< HEAD
    <section className="py-20 ">
      <div className="px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-800">
          Our Core <span className="text-cyan-500">Values</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              title: "Integrity",
              text: "Upholding honesty, transparency, and ethical standards in all academic and administrative activities.",
            },
            {
              title: "Excellence",
              text: "Striving for continuous improvement in teaching, learning, research, and services.",
            },
            {
              title: "Inclusiveness",
              text: "Creating a respectful and inclusive environment that values diversity and equal opportunity.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="relative rounded-[32px] bg-[#eef2f6] border border-slate-300/70 
                         shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.06)]
                         p-8 transition hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              <h4 className="text-xl font-semibold text-cyan-600 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
=======
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
          Our Core <span className="text-primary">Values</span>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
            <div className="card-body text-center">
              <h4 className="font-semibold text-lg mb-2 text-primary">
                Integrity
              </h4>
              <p className="text-gray-600">
                Upholding honesty, transparency, and ethical standards in all
                academic and administrative activities.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
            <div className="card-body text-center">
              <h4 className="font-semibold text-lg mb-2 text-primary">
                Excellence
              </h4>
              <p className="text-gray-600">
                Striving for continuous improvement in teaching, learning,
                research, and services.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
            <div className="card-body text-center">
              <h4 className="font-semibold text-lg mb-2 text-primary">
                Inclusiveness
              </h4>
              <p className="text-gray-600">
                Creating a respectful and inclusive environment that values
                diversity and equal opportunity.
              </p>
            </div>
          </div>
>>>>>>> 4fba2396524211f47ea000b97c8da93261a1ffa1

        </div>
      </div>
    </section>
  );
};

export default CoreValues;
