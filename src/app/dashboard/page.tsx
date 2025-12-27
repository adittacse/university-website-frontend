"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getAdminDashboard } from "@/services/adminDashboard.service";
import { DashboardData } from "@/types/dashboardData";
import StatCard from "@/components/dashboard/StatCard";
import MetricBox from "@/components/dashboard/MetricBox";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import SectionLoader from "@/components/ui/SectionLoader";

export default function DashboardOverviewPage() {
    const [data, setData] = useState<DashboardData | null>(null);

    useEffect(() => {
        getAdminDashboard().then(setData);
    }, []);

    if (!data) {
        return (
            <DashboardLayout>
                <h1 className="text-2xl font-bold mb-10">Admin Overview</h1>

                <SectionLoader />
            </DashboardLayout>
        );
    }

    const { metrics, stats, analytics } = data;

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-10">Admin Overview</h1>

            {/* ================= METRICS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <StatCard
                    title="Total Users"
                    value={metrics?.users?.total || 0}
                    link="/dashboard/users"
                />

                <StatCard
                    title="Total Notices"
                    value={metrics?.notices?.total || 0}
                    link="/dashboard/notices"
                />

                <StatCard
                    title="Active Notices"
                    value={metrics?.notices?.active || 0}
                    link="/dashboard/notices"
                />

                <StatCard
                    title="Deleted Notices"
                    value={metrics?.notices?.deleted || 0}
                    link="/dashboard/notices?tab=trash"
                />
            </div>

            {/* ================= FILE METRICS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <MetricBox
                    title="Total Downloads"
                    value={metrics?.files?.totalDownloads || 0}
                />
                <MetricBox
                    title="Total Views"
                    value={metrics?.files?.totalViews || 0}
                />
            </div>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h2 className="font-semibold mb-2">
                            Most Downloaded Notice
                        </h2>

                        {stats.mostDownloadedNotice ? (
                            <>
                                <p className="font-medium">
                                    {stats?.mostDownloadedNotice?.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Downloads:{" "}
                                    {stats?.mostDownloadedNotice?.downloadCount}
                                </p>
                            </>
                        ) : (
                            <p className="text-gray-500">
                                No data available
                            </p>
                        )}
                    </div>
                </div>

                <div className="card bg-base-100 shadow">
                    <div className="card-body">
                        <h2 className="font-semibold mb-2">
                            Most Viewed Notice
                        </h2>

                        {stats.mostViewedNotice ? (
                            <>
                                <p className="font-medium">
                                    {stats?.mostViewedNotice?.title}
                                </p>
                                <p className="text-sm text-gray-500">
                                    Views:{" "}
                                    {stats.mostViewedNotice?.viewCount}
                                </p>
                            </>
                        ) : (
                            <p className="text-gray-500">
                                No data available
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* ================= ANALYTICS (RECHARTS) ================= */}
            <div className="card bg-base-100 shadow">
                <div className="card-body">
                    <h2 className="font-semibold mb-4">
                        Downloads (Last 7 Days)
                    </h2>

                    {analytics?.downloadsLast7Days?.length === 0 ? (
                        <p className="text-gray-500">
                            No analytics data
                        </p>
                    ) : (
                        <div className="h-72">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart
                                    data={analytics?.downloadsLast7Days}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="date"/>
                                    <YAxis allowDecimals={false}/>
                                    <Tooltip/>
                                    <Line
                                        type="monotone"
                                        dataKey="count"
                                        stroke="#4f46e5"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
}
