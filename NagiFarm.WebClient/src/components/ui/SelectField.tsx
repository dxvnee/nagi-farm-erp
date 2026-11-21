import type { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface SelectOption {
    label: string;
    value: string;
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options?: SelectOption[];
}

export function SelectField({
    label,
    id,
    options,
    children,
    className = "",
    ...props
}: SelectFieldProps) {
    return (
        <div className="space-y-1.5">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-zinc-700"
            >
                {label}
            </label>
            <div className="relative">
                <select
                    id={id}
                    className={`w-full appearance-none rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 pr-10 text-sm text-zinc-900 transition focus:border-nagi-magenta focus:outline-none focus:ring-4 focus:ring-nagi-magenta/10 ${className}`}
                    {...props}
                >
                    {options
                        ? options.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))
                        : children}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            </div>
        </div>
    );
}
