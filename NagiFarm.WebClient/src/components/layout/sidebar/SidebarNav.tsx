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
                        className={`group flex items-center rounded-xl py-2.5 text-sm transition-all duration-300 ${collapsed ? "justify-center px-2.5 gap-0" : "px-3.5 gap-3"
                            } ${active
                                ? "bg-nagi-magenta font-semibold text-white shadow-sm shadow-nagi-magenta/25"
                                : "font-medium text-zinc-600 hover:bg-nagi-magenta-100/80 hover:text-nagi-magenta-700"
                            }`}
                    >
                        <Icon className={`h-4 w-4 shrink-0 transition ${active ? "text-white" : "text-zinc-600 group-hover:text-nagi-magenta-700 "}`} />
                        <span
                            className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${collapsed ? "max-w-0 opacity-0" : "max-w-[160px] opacity-100" }`}
                        >
                            {item.label}
                        </span>
                    </Link>
                );
            })}
        </nav>
    );
}