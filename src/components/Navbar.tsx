"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <div className="navbar bg-base-100 shadow">
            <div className="flex-1">
                <Link href="/public" className="btn btn-ghost text-xl">
                    University
                </Link>
            </div>

            <div className="flex-none gap-2">
                {
                    session ? (
                        <>
                            <span className="text-sm">{session.user?.email}</span>
                            <button className="btn btn-error btn-sm" onClick={() => signOut()}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <button className="btn btn-primary btn-sm" onClick={() => signIn("google")}>
                            Login with Google
                        </button>
                    )
                }
            </div>
        </div>
    );
}
