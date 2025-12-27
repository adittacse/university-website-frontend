"use client";

import { useCallback, useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Swal from "sweetalert2";
import {
    getUsers,
    updateUserRole,
    deleteUser,
} from "@/services/adminUser.service";
import { Role } from "@/types/role";
import { User } from "@/types/user";
import { Pagination } from "@/types/pagination";
import { getRoles } from "@/services/role.service";

type UsersResponse = {
    data: User[];
    pagination: Pagination;
};

export default function AdminUsersPage() {
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [data, setData] = useState<UsersResponse>(null);
    const [roles, setRoles] = useState<Role[]>([]);

    const loadData = useCallback(async () => {
        const res = await getUsers({ page, search });
        setData(res);
    }, [page, search]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        loadData().then();
        getRoles().then(setRoles);
    }, [loadData]);

    const handleRoleChange = async (user: User, newRoleId: string) => {
        const oldRoleId = user?.role?._id;

        if (newRoleId === oldRoleId) return;

        const result = await Swal.fire({
            title: "Change user role?",
            html: `
            <b>${user.name}</b><br/>
            ${user.role.name} → ${roles.find(r => r._id === newRoleId)?.name}
        `,
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, change",
            cancelButtonText: "Cancel",
        });

        if (!result.isConfirmed) {
            await loadData(); // ⬅️ revert dropdown
            return;
        }

        try {
            await updateUserRole(user._id, newRoleId);

            await Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Role updated",
                showConfirmButton: false,
                timer: 1500,
            });

            await loadData();
        } catch (error: any) {
            await Swal.fire(
                "Error",
                error?.response?.data?.message || "Failed to update role",
                "error"
            );
            await loadData(); // revert
        }
    };

    // if (!data) {
    //     return <p>Loading users...</p>;
    // }

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">Users</h1>

            {/* Top bar */}
            <div className="flex justify-between mb-3">
                <input
                    type="text"
                    placeholder="Search users"
                    className="input input-sm input-bordered"
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                />
            </div>

            {/* Table */}
            <table className="table table-zebra w-full">
                <thead>
                <tr>
                    <th>SL</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Change Role</th>
                    <th>Created Date</th>
                    <th>Actions</th>
                </tr>
                </thead>

                <tbody>
                {data?.data?.map((user: User, index: number) => (
                    <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td className="capitalize">{user?.role?.name}</td>
                        <td>
                            <select
                                className="select select-bordered capitalize"
                                value={user?.role?._id}
                                onChange={(e) =>
                                    handleRoleChange(user, e.target.value)
                                }
                            >
                                {roles.map((role: Role) => (
                                    <option key={role._id} value={role._id} className="capitalize">
                                        {role.name}
                                    </option>
                                ))}
                            </select>
                        </td>
                        <td>{new Date(user?.createdAt).toLocaleString()}</td>
                        <td>
                            <button
                                className="btn btn-sm btn-error"
                                onClick={async () => {
                                    const result = await Swal.fire({
                                        title: "Delete user?",
                                        text: "This user will be removed",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonText: "Yes, delete",
                                    });

                                    if (!result.isConfirmed) return;

                                    await deleteUser(user._id);

                                    await Swal.fire({
                                        icon: "success",
                                        title: "User deleted",
                                        timer: 1500,
                                        showConfirmButton: false,
                                    });

                                    await loadData();
                                }}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
                <span>{data?.pagination?.total} users</span>

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
