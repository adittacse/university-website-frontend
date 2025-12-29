"use client";

import { useState } from "react";
import { useAuditLogs } from "@/hooks/useAuditLogs";
import { useAdmins } from "@/hooks/useAdmins";
import SectionLoader from "@/components/ui/SectionLoader";

export default function AuditLogTable() {

    const [filters, setFilters] = useState({
        page: 1,
        limit: 20,
        action: "",
        admin: "",
        targetType: "",
        from: "",
        to: "",
    });

    const { admins, loading: adminLoading } = useAdmins();
    const { data, loading } = useAuditLogs(filters);

    if (loading || adminLoading) {
        return <SectionLoader />;
    }

    return (
        <div className="space-y-6">

            {/* 🔍 FILTER BAR */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

                {/* Action */}
                <select
                    className="select select-bordered"
                    value={filters.action}
                    onChange={(e) =>
                        setFilters({ ...filters, action: e.target.value, page: 1 })
                    }
                >
                    <option value="">All Actions</option>
                    <option value="NOTICE_CREATE">NOTICE_CREATE</option>
                    <option value="NOTICE_UPDATE">NOTICE_UPDATE</option>
                    <option value="NOTICE_DELETE">NOTICE_DELETE</option>
                    <option value="NOTICE_RESTORE">NOTICE_RESTORE</option>
                </select>

                {/* Admin */}
                <select
                    className="select select-bordered"
                    value={filters.admin}
                    onChange={(e) =>
                        setFilters({ ...filters, admin: e.target.value, page: 1 })
                    }
                >
                    <option value="">All Admins</option>
                    {admins.map((a) => (
                        <option key={a._id} value={a._id}>
                            {a.name}
                        </option>
                    ))}
                </select>

                {/* Target */}
                <select
                    className="select select-bordered"
                    value={filters.targetType}
                    onChange={(e) =>
                        setFilters({ ...filters, targetType: e.target.value, page: 1 })
                    }
                >
                    <option value="">All Targets</option>
                    <option value="Notice">Notice</option>
                    <option value="User">User</option>
                </select>

                {/* From */}
                <input
                    type="date"
                    className="input input-bordered"
                    value={filters.from}
                    onChange={(e) =>
                        setFilters({ ...filters, from: e.target.value, page: 1 })
                    }
                />

                {/* To */}
                <input
                    type="date"
                    className="input input-bordered"
                    value={filters.to}
                    onChange={(e) =>
                        setFilters({ ...filters, to: e.target.value, page: 1 })
                    }
                />

                {/* Reset */}
                <button
                    className="btn btn-outline"
                    onClick={() =>
                        setFilters({
                            page: 1,
                            limit: 20,
                            action: "",
                            admin: "",
                            targetType: "",
                            from: "",
                            to: "",
                        })
                    }
                >
                    Reset
                </button>
            </div>

            {/* 📋 TABLE */}
            <div className="overflow-x-auto bg-base-100 shadow rounded">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>Sl.</th>
                        <th>Admin</th>
                        <th>Action</th>
                        <th>Target</th>
                        <th>Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.data?.map((log: any, index: number) => (
                        <tr key={log._id}>
                            <td>{index + 1}</td>
                            <td>
                                <div className="font-medium">{log.admin?.name}</div>
                                <div className="text-xs text-gray-500">
                                    {log?.admin?.email}
                                </div>
                            </td>
                            <td className="capitalize">
                                {log?.action?.toLowerCase().split("_").join(" ")}
                            </td>
                            <td>{log?.targetType}</td>
                            <td>
                                {
                                    new Date(log?.createdAt).toLocaleString("en-BD", {
                                        dateStyle: "medium",
                                        timeStyle: "short",
                                    })
                                }
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
