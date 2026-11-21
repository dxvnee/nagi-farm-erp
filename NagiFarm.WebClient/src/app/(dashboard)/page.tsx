import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { toIdr } from "@/lib/utlis";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
};

interface DashboardCard {
    label: string;
    value: string;
}

const dataCard: DashboardCard[] = [
    {
        label: "Omset Bulan ini",
        value: "18450000",
    },
    {
        label: "Pengeluaran",
        value: "9200000",
    },
    {
        label: "Laba Bersih",
        value: "9250000",
    },
    {
        label: "Piutang belum lunas",
        value: "2100000",
    },
];

export default function DashboardPage() {
    return (
        <section>
            <PageHeader title="Dashboard" subtitle="Welcome to Nagi Farm ERP" />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {dataCard.map(data => (
                    <Card key={data.label}>
                        <p className="text-sm text-zinc-600 font-light">{data.label}</p>
                        <h1 className="text-xl text-black font-bold">{toIdr(data.value)}</h1>
                    </Card>
                ))}
            </div>
        </section>
    );
}