interface WeeklyHarvest {
    minggu: string;
    kg: number;
    buah: number;
    grade: string;
}

const weeklyData: WeeklyHarvest[] = [
    {
        minggu: "Mgg 45 (9–15 Nov)",
        kg: 142,
        buah: 310,
        grade: "70/48/24",
    },
    {
        minggu: "Mgg 46 (16–22 Nov)",
        kg: 186,
        buah: 402,
        grade: "92/64/30",
    },
];

export function WeeklyHarvestTable() {
    return (
        <div className="mt-8">
            <h3 className="text-sm font-bold text-zinc-900">
                Panen per minggu
            </h3>

            <div className="mt-3 overflow-x-auto">
                <table className="w-full text-left text-xs">
                    <thead>
                        <tr className="border-b border-zinc-100 text-zinc-400 font-medium">
                            <th className="pb-2 font-normal">Minggu</th>
                            <th className="pb-2 text-center font-normal">kg</th>
                            <th className="pb-2 text-center font-normal">Buah</th>
                            <th className="pb-2 text-right font-normal">Grade A/B/C</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                        {weeklyData.map((row, idx) => (
                            <tr key={idx} className="text-zinc-800">
                                <td className="py-2.5 font-medium">{row.minggu}</td>
                                <td className="py-2.5 text-center">{row.kg}</td>
                                <td className="py-2.5 text-center">{row.buah}</td>
                                <td className="py-2.5 text-right font-medium">{row.grade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
