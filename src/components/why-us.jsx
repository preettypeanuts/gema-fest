'use client'
import { motion } from 'framer-motion';
import { Coolshape } from "coolshapes-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const cardContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4,
            delay: 0.2
        }
    }
};

const eventHighlights = [
    {
        id: 1,
        shape: "flower",
        title: "50+ Tenant Kuliner",
        description: "Lebih dari 50 tenant makanan & minuman pilihan.",
    },
    {
        id: 2,
        shape: "eclipse",
        title: "Kuliner Viral",
        description: "Stand-stand kuliner viral yang sedang hype.",
    },
    {
        id: 3,
        shape: "wheel",
        title: "Family & Kids Friendly",
        description: "Area ramah keluarga, anak, dan suasana nyaman.",
    },
    {
        id: 4,
        shape: "moon",
        title: "Weekly Concerts",
        description: "Aktivitas dan program seru setiap minggu selama event.",
    },
];

export default function HighlightSection() {
    return (
        <section className="spacing">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={titleVariants}
            >
                <h1 className="md:mx-10 mx-4 text-center mb-10 text-3xl md:text-5xl font-heading font-bold">
                    Kenapa Kamu Harus Datang ke {" "}
                    <motion.span
                        className="bg-linear-to-br from-black via-black to-amber-400 bg-clip-text text-transparent inline-block"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        GEMA Fest 2026?
                    </motion.span>
                </h1>
            </motion.div>

            <motion.div
                className="margin grid grid-cols-1 md:grid-cols-4 gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {eventHighlights.map((item, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col md:p-5 p-7 bg-linear-to-br from-darkColor via-darkColor to-150% to-secondaryColor h-[40lvh] md:h-[65lvh] rounded-main relative overflow-hidden justify-between group cursor-pointer"
                    >
                        {/* Animated Shape Background */}
                        <motion.div
                            initial={{ scale: 1, rotate: 0 }}
                            whileHover={{
                                scale: 4,
                                rotate: 50,
                                filter: "blur(40px) saturate(1.5)"
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute right-0 md:-right-15 top-1/2 -translate-y-1/2"
                        >
                            <Coolshape
                                className="absolute right-0 md:-right-15 top-1/2 -translate-y-1/2 size-40 group-active:scale-1000 group-active:blur-3xl group-active:rotate-12 md:size-70 text-primary mb-4 group-hover:scale-400 group-hover:rotate-50 group-hover:spin-slow group-hover:saturate-150 group-hover:blur-2xl duration-500 z-0"
                            />
                        </motion.div>

                        {/* Title with stagger animation */}
                        <motion.h3
                            variants={cardContentVariants}
                            className="font-semibold text-3xl md:text-4xl font-heading bg-linear-to-br from-white via-white to-emerald-600 bg-clip-text text-transparent z-10 relative"
                        >
                            {item.title}
                        </motion.h3>

                        {/* Description with fade in */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                            className="text-neutral-200 z-10 text-lg"
                        >
                            {item.description}
                        </motion.p>

                        {/* Hover linear overlay */}
                        <motion.div
                            className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 z-5"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}