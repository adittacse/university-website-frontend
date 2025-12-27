"use client";

import Sidebar from "./Sidebar";

export default function DashboardLayout({
        children,
    }: {
        children: React.ReactNode;
    }) {
    return (
        <div className="flex min-h-screen bg-base-200">
            <Sidebar/>

            {/* Main Area */}
            <main className="flex-1 p-4 md:p-6">
                {children}
            </main>
        </div>
    );
}
