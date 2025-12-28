import SectionLoader from "../ui/SectionLoader";
import { useNotices } from "@/hooks/useNotices";
import NoticeCard from "../notice/NoticeCard";

const LatestNotice = () => {
    const {data, isLoading} = useNotices(1);

    if (isLoading) {
        return <SectionLoader />;
    }

    return (
        <section className="max-w-7xl mx-auto py-14">
            <h3 className="text-4xl font-bold text-center mb-10">Notice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                {
                    data?.data?.filter(n => !n.isDeleted)?.slice(0, 5)?.map((notice) => (
                        <NoticeCard key={notice._id} notice={notice}/>
                    ))
                }
            </div>
        </section>
    );
};

export default LatestNotice;