import { useNotices } from "@/hooks/useNotices";

const StatsSection = () => {
  const { data} = useNotices(1);

  return (
      <section className="bg-base-200 py-14">
        {/* Section title */}
        <h3 className="text-4xl font-bold text-center  mb-12">
          Overview
        </h3>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            {/* Card */}
            <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
              <div className="stat-title text-gray-500">Departments</div>
              <div className="stat-value text-primary">12</div>
            </div>

            <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
              <div className="stat-title text-gray-500">Students</div>
              <div className="stat-value text-primary">6K+</div>
            </div>

            <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
              <div className="stat-title text-gray-500">Teachers</div>
              <div className="stat-value text-primary">350+</div>
            </div>

            <div className="stat bg-base-100 shadow-md rounded-lg border-t-4 border-primary">
              <div className="stat-title text-gray-500">Notices</div>
              <div className="stat-value text-primary">
                {data?.pagination?.total || 0}
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default StatsSection;