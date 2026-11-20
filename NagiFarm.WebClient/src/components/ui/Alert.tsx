interface AlertProps {
    message: string;
    variant?: "error" | "success";
}

export function Alert({ message, variant = "error" }: AlertProps) {
    const styles =
        variant === "error"
            ? "border-rose-200 bg-rose-50 text-rose-700"
            : "border-emerald-200 bg-emerald-50 text-emerald-700";
    return (
        <div
            role="alert"
            className={`rounded-xl border px-3.5 py-2.5 text-sm font-medium ${styles}`}
        >
            {message}
        </div>
    );
}