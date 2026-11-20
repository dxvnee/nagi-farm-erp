import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    loadingText?: string;
}

export function Button({
    children,
    loading = false,
    loadingText = "Memproses...",
    disabled,
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            disabled={disabled || loading}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl bg-nagi-magenta px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-nagi-magenta/25 transition hover:bg-nagi-magenta-dark active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
            {...props}
        >
            {loading && (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            )}
            {loading ? loadingText : children}
        </button>
    );
}