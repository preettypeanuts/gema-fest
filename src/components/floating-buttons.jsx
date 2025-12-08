"use client"

import { useState, useEffect } from "react";
import { ArrowUp, MapPin, Send } from "lucide-react";
import { contactsItem } from "@/app/data";

export const FloatingButtons = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="fixed top-1/2 -translate-y-1/2 right-4 sm:right-6 z-50 flex flex-col gap-3">
            {contactsItem.map((item, idx) => (
                <div
                    key={idx}
                    className="relative flex items-center justify-end"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Label tooltip */}
                    <div
                        className={`
                            absolute right-14 px-4 py-1.5 rounded-full
                            bg-linear-to-r ${item.gradient}
                            text-white text-sm font-semibold tracking-wide
                            whitespace-nowrap
                            transform transition-all duration-300 ease-out
                            ${hoveredIndex === idx
                                ? "opacity-100 translate-x-0 scale-100"
                                : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                            }
                            shadow-lg ${item.shadowColor}
                        `}
                    >
                        {item.label}
                        {/* Arrow pointer */}
                        <div
                            className={`
                                absolute right-px top-1/2 -translate-y-1/2 translate-x-1
                                w-2 h-2 rotate-45
                                bg-linear-to-bl ${item.gradient}
                            `}
                        />
                    </div>

                    {/* Icon button */}
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className={`
                            relative group
                            w-11 h-11 rounded-full
                            flex items-center justify-center
                            text-white
                            bg-darkColor/40 backdrop-blur-xs
                            border border-white/20
                            shadow-lg
                            transform transition-all duration-300 ease-out
                            hover:scale-110 hover:border-white/40
                            ${hoveredIndex === idx ? `bg-linear-to-br ${item.gradient} ${item.shadowColor} shadow-xl` : ""}
                        `}
                        style={{
                            animationDelay: `${idx * 100}ms`
                        }}
                    >
                        {/* Glow effect on hover */}
                        <div
                            className={`
                                absolute inset-0 rounded-full
                                bg-linear-to-br ${item.gradient}
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-300
                                blur-xl -z-10
                            `}
                        />

                        {/* Icon */}
                        <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                            {item.icon}
                        </span>

                        {/* Ring animation on hover */}
                        <span
                            className={`
                                absolute inset-0 rounded-full
                                border-2 border-white/30
                                transition-all duration-500
                                ${hoveredIndex === idx ? "scale-150 opacity-0" : "scale-100 opacity-0"}
                            `}
                        />
                    </a>
                </div>
            ))}

            {/* Scroll to top button */}
            <div
                className={`
                    relative flex items-center justify-end
                    transition-all duration-500 ease-out
                    ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
                `}
                onMouseEnter={() => setHoveredIndex("top")}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Label tooltip */}
                <div
                    className={`
                        absolute right-14 px-4 py-1.5 rounded-full
                        bg-linear-to-r from-slate-600 to-slate-800
                        text-white text-sm font-semibold tracking-wide
                        whitespace-nowrap
                        transform transition-all duration-300 ease-out
                        ${hoveredIndex === "top"
                            ? "opacity-100 translate-x-0 scale-100"
                            : "opacity-0 translate-x-4 scale-95 pointer-events-none"
                        }
                        shadow-lg shadow-slate-800/40
                    `}
                >
                    Kembali ke Atas
                    <div className="absolute right-px top-1/2 -translate-y-1/2 translate-x-1 w-2 h-2 rotate-45 bg-slate-800" />
                </div>

                <button
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    className={`
                        relative group
                        w-11 h-11 rounded-full
                        flex items-center justify-center
                        text-white
                        bg-darkColor/40 backdrop-blur-xs
                        border border-white/20
                        shadow-lg
                        transform transition-all duration-300 ease-out
                        hover:scale-110 hover:border-white/40
                        ${hoveredIndex === "top" ? "bg-linear-to-br from-slate-600 to-slate-800 shadow-slate-800/40 shadow-xl" : ""}
                    `}
                >
                    <div className="absolute inset-0 rounded-full bg-linear-to-br from-slate-600 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />

                    <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5" />

                    <span className={`absolute inset-0 rounded-full border-2 border-white/30 transition-all duration-500 ${hoveredIndex === "top" ? "scale-150 opacity-0" : "scale-100 opacity-0"}`} />
                </button>
            </div>
        </div>
    );
};

export default FloatingButtons;