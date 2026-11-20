import { InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export function InputField({
    label,
    id,
    type = "text",
    className = "",
    ...props
}: InputFieldProps) {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;

    return (
        <div className="space-y-1.5">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-zinc-700"
            >
                {label}
            </label>
            <div className="relative">
                <input
                    id={id}
                    type={inputType}
                    className={`w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-400 transition focus:border-nagi-magenta focus:outline-none focus:ring-4 focus:ring-nagi-magenta/10 ${isPassword ? "pr-16" : ""
                        } ${className}`}
                    {...props}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword((prev) => !prev)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-zinc-500 hover:text-nagi-magenta"
                    >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}                    </button>
                )}
            </div>
        </div>
    );
}