import { useNotices } from "@/hooks/useNotices";
import SectionLoader from "@/components/ui/SectionLoader";

const StatsSection = () => {
    const {data, isLoading} = useNotices(1);

    if (isLoading) {
        return <SectionLoader />;
    }

    return (
        <section className="bg-base-200 py-14">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div className="stat bg-base-100 shadow rounded">
                        <div className="stat-title">Departments</div>
                        <div className="stat-value">12</div>
                    </div>
                    <div className="stat bg-base-100 shadow rounded">
                        <div className="stat-title">Students</div>
                        <div className="stat-value">6K+</div>
                    </div>
                    <div className="stat bg-base-100 shadow rounded">
                        <div className="stat-title">Teachers</div>
                        <div className="stat-value">350+</div>
                    </div>
                    <div className="stat bg-base-100 shadow rounded">
                        <div className="stat-title">Notices</div>
                        <div className="stat-value">
                            {data?.pagination?.total || 0}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;