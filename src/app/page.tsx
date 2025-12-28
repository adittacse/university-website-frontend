"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNotices } from "@/hooks/useNotices";
import SectionLoader from "@/components/ui/SectionLoader";
import NoticeCard from "@/components/notice/NoticeCard";

export default function Home() {
    const {data, isLoading} = useNotices(1);

    if (isLoading) {
        return <SectionLoader />;
    }

    return (
        <div >
            <Navbar />

            {/*<div className="p-6">*/}
            {/*    <h1 className="text-2xl font-bold">Welcome</h1>*/}
            {/*    <p>This is the home page.</p>*/}
            {/*</div>*/}

            {/* latest 4 notice */}
            <div className="max-w-7xl mx-auto">
                <h3 className="text-4xl font-bold text-center mb-10">Notice</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    {
                        data?.data?.filter(n => !n.isDeleted)?.slice(0, 5)?.map((notice) => (
                            <NoticeCard key={notice._id} notice={notice}/>
                        ))
                    }
                </div>
            </div>

            <Footer />
        </div>
    );
}
