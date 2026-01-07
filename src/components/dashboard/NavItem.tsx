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
                isActive ? "text-primary" : "btn-ghost"
            }`}
        >
            {children}
        </Link>
    );
}