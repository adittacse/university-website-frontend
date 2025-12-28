const DepartmentsSection = () => {
    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-3xl font-bold mb-8 text-center">
                    Our Departments
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["CSE", "EEE", "BBA", "English", "Economics", "Mathematics"].map(dep => (
                        <div
                            key={dep}
                            className="card bg-base-100 shadow hover:shadow-md transition"
                        >
                            <div className="card-body text-center">
                                <h4 className="text-xl font-semibold">{dep}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DepartmentsSection;