"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import NoticeCard from "@/components/notice/NoticeCard";
import { useNotices } from "@/hooks/useNotices";
import SectionLoader from "@/components/ui/SectionLoader";
import Footer from "@/components/Footer";

export default function NoticesPage() {
    const [page, setPage] = useState(1);
    const {data, isLoading} = useNotices(page);

    if (isLoading) {
        return <SectionLoader />;
    }

    return (
        <>
            {/* <Navbar/> */}

            <div className="p-6 max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-10">All <span className="text-primary">Notice</span></h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                    {
                        data?.data?.filter(n => !n.isDeleted)?.map((notice) => (
                            <NoticeCard key={notice._id} notice={notice}/>
                        ))
                    }
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mt-6">
                    <button
                        className="btn btn-sm"
                        disabled={page === 1}
                        onClick={() => setPage((p) => p - 1)}
                    >
                        Prev
                    </button>

                    <span className="px-4 py-2">
                        Page {data?.pagination?.page} /{" "}
                        {data?.pagination?.totalPages}
                    </span>

                    <button
                        className="btn btn-sm"
                        disabled={
                            page === data?.pagination?.totalPages
                        }
                        onClick={() => setPage((p) => p + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* <Footer /> */}
        </>
    );
}
