import { LogOut } from "lucide-react";
import { User } from "@/types/auth";

interface SidebarAccountProps {
    collapsed?: boolean;
    user: User | null;
    initials: string;
    onLogout: () => void;
}

export function SidebarAccount({
    collapsed = false,
    user,
    initials,
    onLogout,
}: SidebarAccountProps) {
    return (
        <div className="mt-6 space-y-1.5 border-t border-zinc-200 pt-4">
            <div
                title={collapsed ? (user?.name ?? "Pengguna") : undefined}
                className="flex items-center gap-2.5 overflow-hidden rounded-xl bg-nagi-surface py-2"
            >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-nagi-magenta text-xs font-bold text-white">
                    {initials}
                </div>

                <div
                    className={`min-w-0 whitespace-nowrap leading-tight transition-opacity duration-200 ${collapsed ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <p className="truncate text-sm font-semibold text-zinc-800">
                        {user?.name ?? "Pengguna"}
                    </p>
                    <p className="truncate text-xs font-medium capitalize text-nagi-leaf">
                        {user?.role ?? "Owner"}
                    </p>
                </div>
            </div>
        </div>
    );
}