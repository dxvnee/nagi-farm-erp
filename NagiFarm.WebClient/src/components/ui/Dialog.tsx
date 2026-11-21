import { cn } from "@/lib/utlis";
import { X } from "lucide-react";
import { useEffect } from "react";

interface DialogProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children: React.ReactNode;
    className?: string;
    closeOnOverlayClick?: boolean;
}

export function Dialog({
    open,
    onClose,
    title,
    description,
    children,
    className,
    closeOnOverlayClick = false,
}: DialogProps) {

    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
        >
            <div
                className="fixed inset-0 bg-zinc-950/40 backdrop-blur-[2px] transition-opacity"
                onClick={() => {
                    if (closeOnOverlayClick) onClose();
                }}
            />
            <div
                className={cn(
                    "relative z-10 flex max-h-[90vh] w-full max-w-lg flex-col rounded-2xl border border-nagi-surface-200 bg-white shadow-xl",
                    className
                )}
            >
                {(title || description) && (
                    <div className="flex items-start justify-between gap-4 border-b border-zinc-100 px-6 py-4">
                        <div>
                            {title && (
                                <h2 className="text-base font-bold text-zinc-900">{title}</h2>
                            )}
                            {description && (
                                <p className="mt-0.5 text-xs text-zinc-500">{description}</p>
                            )}
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Tutup dialog"
                            className="rounded-lg p-1.5 text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                )}
                <div className="overflow-y-auto px-6 py-5">{children}</div>
            </div>
        </div>
    )
}