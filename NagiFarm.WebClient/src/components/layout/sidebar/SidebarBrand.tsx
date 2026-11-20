import Link from "next/link";

interface SidebarBrandProps {
    collapsed?: boolean;
    onNavigate?: () => void;
}

export function SidebarBrand({ collapsed = false, onNavigate }: SidebarBrandProps) {
    return (
        <Link
            href="/"
            onClick={onNavigate}
            className={`mb-7 flex items-center overflow-hidden px-1.5 transition-all duration-300 ${collapsed ? "justify-center gap-0" : "gap-2.5" }`}
        >
            <img
                src={collapsed ? `/nagi_farm_icon.png` : `/nagi_farm_logo.png`}
                alt="NAGI Dragonfruit"
                className="w-50 h-20 shrink-0 object-contain"
            />
        </Link>
    );
}