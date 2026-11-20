"use client";

import { BrandPanel } from "@/components/auth/BrandPanel";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
    return (
        <main className="grid min-h-screen bg-nagi-surface lg:grid-cols-2">
            <BrandPanel />
            <section className="flex flex-col items-center justify-center px-6 py-12">
                <div className="w-full max-w-sm">

                    <div className="mb-8 flex items-center gap-3 lg:hidden">
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-zinc-200 bg-white p-1 shadow-sm">
                            <img
                                src="/logo-nagi.png"
                                alt="NAGI Dragonfruit"
                                className="h-full w-full object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-base font-bold leading-tight text-nagi-purple">
                                NAGI <span className="text-nagi-leaf">FARM</span>
                            </p>
                            <p className="text-[11px] font-medium tracking-widest text-zinc-500">
                                DRAGONFRUIT ERP
                            </p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-zinc-200/80 bg-white p-8 shadow-sm">
                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                                Selamat datang
                            </h1>
                            <p className="text-sm text-zinc-500">
                                Masuk dengan akun kamu untuk melanjutkan.
                            </p>
                        </div>

                        <LoginForm />
                    </div>
                </div>
            </section>
        </main>
    );
}