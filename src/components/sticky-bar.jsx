"use client"

import { Sparkles, Star, Zap, Gift, Timer, Ticket } from "lucide-react";

export const StickyBar = () => {
    const announcements = [
        { icon: Sparkles, text: "Special Price Untuk 10 Tenant Pertama" },
        { icon: Star, text: "Daftar Sekarang & Dapatkan Bonus Eksklusif" },
        { icon: Zap, text: "Slot Terbatas — Jangan Sampai Kehabisan!" },
        { icon: Gift, text: "Gratis Media Exposure untuk Early Bird" },
        { icon: Timer, text: "Promo Berakhir dalam Waktu Terbatas" },
        { icon: Ticket, text: "Gema Fest 2026 — Be Part of Something Big" },
    ];

    // Duplicate for seamless loop
    const items = [...announcements, ...announcements];

    return (
        <section className="fixed top-0 w-full z-50 overflow-hidden">
            {/* Gradient background with shimmer */}
            <div className="relative bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 py-2.5">
                {/* Shimmer overlay */}
                <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                        animation: "shimmer 3s infinite linear",
                        backgroundSize: "200% 100%"
                    }}
                />
                
                {/* Marquee container */}
                <div className="flex">
                    <div 
                        className="flex items-center gap-8 animate-marquee whitespace-nowrap"
                        style={{
                            animation: "marquee 30s linear infinite"
                        }}
                    >
                        {items.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div 
                                    key={idx} 
                                    className="flex items-center gap-2 text-gray-900"
                                >
                                    <IconComponent className="w-4 h-4 text-amber-700" />
                                    <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
                                        {item.text}
                                    </span>
                                    <span className="text-amber-600 mx-4">✦</span>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Duplicate for seamless loop */}
                    <div 
                        className="flex items-center gap-8 whitespace-nowrap"
                        style={{
                            animation: "marquee 30s linear infinite"
                        }}
                    >
                        {items.map((item, idx) => {
                            const IconComponent = item.icon;
                            return (
                                <div 
                                    key={`dup-${idx}`} 
                                    className="flex items-center gap-2 text-gray-900"
                                >
                                    <IconComponent className="w-4 h-4 text-amber-700" />
                                    <span className="text-xs sm:text-sm font-bold tracking-wide uppercase">
                                        {item.text}
                                    </span>
                                    <span className="text-amber-600 mx-4">✦</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Edge fade effects */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-amber-400 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-amber-400 to-transparent z-10" />
            </div>

            {/* Bottom border glow */}
            <div className="h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

            {/* CSS Keyframes */}
            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                @keyframes shimmer {
                    0% {
                        background-position: -200% 0;
                    }
                    100% {
                        background-position: 200% 0;
                    }
                }
            `}</style>
        </section>
    );
};

export default StickyBar;