"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { NavItem } from "@/components/dashboard/NavItem";

export default function Navbar() {
    const { data: session, status } = useSession();

    const role = session?.user?.role;
    const isAuthenticated = status === "authenticated";

    const handleLogOut = async () => {
        await signOut({
            callbackUrl: "/",
        });
    };

    const links = <>
        <li>
            <NavItem href="/">Home</NavItem>
        </li>
        <li>
            <NavItem href="/notices">All Notice</NavItem>
        </li>
        <li>
            <NavItem href="/about">About</NavItem>
        </li>
        <li>
            <NavItem href="/contact">Contact</NavItem>
        </li>
        {
            (role === "admin" || role === "teacher") && <li>
                <NavItem href="/dashboard">Dashboard</NavItem>
            </li>
        }
    </>

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-base-100 shadow-sm px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">XYZ University</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        isAuthenticated ? (
                            <button
                                className="btn btn-sm btn-error"
                                onClick={handleLogOut}
                            >
                                Logout
                            </button>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/login"
                                    className="btn btn-sm btn-primary"
                                >
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="btn btn-sm btn-warning"
                                >
                                    Register
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
