const CoreValues = () => {
    return (
        <section className="py-14">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                    Our Core Values
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="card bg-base-100 shadow">
                        <div className="card-body text-center">
                            <h4 className="font-semibold text-lg mb-2">
                                Integrity
                            </h4>
                            <p className="text-gray-600">
                                Upholding honesty, transparency, and ethical
                                standards in all academic and administrative
                                activities.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow">
                        <div className="card-body text-center">
                            <h4 className="font-semibold text-lg mb-2">
                                Excellence
                            </h4>
                            <p className="text-gray-600">
                                Striving for continuous improvement in teaching,
                                learning, research, and services.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow">
                        <div className="card-body text-center">
                            <h4 className="font-semibold text-lg mb-2">
                                Inclusiveness
                            </h4>
                            <p className="text-gray-600">
                                Creating a respectful and inclusive environment
                                that values diversity and equal opportunity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreValues;