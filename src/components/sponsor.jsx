'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { FaStarOfLife } from "react-icons/fa6";
import { IoLogoPolymer } from "react-icons/io";
import { IoLogoTableau } from "react-icons/io5";
import { PiCodaLogoFill } from "react-icons/pi";
import { BiLogoPatreon } from "react-icons/bi";
import { BiLogoOpera } from "react-icons/bi";

export const SponsorList = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const sponsorDummy = [
        { name: "Star Inc", logo: <FaStarOfLife />, color: "#FFD700" },
        { name: "Polymer", logo: <IoLogoPolymer />, color: "#FF6B6B" },
        { name: "Tabiz", logo: <IoLogoTableau />, color: "#4ECDC4" },
        { name: "Coda", logo: <PiCodaLogoFill />, color: "#A855F7" },
        { name: "Patrom", logo: <BiLogoPatreon />, color: "#FF424D" },
        { name: "Ortsz", logo: <BiLogoOpera />, color: "#FF1B2D" },
    ];

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    // Individual sponsor item variants
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.8,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    // Title animation variants
    const titleVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    // Subtitle animation variants
    const subtitleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2,
                duration: 0.6,
            },
        },
    };

    // Background box animation
    const boxVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section id="sponsor" className="w-full py-10 overflow-hidden">
            <div className="max-w-6xl mx-auto text-center px-4">
                <motion.h2
                    className="text-2xl md:text-3xl font-bold mb-6 bg-linear-to-r from-darkColor via-darkColor to-orange-400 bg-clip-text text-transparent"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    Sponsor Resmi Gema Fest 2026
                </motion.h2>

                <motion.p
                    className="text-sm text-gray-500 mb-8"
                    variants={subtitleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    Terima kasih kepada brand yang telah mendukung acara ini.
                </motion.p>

                <motion.div
                    className="w-full md:h-full h-fit bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-6 md:py-16 space-y-10 rounded-2xl shadow-custom border border-slate-700/50"
                    variants={boxVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="flex flex-wrap md:flex-nowrap p-3 md:p-0 items-center justify-evenly gap-10 h-fit"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {sponsorDummy.map((el, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col items-center text-5xl md:text-7xl space-y-2 cursor-pointer relative"
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.15,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                onHoverStart={() => setHoveredIndex(idx)}
                                onHoverEnd={() => setHoveredIndex(null)}
                            >
                                {/* Glow effect on hover */}
                                <motion.div
                                    className="absolute inset-0 rounded-full blur-2xl opacity-0"
                                    style={{ backgroundColor: el.color }}
                                    animate={{
                                        opacity: hoveredIndex === idx ? 0.3 : 0,
                                        scale: hoveredIndex === idx ? 1.5 : 1,
                                    }}
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Logo with color animation */}
                                <motion.div
                                    className="relative z-10 text-slate-300"
                                    animate={{
                                        color: hoveredIndex === idx ? el.color : "#cbd5e1",
                                        rotateY: hoveredIndex === idx ? 360 : 0,
                                    }}
                                    transition={{
                                        color: { duration: 0.3 },
                                        rotateY: { duration: 0.6, ease: "easeInOut" }
                                    }}
                                >
                                    {el.logo}
                                </motion.div>

                                {/* Name with underline animation */}
                                <motion.div className="relative">
                                    <motion.h1
                                        className="text-sm md:text-xl font-black text-center text-balance tracking-tighter text-slate-200"
                                        animate={{
                                            color: hoveredIndex === idx ? el.color : "#e2e8f0",
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {el.name}
                                    </motion.h1>

                                    {/* Animated underline */}
                                    <motion.div
                                        className="h-0.5 rounded-full mt-1"
                                        style={{ backgroundColor: el.color }}
                                        initial={{ scaleX: 0 }}
                                        animate={{
                                            scaleX: hoveredIndex === idx ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                </motion.div>

                                {/* Floating particles effect */}
                                {hoveredIndex === idx && (
                                    <>
                                        {[...Array(3)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-2 h-2 rounded-full"
                                                style={{ backgroundColor: el.color }}
                                                initial={{
                                                    opacity: 0,
                                                    y: 0,
                                                    x: (i - 1) * 20
                                                }}
                                                animate={{
                                                    opacity: [0, 1, 0],
                                                    y: -50,
                                                    scale: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: i * 0.1,
                                                    repeat: Infinity,
                                                    repeatDelay: 0.5,
                                                }}
                                            />
                                        ))}
                                    </>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
};

export default SponsorList;