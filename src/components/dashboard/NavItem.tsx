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
                isActive ? "text-cyan-500" : "text-gray-700 hover:text-cyan-500"
            }`}
        >
            {children}
        </Link>
    );
}
