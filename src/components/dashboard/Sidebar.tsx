"use client";

import Link from "next/link";
import api from "@/lib/axios";
import { NavItem } from "@/components/dashboard/NavItem";

export default function Sidebar() {
    const logout = async () => {
        try {
            await api.post("/auth/logout");
        } catch (error) {
            // even if backend fails, logout locally
        }

        localStorage.removeItem("token");
        location.href = "/";
    };

    return (
        <aside className="w-64 bg-base-100 border-r hidden md:block">
            <div className="p-4 border-b">
                <Link href="/" className="font-bold text-xl flex items-center gap-2 mb-5">
                    <span className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
                        UWB
                    </span>
                    <span>University Website <br/>Dashboard</span>
                </Link>

                {/*<p className="text-xs text-gray-500 mt-1">*/}
                {/*    {role && role.toUpperCase()}*/}
                {/*    {isPremium && " • PREMIUM"}*/}
                {/*    {isBlocked && " • BLOCKED"}*/}
                {/*</p>*/}
            </div>

            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <NavItem href="/dashboard">Overview</NavItem>
                    </li>
                    <li>
                        <NavItem href="/dashboard/audit-logs">Audit Logs</NavItem>
                    </li>
                    <li>
                        <NavItem href="/dashboard/notices">All Notice</NavItem>
                    </li>
                    <li>
                        <NavItem href="/dashboard/upload-notice">Upload Notice</NavItem>
                    </li>
                    <li>
                        <NavItem href="/dashboard/categories">Manage Categories</NavItem>
                    </li>
                    <li>
                        <NavItem href="/dashboard/roles">Manage Roles</NavItem>
                    </li>
                    <li>
                        <NavItem href="/dashboard/users">Manage Users</NavItem>
                    </li>
                    <li>
                        <button className="btn btn-sm btn-error btn-block mt-4" onClick={logout}>
                            Logout
                        </button>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
