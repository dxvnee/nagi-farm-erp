import Link from "next/link";
import { NAV_ITEMS } from "@/config/navigation";

interface SidebarNavProps {
    collapsed?: boolean,
    isActive: (href: string) => boolean;
    onNavigate?: () => void;
}

export function SidebarNav({ collapsed = false, isActive, onNavigate }: SidebarNavProps) {
    return (
        <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onNavigate}
                        title={collapsed ? item.label : undefined}
                        className={`group flex items-center gap-3 overflow-hidden rounded-xl px-5 py-2.5 text-sm transition-colors ${active
                                ? "bg-nagi-magenta font-semibold text-white shadow-sm shadow-nagi-magenta/25"
                                : "font-medium text-zinc-600 hover:bg-nagi-magenta-100/80 hover:text-nagi-magenta-700"
                            }`}
                    >
                        <Icon
                            className={`h-4 w-4 shrink-0 transition-colors ${active ? "text-white" : "text-zinc-400 group-hover:text-nagi-magenta-700"
                                }`}
                        />
                        <span
                            className={`whitespace-nowrap transition-opacity duration-200 ${collapsed ? "opacity-0" : "opacity-100"
                                }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}