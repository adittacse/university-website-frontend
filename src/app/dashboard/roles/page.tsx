"use client";

import { useCallback, useEffect, useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import RoleForm from "@/components/dashboard/RoleForm";
import EditRoleModal from "@/components/dashboard/EditRoleModal";
import { getRoles, deleteRole } from "@/services/role.service";
import { Role } from "@/types/role";

export default function AdminRolesPage() {
    const [roles, setRoles] = useState<Role[]>([]);
    const [search, setSearch] = useState("");
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [editingRole, setEditingRole] = useState<Role | null>(null);

    const loadData = useCallback(async () => {
        const res = await getRoles({ search });
        setRoles(res);
        setSelectedIds([]);
    }, [search]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const toggleAll = (checked: boolean) => {
        setSelectedIds(checked ? roles.map(r => r._id) : []);
    };

    const bulkDelete = async () => {
        if (!confirm("Delete selected roles?")) return;
        await Promise.all(selectedIds.map(id => deleteRole(id)));
        loadData();
    };

    return (
        <DashboardLayout>
            <h1 className="text-2xl font-bold mb-4">Roles</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* LEFT */}
                <RoleForm onCreated={loadData} />

                {/* RIGHT */}
                <div className="md:col-span-2">
                    <div className="flex justify-between mb-3">
                        <div className="flex gap-2">
                            <select
                                className="select select-sm select-bordered"
                                onChange={e => {
                                    if (e.target.value === "delete") bulkDelete();
                                }}
                            >
                                <option>Bulk actions</option>
                                <option value="delete">Delete</option>
                            </select>
                            <button className="btn btn-sm">Apply</button>
                        </div>

                        <input
                            type="text"
                            placeholder="Search roles"
                            className="input input-sm input-bordered"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    <table className="table table-zebra w-full">
                        <thead>
                        <tr>
                            <th>
                                <input
                                    type="checkbox"
                                    checked={
                                        roles.length > 0 &&
                                        selectedIds.length === roles.length
                                    }
                                    onChange={e => toggleAll(e.target.checked)}
                                />
                            </th>
                            <th>Name</th>
                        </tr>
                        </thead>

                        <tbody>
                        {roles.map(role => (
                            <tr key={role._id}>
                                <td>
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.includes(role._id)}
                                        onChange={e =>
                                            setSelectedIds(prev =>
                                                e.target.checked
                                                    ? [...prev, role._id]
                                                    : prev.filter(id => id !== role._id)
                                            )
                                        }
                                    />
                                </td>

                                <td className="group">
                                    <span className="font-medium text-blue-600 cursor-pointer capitalize">
                                        {role.name}
                                    </span>

                                    <div className="text-sm opacity-0 group-hover:opacity-100 flex gap-2 mt-1">
                                        <button
                                            className="text-blue-600 cursor-pointer"
                                            onClick={() => setEditingRole(role)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="text-red-600 cursor-pointer"
                                            onClick={() =>
                                                deleteRole(role._id).then(loadData)
                                            }
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {roles.length === 0 && (
                        <div className="text-center text-gray-500 py-6">
                            No roles found
                        </div>
                    )}
                </div>

                {editingRole && (
                    <EditRoleModal
                        role={editingRole}
                        onClose={() => setEditingRole(null)}
                        onUpdated={loadData}
                    />
                )}
            </div>
        </DashboardLayout>
    );
}
