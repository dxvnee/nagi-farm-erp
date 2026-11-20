import { authService } from "@/services/authServices";
import { User } from "@/types/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useSidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const raw = localStorage.getItem("nagi_user");
        if (raw) {
            try {
                setUser(JSON.parse(raw));
            } catch {
                setUser(null);
            }
        }
    }, []);

    function toggleCollapse() {
        setCollapsed((prev) => !prev);
    }

    function handleLogout() {
        authService.clearSession();
        router.push("/login");
    }

    function isActive(href: string) {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    }

    const initials = user?.name
        ? user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "NF";

    return {
        mobileOpen,
        setMobileOpen,
        collapsed,
        toggleCollapse,
        user,
        initials,
        isActive,
        handleLogout,
    }
}