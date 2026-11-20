"use client";

import { authService } from "@/services/authServices";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useLogin() {
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
            const res = await authService.login(username, password);
            if (res.data) {
                authService.saveSession(res.data)
                router.push("/");
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Login gagal.");
        } finally {
            setLoading(false);
        }
    }

    return {
        username,
        setUsername,
        password,
        setPassword,
        error,
        loading,
        handleSubmit,
    }
}