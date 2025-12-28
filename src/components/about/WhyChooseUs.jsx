const WhyChooseUs = () => {
    return (
        <section className="bg-base-200 py-14">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-semibold mb-8 text-center">
                    Why Choose XYZ University?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>Experienced and dedicated faculty members</li>
                        <li>Modern campus and learning facilities</li>
                        <li>Student-centered academic environment</li>
                        <li>Career-focused education and training</li>
                    </ul>

                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                        <li>Strong academic governance</li>
                        <li>Technology-driven learning system</li>
                        <li>Supportive student services</li>
                        <li>Commitment to innovation and research</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;