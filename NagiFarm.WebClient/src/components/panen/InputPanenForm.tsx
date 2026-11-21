"use client";

import { useState } from "react";
import { InputField } from "@/components/ui/InputField";
import { SelectField } from "@/components/ui/SelectField";
import { Button } from "@/components/ui/Button";

const blokOptions = [
    { label: "Blok A (600 pohon)", value: "blok-a" },
    { label: "Blok B (400 pohon)", value: "blok-b" },
    { label: "Blok C (200 pohon)", value: "blok-c" },
];

const gradeOptions = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
];

interface InputPanenFormProps {
    onSuccess?: () => void;
    onCancel?: () => void;
}

export function InputPanenForm({ onSuccess, onCancel }: InputPanenFormProps) {
    const [tanggal, setTanggal] = useState("19 Nov 2026");
    const [blok, setBlok] = useState("blok-a");
    const [grade, setGrade] = useState("A");
    const [berat, setBerat] = useState("48");
    const [jumlahBuah, setJumlahBuah] = useState("104");
    const [catatan, setCatatan] = useState("");
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Hasil panen berhasil disimpan!");
            onSuccess?.();
        }, 600);
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3.5">
            <InputField
                id="tanggal"
                label="Tanggal"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
            />

            <SelectField
                id="blok"
                label="Blok kebun"
                value={blok}
                onChange={(e) => setBlok(e.target.value)}
                options={blokOptions}
            />

            <SelectField
                id="grade"
                label="Grade"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                options={gradeOptions}
            />

            <div className="grid grid-cols-2 gap-3">
                <InputField
                    id="berat"
                    label="Berat (kg)"
                    type="number"
                    value={berat}
                    onChange={(e) => setBerat(e.target.value)}
                    required
                />

                <InputField
                    id="jumlahBuah"
                    label="Jumlah buah"
                    type="number"
                    value={jumlahBuah}
                    onChange={(e) => setJumlahBuah(e.target.value)}
                    required
                />
            </div>

            <InputField
                id="catatan"
                label="Catatan"
                placeholder="Opsional (mis. cuaca, kondisi buah)"
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
            />

            <div className="flex items-center justify-end gap-2 pt-2">
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50"
                    >
                        Batal
                    </button>
                )}
                <Button
                    type="submit"
                    loading={loading}
                    loadingText="Menyimpan..."
                    className="rounded-xl"
                >
                    Simpan panen
                </Button>
            </div>
        </form>
    );
}