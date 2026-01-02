const DepartmentsSection = () => {
  const departments = [
    "CSE",
    "EEE",
    "BBA",
    "English",
    "Economics",
    "Mathematics",
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our <span className="text-primary">Departments</span>
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {departments.map((dep) => (
            <div
              key={dep}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="card-body text-center">

                {/* Department Name */}
                <h4 className="text-xl font-semibold text-primary mb-1">
                  {dep}
                </h4>

                {/* Sub text */}
                <p className="text-sm text-gray-500">
                  Department of {dep}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DepartmentsSection;
