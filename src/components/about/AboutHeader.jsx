const AboutHeader = () => {
  return (
    <section className="bg-base-200 py-14">
      <div className="md:w-11/12 mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          About{" "}
          <span className="bg-gradient-to-r from-cyan-800 to-cyan-400 bg-clip-text text-transparent">
            RMIT University
          </span>
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          RMIT University is committed to academic excellence, innovation, and
          creating future leaders through quality education.
        </p>
      </div>
    </section>
  );
};

export default AboutHeader;
