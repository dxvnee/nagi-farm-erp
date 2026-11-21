import Link from "next/link";

interface SidebarBrandProps {
    collapsed?: boolean;
    onNavigate?: () => void;
}

export function SidebarBrand({
    collapsed = false,
    onNavigate,
}: SidebarBrandProps) {
    return (
        <Link
            href="/"
            onClick={onNavigate}
            className="relative mb-7 block h-16 w-full overflow-hidden"
        >
            <img
                src="/nagi_farm_logo.png"
                alt="NAGI Dragonfruit"
                className={`absolute left-1 top-1/2 h-18 w-50 max-w-none -translate-y-1/2 object-contain object-left transition-opacity duration-200 ${collapsed ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
            />

            <img
                src="/nagi_farm_icon.png"
                alt="NAGI Dragonfruit"
                className={`absolute left-2 top-1/2 h-10 w-10 -translate-y-1/2 object-contain transition-opacity duration-200 ${collapsed ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
            />
        </Link>
    );
}