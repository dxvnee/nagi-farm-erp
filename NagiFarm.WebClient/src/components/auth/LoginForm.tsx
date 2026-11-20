"use client";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { InputField } from "@/components/ui/InputField";
import { useLogin } from "@/hooks/useLogin";

export function LoginForm() {
    const {
        username,
        setUsername,
        password,
        setPassword,
        error,
        loading,
        handleSubmit,
    } = useLogin();

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