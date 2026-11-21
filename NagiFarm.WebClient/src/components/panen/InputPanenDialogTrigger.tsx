"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Dialog } from "@/components/ui/Dialog";
import { InputPanenForm } from "./InputPanenForm";

export function InputPanenDialogTrigger() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl bg-nagi-magenta px-4 py-2 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-nagi-magenta-dark"
            >
                <Plus className="h-4 w-4" />
                Input panen
            </button>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                title="Input Panen"
                description="Catat hasil panen baru untuk memperbarui stok kebun."
            >
                <InputPanenForm
                    onSuccess={() => setOpen(false)}
                    onCancel={() => setOpen(false)}
                />
            </Dialog>
        </>
    );
}