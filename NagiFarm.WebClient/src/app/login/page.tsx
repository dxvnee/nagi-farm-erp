import type { Metadata } from "next";
import { LoginForm } from "@/components/auth/LoginForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
    title: "Login",
    description: "Masuk ke sistem internal NAGI Farm ERP",
};

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-nagi-surface">
            <section className="flex flex-col items-center justify-center px-6 py-12">
                <div className="w-full max-w-sm">

                    <div className="flex w-90 items-center justify-center">
                        <img
                            src="/nagi_farm_logo.png"
                            alt="NAGI Dragonfruit"
                            className="h-full w-full object-contain"
                        />
                    </div>

                    <Card className="space-y-1 p-8">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Selamat datang
                            </h1>
                            <p className="text-sm text-zinc-500">
                                Masuk dengan akun kamu untuk melanjutkan.
                            </p>
                        </div>

                        <LoginForm />
                    </Card>
                </div>
            </section>
        </main>
    );
}