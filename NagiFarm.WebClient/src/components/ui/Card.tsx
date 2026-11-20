interface CardProps {
    children: React.ReactNode;
    className: String
}

export function Card({
    children,
    className
}: CardProps) {
    return (
        <div className={`${className} rounded-2xl border border-nagi-magenta bg-white p-8 shadow-sm`}>
            {children}
        </div>
    )
}