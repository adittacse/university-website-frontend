"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import AuditLogTable from "@/components/dashboard/AuditLogTable";

export default function AuditLogsPage() {
    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-6">Audit Logs</h1>
            <AuditLogTable />
        </DashboardLayout>
    );
}
