"use client";

import { useCallback, useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
    getAdminNotices,
    getNoticeCounts,
    softDeleteNotice,
    restoreNotice,
    bulkRestoreNotice,
    permanentDeleteNotices,
} from "@/services/adminNotice.service";
import Link from "next/link";
import Swal from "sweetalert2";

export default function AdminNoticesPage() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);
    const [bulkAction, setBulkAction] = useState("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [data, setData] = useState<any>(null);
    const [counts, setCounts] = useState({
        published: 0,
        trash: 0,
    });

    const loadData =  useCallback(async () => {
        const res = await getAdminNotices({
            page,
            search,
            isDeleted,
        });
        setData(res);
    }, [page, search, isDeleted]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadData();
        getNoticeCounts().then(setCounts);
    }, [loadData]);

    const handleRestore = async (ids: string | string[]) => {
        try {
            if (Array.isArray(ids)) {
                await bulkRestoreNotice(ids);
            } else {
                await restoreNotice(ids);
            }

            await loadData();
            await getNoticeCounts();
        } catch (err) {
            console.error(err);
        }
    };

    const toggleAll = (checked: boolean) => {
        if (checked) {
            setSelectedIds(data.data.map((n: any) => n._id));
        } else {
            setSelectedIds([]);
        }
    };

    const applyBulkAction = async () => {
        if (!bulkAction) {
            alert("Please select a bulk action");
            return;
        }

        if (selectedIds.length === 0) {
            alert("Please select at least one notice");
            return;
        }

        try {
            if (bulkAction === "trash") {
                // published → trash
                await Promise.all(
                    selectedIds.map(id => softDeleteNotice(id))
                );
            }

            if (bulkAction === "restore") {
                await bulkRestoreNotice(selectedIds);
            }

            if (bulkAction === "delete") {
                if (!confirm("Are you sure? This cannot be undone.")) return;
                await permanentDeleteNotices(selectedIds);
            }

            // reset UI
            setSelectedIds([]);
            setBulkAction("");

            // reload table + counts
            await loadData();
            await getNoticeCounts();

        } catch (err) {
            console.error(err);
            alert("Bulk action failed");
        }
    };

    if (!data) {
        return <p>Loading Data...</p>;
    }

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">Notices</h1>

            {/* Published / Trash tabs */}
            <div className="flex gap-4 border-b mb-4">
                <button
                    className={!isDeleted ? "font-bold" : "text-gray-500"}
                    onClick={() => {
                        setIsDeleted(false);
                        setPage(1);
                    }}
                >
                    Published ({counts.published})
                </button>

                <button
                    className={isDeleted ? "font-bold" : "text-gray-500"}
                    onClick={() => {
                        setIsDeleted(true);
                        setPage(1);
                        setSelectedIds([]);
                    }}
                >
                    Trash ({counts.trash})
                </button>
            </div>


            {/* Top toolbar */}
            <div className="flex justify-between items-center mb-3">
                <div className="flex gap-2">
                    <select
                        className="select select-sm select-bordered"
                        value={bulkAction}
                        onChange={e => setBulkAction(e.target.value)}
                    >
                        <option value="">Bulk actions</option>

                        {!isDeleted && (
                            <option value="trash">Move to Trash</option>
                        )}

                        {isDeleted && (
                            <>
                                <option value="restore">Restore</option>
                                <option value="delete">Delete Permanently</option>
                            </>
                        )}
                    </select>

                    <button className="btn btn-sm" onClick={applyBulkAction}>
                        Apply
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Search notices"
                    className="input input-sm input-bordered"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                />
            </div>

            {/* Table */}
            <table className="table table-zebra w-full">
                <thead>
                <tr>
                    <th>
                        <input
                            type="checkbox"
                            checked={data?.data?.length > 0 && selectedIds.length === data.data.length}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setSelectedIds(data.data.map((n: any) => n._id));
                                } else {
                                    setSelectedIds([]);
                                }
                            }}
                        />
                    </th>
                    <th>SL.</th>
                    <th>Title</th>
                    <th>Categories</th>
                    <th>Author</th>
                    <th>Created Date</th>
                    <th>Updated Date</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {data?.data?.map((n: any, index) => (
                    <tr key={n._id}>
                        <td>
                            <input
                                type="checkbox"
                                checked={selectedIds.includes(n._id)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedIds(prev => [...prev, n._id]);
                                    } else {
                                        setSelectedIds(prev => prev.filter(id => id !== n._id));
                                    }
                                }}
                            />
                        </td>
                        <td>{index + 1}</td>

                        <td>
                            <div className="group">
                                <span className="font-medium">{n.title}</span>

                                <div className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 flex gap-2 mt-1">

                                </div>
                            </div>
                        </td>

                        <td>{n.categories.map((c: any) => c.name).join(", ")}</td>
                        <td>{n?.createdBy?.name}</td>
                        <td>{new Date(n.createdAt).toLocaleString()}</td>
                        <td>{new Date(n.updatedAt).toLocaleString()}</td>
                        <td className="flex items-center gap-5">
                            <Link className="btn btn-secondary btn-sm"
                                    href={`/notices/${n._id}`}
                            >
                                View
                            </Link>

                            {!isDeleted && (
                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={async () => {
                                        const result = await Swal.fire({
                                            title: "Are you sure?",
                                            text: "You will be able to restore this from Trash!",
                                            icon: "warning",
                                            showCancelButton: true,
                                            confirmButtonText: "Yes, move to Trash",
                                        });

                                        if (!result.isConfirmed) return;

                                        await softDeleteNotice(n._id);

                                        await Swal.fire({
                                            icon: "success",
                                            title: "Moved to Trash",
                                            timer: 1200,
                                            showConfirmButton: false,
                                        });

                                        await loadData();
                                        await getNoticeCounts();
                                    }}
                                >
                                    Trash
                                </button>
                            )}

                            {isDeleted && (
                                <div className="flex items-center gap-5">
                                    <button className="btn btn-sm btn-primary"
                                            onClick={() => handleRestore(n._id)}
                                    >
                                        Restore
                                    </button>
                                    <button className="btn btn-sm btn-error"
                                            onClick={() =>
                                                permanentDeleteNotices([n._id]).then(loadData)
                                            }
                                    >
                                        Delete Permanently
                                    </button>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination bottom */}
            <div className="flex justify-between items-center mt-4">
                <span>{data?.pagination?.total} items</span>

                <div className="flex gap-2">
                    <button
                        className="btn btn-sm"
                        disabled={page === 1}
                        onClick={() => setPage(p => p - 1)}
                    >
                        «
                    </button>

                    <span>
                        {page} of {data?.pagination?.totalPages}
                    </span>

                    <button
                        className="btn btn-sm"
                        disabled={page === data?.pagination?.totalPages}
                        onClick={() => setPage(p => p + 1)}
                    >
                        »
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
