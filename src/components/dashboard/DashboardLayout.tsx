"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import GlobalLoader from "@/components/ui/GlobalLoader";
import { useRouter } from "next/navigation";
import api from "@/lib/axios";
import SectionLoader from "@/components/ui/SectionLoader";

type Props = {
    children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
    // const { loading } = useLoading();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const res = await api.get("/auth/me");

                // 🔐 role check
                if (res.data?.role?.name !== "admin") {
                    router.replace("/"); // or /notices
                    return;
                }

                setLoading(false);
            } catch (error) {
                // not logged in
                router.replace("/login");
            }
        };

        checkAdmin();
    }, [router]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <SectionLoader />
            </div>
        );
    }

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
