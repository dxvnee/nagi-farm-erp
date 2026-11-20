import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function DashboardPage() {
    return (
        <section>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                Dashboard
            </h1>
        </section>
    );
}