"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
    href: string;
    children: React.ReactNode;
};

export function NavItem({ href, children }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`font-bold  ${
<<<<<<< HEAD
                isActive ? "text-cyan-500" : "text-gray-700 hover:text-cyan-500"
=======
                isActive ? "text-primary" : "btn-ghost"
>>>>>>> 4fba2396524211f47ea000b97c8da93261a1ffa1
            }`}
        >
            {children}
        </Link>
    );
}
