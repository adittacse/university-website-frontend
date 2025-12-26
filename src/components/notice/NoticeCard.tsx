"use client";

import Link from "next/link";
import { FaEye, FaDownload } from "react-icons/fa";
import { Notice } from "@/types/notice";

type Props = {
    notice: Notice;
};

export default function NoticeCard({ notice }: Props) {
    const {_id, title, createdAt, viewCount, downloadCount} = notice;

    return (
        <div className="card bg-base-100 shadow-md border">
            <div className="card-body space-y-2">

                {/* Title → Details */}
                <Link href={`/notices/${_id}`}>
                    <h2 className="card-title hover:text-primary cursor-pointer">
                        {title}
                    </h2>
                </Link>

                {/* Meta info */}
                <div className="text-sm text-gray-500">
                    Published: {new Date(createdAt).toLocaleDateString()}
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1">
                        <FaEye /> {viewCount}
                    </span>

                    <span className="flex items-center gap-1">
                        <FaDownload /> {downloadCount}
                    </span>
                </div>

                {/* Actions */}
                <div className="card-actions justify-end pt-2">
                    <Link
                        href={`/notices/${notice._id}`}
                        className="btn btn-sm btn-outline"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}
