export function BrandPanel() {
    return (
        <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-nagi-purple via-nagi-magenta to-[#9b154c] p-12 text-white lg:flex">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-nagi-leaf/25 blur-3xl" />

            <div className="relative z-10 flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-md">
                    <img
                        src="/logo-nagi.png"
                        alt="NAGI Dragonfruit"
                        className="h-full w-full object-contain"
                    />
                </div>
                <div>
                    <p className="text-lg font-bold tracking-wide leading-tight">NAGI</p>
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-white/80">
                        DRAGONFRUIT
                    </p>
                </div>
            </div>

            <div className="relative z-10 max-w-md space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-nagi-leaf" />
                    Internal ERP System
                </span>
                <h2 className="text-3xl font-bold leading-snug">
                    Kelola panen, harga multi-grade, dan arus kas dalam satu tempat.
                </h2>
                <p className="text-sm leading-relaxed text-white/80">
                    Pantau distribusi reseller, piutang retail, hingga kalkulasi HPP per
                    siklus secara akurat dan transparan.
                </p>
            </div>

            <p className="relative z-10 text-xs text-white/65">
                &copy; {new Date().getFullYear()} NAGI Farm &middot; Kupang, NTT
            </p>
        </aside>
    );
}