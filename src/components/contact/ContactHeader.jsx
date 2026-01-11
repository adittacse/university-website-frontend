const ContactHeader = () => {
  return (
    <section className="bg-base-200 py-14">
      <div className="md:w-11/12 mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-3">
          <span className="bg-gradient-to-r from-cyan-800 to-cyan-400 bg-clip-text text-transparent">
            Contact
          </span>{" "}
          Us
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          If you have any questions regarding notices, admissions, departments,
          or administrative matters, feel free to contact us.
        </p>
      </div>
    </section>
  );
};

export default ContactHeader;
