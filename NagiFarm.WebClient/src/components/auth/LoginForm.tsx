"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { apiFetch } from "@/lib/api";
import { LoginResponse } from "@/types/auth";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";

export function LoginForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            const res = await apiFetch<LoginResponse>("/auth/login", {
                method: "POST",
                body: JSON.stringify({ username, password }),
            });

            if (res.data) {
                localStorage.setItem("nagi_token", res.data.token);
                localStorage.setItem("nagi_user", JSON.stringify(res.data.user));
                router.push("/");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login gagal.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            {error && <Alert message={error} variant="error" />}

            <InputField
                id="username"
                label="Username"
                placeholder="Masukkan username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />

            <InputField
                id="password"
                label="Password"
                type="password"
                placeholder="Masukkan password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <Button type="submit" loading={loading} loadingText="Memverifikasi...">
                Masuk ke Dashboard
            </Button>
        </form>
    );
}