"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/axios";

export default function Navbar() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        api.get("/auth/me")
            .then((res) => setUser(res.data))
            .catch(() => setUser(null));
    }, []);

    const logout = async () => {
        await api.post("/auth/logout");
        location.href = "/";
    };

    return (
        <div className="navbar bg-base-100 shadow">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost text-xl">
                    University
                </Link>
            </div>

            <div className="flex-none gap-2">
                {user ? (
                    <>
                        <Link
                            href="/dashboard/upload-notice"
                            className="btn btn-sm"
                        >
                            Dashboard
                        </Link>

                        <button
                            className="btn btn-sm btn-outline"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link
                            href="/login"
                            className="btn btn-sm btn-primary"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="btn btn-sm btn-outline"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
