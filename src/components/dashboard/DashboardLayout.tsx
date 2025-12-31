"use client";

import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
// import GlobalLoader from "@/components/ui/GlobalLoader";
import SectionLoader from "@/components/ui/SectionLoader";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import type { UserRole } from "@/types/role";

type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
    const router = useRouter();
    const { data: session, status } = useSession();

    // Dashboard access roles

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const allowedRoles: UserRole[] = ["admin", "teacher"];

    useEffect(() => {
        if (status === "loading") {
            return;
        }

        // Not logged in
        if (!session) {
            router.replace("/login");
            return;
        }

        // Role not allowed
        if (!allowedRoles.includes(session.user.role)) {
            router.replace("/");
            return;
        }
    }, [session, status, router, allowedRoles]);

    // 🔄 Auth check loader
    if (status === "loading" || !session) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <SectionLoader />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-base-200">
            {/* Sidebar */}
            <Sidebar role={session.user.role} />

            {/* Main Area */}
            <main className="flex-1 p-4 md:p-6">
                {/*<GlobalLoader />*/}
                {children}
            </main>
        </div>
    );
}
