const CoreValues = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center  mb-12">
                    Our Core <span className="text-primary">Values</span>
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div
                        className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
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

                    <div
                        className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
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

                    <div
                        className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
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

                </div>
            </div>
        </section>
    );
};

export default CoreValues;