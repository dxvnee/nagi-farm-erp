import { Card } from "@/components/ui/Card";

interface StatItem {
    label: string;
    value: string;
}

const statsData: StatItem[] = [
    {
        label: "Jumlah pohon (aktif)",
        value: "1.200 pohon",
    },
    {
        label: "Prediksi panen tahun ini",
        value: "9.600 kg",
    },
    {
        label: "Panen raya diperkirakan",
        value: "Des – Feb",
    },
    {
        label: "Stok A / B / C",
        value: "92 · 64 · 30",
    },
];

export function PanenStats() {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {statsData.map((stat) => (
                <Card
                    key={stat.label}
                    className="border-zinc-200/80 p-5 bg-white shadow-xs"
                >
                    <p className="text-xs font-normal text-zinc-500">
                        {stat.label}
                    </p>
                    <h2 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">
                        {stat.value}
                    </h2>
                </Card>
            ))}
        </div>
    );
}
