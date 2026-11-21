import { Sidebar } from "@/components/layout/sidebar/Sidebar";


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-nagi-surface lg:flex">
            <Sidebar />
            <main className="min-w-0 flex-1">
                <div className="w-full px-4 py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}