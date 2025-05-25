'use client';

import Link from "next/link";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

const navItems = [
    { label:'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: 'my-journey' },
]

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => (
                <Link
                    href={href}
                    key={label}
                    className={cn(pathname === href ? 'text-primary hover:text-emerald-600 transition-colors font-medium border-b-2 border-emerald-600 pb-1':'text-gray-500')}
                >
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems
