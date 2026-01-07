"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { NavItem } from "@/components/dashboard/NavItem";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const {data: session, status} = useSession();
    const pathname = usePathname();

    if (pathname.startsWith("/dashboard")) {
        return <></>;
    }

    const role = session?.user?.role;
    const isAuthenticated = status === "authenticated";

    const handleLogOut = async () => {
        await signOut({callbackUrl: "/"});
    };

    const links = (
        <>
            <li><NavItem href="/">Home</NavItem></li>
            <li><NavItem href="/notices">All Notice</NavItem></li>
            <li><NavItem href="/about">About</NavItem></li>
            <li><NavItem href="/contact">Contact</NavItem></li>

            {(role === "admin" || role === "teacher") && (
                <li><NavItem href="/dashboard">Dashboard</NavItem></li>
            )}
        </>
    );

    return (
        <div className="sticky top-0 z-50 bg-base-100">
            <div className="navbar shadow-sm  px-4">

                {/* Navbar start */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link href="/" className="btn btn-ghost text-lg md:text-2xl font-bold">
                        XYZ <span className="text-primary">University</span>
                    </Link>
                </div>

                {/* Navbar center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3">
                        {links}
                    </ul>
                </div>

                {/* Navbar end */}
                <div className="navbar-end">
                    {isAuthenticated ? (
                        <button
                            onClick={handleLogOut}
                            className="btn btn-sm btn-error"
                        >
                            Logout
                        </button>
                    ) : (
                        <div className="flex gap-2">
                            <Link href="/login" className="btn btn-sm btn-primary">
                                Login
                            </Link>
                            <Link href="/register" className="btn btn-sm btn-warning">
                                Register
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}