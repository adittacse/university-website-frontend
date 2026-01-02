"use client";

import Link from "next/link";
import { Notice } from "@/types/notice";
import { FaCalendarAlt } from "react-icons/fa";
import { getFileIcon } from "@/helper/getFileIcon";

type Props = {
    notice: Notice;
};

export default function NoticeCard({ notice }: Props) {
    const { _id, title, createdAt, file } = notice;

    return (
        <div className="bg-base-100 border border-gray-100 rounded-md p-4 flex gap-4 shadow-md hover:shadow-2xl transition">

            {/* FILE ICON */}
            <div className="flex-shrink-0 pt-1">
                {getFileIcon(file)}
            </div>

            {/* CONTENT */}
            <div className="flex-1 space-y-2">
                {/* Title */}
                <Link href={`/notices/${_id}`}>
                    <h2 className="text-primary font-semibold leading-snug hover:underline">
                        {title}
                    </h2>
                </Link>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <FaCalendarAlt className="text-xs" />
                    {new Date(createdAt).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </div>
            </div>
        </div>
    );
}
