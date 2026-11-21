interface MonthData {
    month: string;
    prediksi: number; // percentage (0 - 100)
    realisasi: number; // percentage (0 - 100)
}

const seasonalData: MonthData[] = [
    { month: "J", prediksi: 82, realisasi: 68 },
    { month: "F", prediksi: 78, realisasi: 84 },
    { month: "M", prediksi: 65, realisasi: 58 },
    { month: "A", prediksi: 42, realisasi: 36 },
    { month: "M", prediksi: 24, realisasi: 24 },
    { month: "J", prediksi: 14, realisasi: 14 },
    { month: "J", prediksi: 11, realisasi: 11 },
    { month: "A", prediksi: 11, realisasi: 11 },
    { month: "S", prediksi: 16, realisasi: 16 },
    { month: "O", prediksi: 32, realisasi: 26 },
    { month: "N", prediksi: 62, realisasi: 54 },
    { month: "D", prediksi: 80, realisasi: 0 },
];

export function SeasonCurveChart() {
    return (
        <div>
            <h3 className="text-sm font-bold text-zinc-900">
                Kurva musim: prediksi vs realisasi (% per bulan)
            </h3>

            <div className="mt-6 flex h-48 items-end justify-between gap-1.5 sm:gap-3 border-b border-zinc-200 pb-2">
                {seasonalData.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-1 flex-col items-center justify-end h-full"
                    >
                        <div className="flex w-full items-end justify-center gap-1 h-full">
                            <div
                                style={{ height: `${item.prediksi}%` }}
                                className="w-2.5 sm:w-3.5 rounded-t-sm bg-nagi-magenta transition-all duration-300"
                                title={`Prediksi (${item.month}): ${item.prediksi}%`}
                            />

                            {item.realisasi > 0 ? (
                                <div
                                    style={{ height: `${item.realisasi}%` }}
                                    className="w-2.5 sm:w-3.5 rounded-t-sm bg-nagi-leaf-500 transition-all duration-300"
                                    title={`Realisasi (${item.month}): ${item.realisasi}%`}
                                />
                            ) : (
                                <div className="w-2.5 sm:w-3.5" />
                            )}
                        </div>
                        <span className="mt-2 text-xs font-medium text-zinc-500">
                            {item.month}
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-3 flex items-center gap-4 text-xs font-medium">
                <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-xs bg-nagi-magenta" />
                    <span className="text-nagi-magenta font-semibold">Prediksi</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-xs bg-nagi-leaf-500" />
                    <span className="text-nagi-leaf-600 font-semibold">Realisasi</span>
                </div>
            </div>
        </div>
    );
}
