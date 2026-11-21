import { cn } from "@/lib/utlis";

interface CardProps {
    children: React.ReactNode;
    className?: string
}

export function Card({
    children,
    className = ""
}: CardProps) {
    return (
        <div className={cn("rounded-2xl border border-nagi-magenta-400 bg-white shadow-sm p-4", className)}>
            {children}
        </div>
    )
}