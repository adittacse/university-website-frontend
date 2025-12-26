"use client";

import Sidebar from "./Sidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex">
            {/* Left Sidebar */}
            <aside className="w-64 hidden lg:block border-r bg-base-100">
                <Sidebar/>
            </aside>

            {/* Main Area */}
            <main className="flex-1 bg-base-100 p-6">
                {children}
            </main>
        </div>
    );
}
