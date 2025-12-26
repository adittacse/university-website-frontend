"use client";

import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="w-64 bg-base-300 min-h-screen hidden md:block p-4">
            <h2 className="font-bold text-lg mb-4">Dashboard</h2>

            <nav>
                <ul className="menu">
                    <li>
                        <Link href="/">Home Page</Link>
                    </li>
                    <li>
                        <Link href="/dashboard">Overview</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/notices">All Notice</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/upload-notice">Upload Notice</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/categories">Manage Categories</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/roles">Manage Roles</Link>
                    </li>
                    <li>
                        <Link href="/dashboard/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
