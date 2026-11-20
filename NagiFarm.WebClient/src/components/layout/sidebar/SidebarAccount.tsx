import { LogOut } from "lucide-react";
import { User } from "@/types/auth";

interface SidebarAccountProps {
    collapsed?: boolean,
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
        <div className="mt-6 border-t border-zinc-200 pt-4">
            <div
                className={`flex items-center rounded-xl bg-nagi-surface transition-all duration-300 ${collapsed
                    ? "flex-col gap-2 px-1.5 py-2.5"
                    : "justify-between gap-2 px-3 py-2.5"
                    }`}
            >
                <div
                    className={`flex min-w-0 items-center ${collapsed ? "justify-center gap-0" : "gap-2.5"
                        }`}
                >
                    <div
                        title={collapsed ? (user?.name ?? "Pengguna") : undefined}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-nagi-magenta text-xs font-bold text-white"
                    >
                        {initials}
                    </div>

                    <div
                        className={`overflow-hidden whitespace-nowrap leading-tight transition-all duration-300 ${collapsed ? "max-w-0 opacity-0" : "max-w-[120px] opacity-100"
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

                <button
                    type="button"
                    onClick={onLogout}
                    title="Keluar"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-rose-50 hover:text-rose-600"
                >
                    <LogOut className="h-4 w-4" />
                </button>
            </div>
        </div>
    );
}