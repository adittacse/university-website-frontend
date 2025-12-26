"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useNoticeDetails } from "@/hooks/useNoticeDetails";
import NoticePreview from "@/components/notice/NoticePreview";

export default function NoticeDetailsPage() {
    const params = useParams();
    const id = params.id as string;

    const { data, isLoading } = useNoticeDetails(id);

    if (isLoading) {
        return <p className="p-6">Loading...</p>;
    }

    const notice = data;

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-2">
                    {notice.title}
                </h1>

                <p className="text-gray-600 mb-6">
                    {notice.description}
                </p>

                <NoticePreview notice={notice} />

                <div className="mt-6">
                    <a
                        href={`http://localhost:5002/${notice.file.path}`}
                        target="_blank"
                        className="btn btn-primary"
                    >
                        Download File
                    </a>
                </div>
            </div>
        </>
    );
}
