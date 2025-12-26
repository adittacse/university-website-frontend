"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import NoticeCard from "@/components/notice/NoticeCard";
import { useNotices } from "@/hooks/useNotices";

export default function NoticesPage() {
    const [page, setPage] = useState(1);
    const {data, isLoading} = useNotices(page);

    return (
        <>
            <Navbar/>

            <div className="p-6 max-w-6xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Notices</h1>

                {isLoading && <p>Loading...</p>}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data?.data?.map((notice) => (
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
        </>
    );
}
