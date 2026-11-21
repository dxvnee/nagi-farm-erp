"use client";

import Link from "next/link";
import { ChevronLeft, Menu, X } from "lucide-react";
import { useSidebar } from "@/hooks/useSidebar";
import { SidebarBrand } from "./SidebarBrand";
import { SidebarNav } from "./SidebarNav";
import { SidebarAccount } from "./SidebarAccount";

export function Sidebar() {
    const { mobileOpen, collapsed, toggleCollapse, setMobileOpen, user, initials, isActive, handleLogout } = useSidebar();

    const closeMobile = () => setMobileOpen(false);

    const renderContent = (isCollapsed: boolean) => (
        <div className="border border-r-nagi-magenta-400 flex h-full flex-col justify-between overflow-hidden bg-white px-3 py-6">
            <div>
                <SidebarBrand collapsed={collapsed} onNavigate={closeMobile} />
                <SidebarNav collapsed={collapsed} isActive={isActive} onNavigate={closeMobile} />
            </div>

            <SidebarAccount
                collapsed={collapsed}
                user={user}
                initials={initials}
                onLogout={handleLogout}
            />
        </div>
    );

    return (
        <>
            <div className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-zinc-200/80 bg-white px-4 lg:hidden">
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/nagi_farm_logo_nagi.png"
                        alt="NAGI Dragonfruit"
                        className="h-25 w-25 object-contain"
                    />
                </Link>
                <button
                    type="button"
                    onClick={() => setMobileOpen(true)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600"
                    aria-label="Buka Menu"
                >
                    <Menu className="h-5 w-5" />
                </button>
            </div>

            <aside
                className={`relative hidden shrink-0 border-r border-zinc-200/70 bg-white transition-[width] duration-300 ease-in-out lg:sticky lg:top-0 lg:block lg:h-screen ${collapsed ? "w-20" : "w-64"
                    }`}
            >
                <button
                    type="button"
                    onClick={toggleCollapse}
                    aria-label={collapsed ? "Perluas sidebar" : "Ciutkan sidebar"}
                    className="absolute -right-3 top-12 z-10 flex h-6 w-6 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-500 shadow-xs transition hover:border-nagi-magenta-300 hover:text-nagi-magenta"
                >
                    <ChevronLeft
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${collapsed ? "rotate-180" : "rotate-0"
                            }`}
                    />
                </button>

                {renderContent(collapsed)}
            </aside>

            {mobileOpen && (
                <div className="fixed inset-0 z-50 flex lg:hidden">
                    <div
                        className="fixed inset-0 bg-zinc-900/40 backdrop-blur-xs"
                        onClick={closeMobile}
                    />
                    <div className="relative z-10 flex w-64 max-w-[80vw] flex-col bg-white shadow-xl">
                        {renderContent(collapsed)}
                    </div>
                </div>
            )}
        </>
    );
}