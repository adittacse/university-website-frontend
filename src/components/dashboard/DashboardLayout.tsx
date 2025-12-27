"use client";

import { useLoading } from "@/context/LoadingContext";
import Sidebar from "./Sidebar";
import GlobalLoader from "@/components/ui/GlobalLoader";

export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    const { loading } = useLoading();

    return (
        <div className="flex min-h-screen bg-base-200">
            <Sidebar/>

            {/* Main Area */}
            <main className="flex-1 p-4 md:p-6">
                {loading && <GlobalLoader />}
                {children}
            </main>
        </div>
    );
}
