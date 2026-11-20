import {
    LayoutDashboard,
    Sprout,
    ShoppingBag,
    Users,
    Wallet,
    Calculator,
    Trees,
    FileText,
    Settings,
    type LucideIcon,
} from "lucide-react";

export interface NavItem {
    label: string;
    href: string;
    icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    { label: "Panen & Stok", href: "/harvest", icon: Sprout },
    { label: "Penjualan", href: "/sales", icon: ShoppingBag },
    { label: "Pelanggan & Reseller", href: "/customers", icon: Users },
    { label: "Pengeluaran", href: "/expenses", icon: Wallet },
    { label: "BEP & Harga", href: "/pricing", icon: Calculator },
    { label: "Kebun", href: "/orchard", icon: Trees },
    { label: "Laporan PDF", href: "/reports", icon: FileText },
    { label: "Pengaturan", href: "/settings", icon: Settings },
];