"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";
import Image from "next/image";

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden flex">
        <MenuIcon className="text-black" />
      </SheetTrigger>
      <SheetContent className="!m-0 !p-0">
        <SheetHeader className="border-b-2 border-emerald-600/50">
          <SheetTitle>
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <Image
                  src="/images/logo.svg"
                  alt="logo"
                  width={40}
                  height={40}
                  className=""
                />
              </div>
            </Link>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col items-start px-5 gap-4">
          {navItems.map(({ label, href }) => (
            <Link
              href={href}
              key={label}
              className={cn(
                pathname === href
                  ? "text-primary bg-emerald-100 w-full px-4 py-2 rounded-md shadow-md shadow-emerald-100 transition-colors font-medium border-b-2 border-emerald-600/50 pb-1"
                  : "text-gray-500 hover:bg-emerald-100 w-full px-4 py-2 rounded-md hover:shadow-md shadow-emerald-100 transition-colors"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
