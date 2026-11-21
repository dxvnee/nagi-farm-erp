interface PageHeaderProps {
    title: string;
    subtitle?: string;
    action?: React.ReactNode;
}

export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
    return (
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-0.5 text-sm text-zinc-500">{subtitle}</p>
                )}
            </div>

            {action && <div className="flex items-center gap-2">{action}</div>}
        </header>
    );
}