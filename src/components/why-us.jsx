'use client'
import { Coolshape } from "coolshapes-react";

const eventHighlights = [
    {
        id: 1,
        shape: "flower",
        title: "50+ Tenant Kuliner",
        description: "Lebih dari 50 tenant makanan & minuman pilihan.",
    },
    {
        id: 1,
        shape: "eclipse",
        title: "Kuliner Viral",
        description: "Stand-stand kuliner viral yang sedang hype.",
    },
    {
        id: 1,
        shape: "whyeel",
        title: "Family & Kids Friendly",
        description: "Area ramah keluarga, anak, dan suasana nyaman.",
    },
    {
        id: 1,
        shape: "moon",
        title: "Weekly Concerts",
        description: "Aktivitas dan program seru setiap minggu selama event.",
    },
];


export default function HighlightSection() {
    return (
        <>
            <div>
                <h1 className="md:mx-10 mx-4 text-center mb-10 text-3xl md:text-5xl font-heading font-bold">
                    Kenapa Kamu Harus Datang ke {" "}
                    <span className="bg-linear-to-br from-white via-white to-amber-400 bg-clip-text text-transparent">
                        GEMA Fest 2026?
                    </span>
                </h1>
            </div>
            <div className="margin grid grid-cols-1 md:grid-cols-4 gap-2">
                {eventHighlights.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col md:p-5 p-7 bg-darkColor h-[40lvh] md:h-[65lvh] rounded-main relative overflow-hidden justify-between group"
                    >
                        <Coolshape
                            className="absolute -right-15 top-1/2 -translate-y-1/2 size-40 group-active:scale-1000 md:size-70 text-primary mb-4 group-hover:scale-400 group-hover:rotate-50 group-hover:spin-slow group-hover:saturate-150 group-hover:blur-2xl duration-500 z-0"
                        />
                        <h3 className="font-semibold text-3xl md:text-4xl font-heading bg-linear-to-br from-white via-white to-pink-400 bg-clip-text text-transparent z-10 relative">
                            {item.title}
                        </h3>
                        <p className="text-neutral-200 z-10 text-lg">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}
