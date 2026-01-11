import { BiWorld } from "react-icons/bi";

const MissionVision = () => {
  return (
    <section className="bg-base-100 py-14">
      <div className="md:w-11/12 mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="card shadow">
          <div className="card-body">
            <h3 className="text-2xl font-semibold mb-3">
              🎯 Our{" "}
              <span className="text-cyan-600">Mission</span>
            </h3>

            <p className="text-gray-700 leading-relaxed">
              To deliver quality education that nurtures creativity,
              critical thinking, and ethical values while empowering
              students to become responsible global citizens.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="card shadow">
          <div className="card-body">
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <BiWorld className="text-cyan-600" />
              Our <span className="text-cyan-600">Vision</span>
            </h3>

            <p className="text-gray-700 leading-relaxed">
              To be a leading university recognized for academic
              excellence, impactful research, and meaningful
              contributions to society.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
