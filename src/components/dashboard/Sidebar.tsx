"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-base-200 min-h-screen p-4">
            <h2 className="font-bold text-lg mb-4">Dashboard</h2>

            <ul className="menu menu-sm">
                <li>
                    <Link href="/dashboard">Overview</Link>
                </li>
                <li>
                    <Link href="/dashboard/upload-notice">
                        Upload Notice
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/categories">Categories</Link>
                </li>
                <li>
                    <Link href="/dashboard/users">Users</Link>
                </li>
            </ul>
        </aside>
    );
}
