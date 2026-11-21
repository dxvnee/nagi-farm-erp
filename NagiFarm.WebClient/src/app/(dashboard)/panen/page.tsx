import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/ui/Card";
import { PanenHeaderActions } from "@/components/panen/PanenHeaderActions";
import { PanenStats } from "@/components/panen/PanenStats";
import { SeasonCurveChart } from "@/components/panen/SeasonCurveChart";
import { WeeklyHarvestTable } from "@/components/panen/WeeklyHarvestTable";
import { InputPanenForm } from "@/components/panen/InputPanenForm";

export const metadata: Metadata = {
    title: "Panen, Stok & Prediksi",
    description: "Monitoring panen, kurva musim, dan pencatatan hasil panen NAGI Farm",
};

export default function PanenPage() {
    return (
        <section className="space-y-6">
            <PageHeader
                title="Panen, Stok & Prediksi"
                subtitle="Monitoring panen, kurva musim, dan pencatatan hasil panen NAGI Farm"
                action={<PanenHeaderActions />}
            />

            <PanenStats />

            <div className="grid grid-cols-1 gap-6">
                <div className="lg:col-span-7 xl:col-span-8">
                    <Card className="border-zinc-200/80 p-6 bg-white shadow-xs">
                        <SeasonCurveChart />
                        <WeeklyHarvestTable />
                    </Card>
                </div>
            </div>
        </section>
    );
}
