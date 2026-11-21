"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { InputPanenDialogTrigger } from "./InputPanenDialogTrigger";

type FilterPeriod = "hari" | "bulan" | "tahun";

interface PanenHeaderActionsProps {
    onInputClick?: () => void;
}

export function PanenHeaderActions({ onInputClick }: PanenHeaderActionsProps) {
    const [period, setPeriod] = useState<FilterPeriod>("hari");

    return (
        <div className="flex items-center gap-2 sm:gap-3">

            <div className="flex items-center gap-1.5">
                <button
                    type="button"
                    onClick={() => setPeriod("hari")}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition cursor-pointer ${
                        period === "hari"
                            ? "border border-nagi-magenta text-nagi-magenta bg-white shadow-2xs"
                            : "border border-zinc-200 text-zinc-600 hover:border-zinc-300 bg-white"
                    }`}
                >
                    Hari
                </button>
                <button
                    type="button"
                    onClick={() => setPeriod("bulan")}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition cursor-pointer ${
                        period === "bulan"
                            ? "border border-nagi-magenta text-nagi-magenta bg-white shadow-2xs"
                            : "border border-zinc-200 text-zinc-600 hover:border-zinc-300 bg-white"
                    }`}
                >
                    Bulan
                </button>
                <button
                    type="button"
                    onClick={() => setPeriod("tahun")}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition cursor-pointer ${
                        period === "tahun"
                            ? "border border-nagi-magenta text-nagi-magenta bg-white shadow-2xs"
                            : "border border-zinc-200 text-zinc-600 hover:border-zinc-300 bg-white"
                    }`}
                >
                    Tahun
                </button>
            </div>

            <InputPanenDialogTrigger />
        </div>
    );
}
