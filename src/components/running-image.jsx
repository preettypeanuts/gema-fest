"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export const RunningImage = () => {
    const scrollRef = useRef(null);
    const sectionRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const animationRef = useRef(null);
    const scrollPositionRef = useRef(0);
    const targetSpeedRef = useRef(2); // Target speed
    const currentSpeedRef = useRef(2); // Current interpolated speed

    // Speed settings
    const NORMAL_SPEED = 1.5;
    const SLOW_SPEED = 0.3;
    const SPEED_LERP = 0.05; // How fast speed transitions (0-1, lower = smoother)

    // Detect when section is in view
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const showcasePreview = [
        {
            title: "Zona Kuliner",
            category: "Culiner Festival",
            image:
                "https://images.unsplash.com/photo-1639664342827-2d68822c55c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Panggung Musik",
            category: "Entertainment",
            image:
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Galeri Seni",
            category: "Art & Culture",
            image:
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Fun Games",
            category: "Community Activities",
            image:
                "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Pasar UMKM",
            category: "Local Business",
            image:
                "https://images.unsplash.com/photo-1764782979306-1e489462d895?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Kompetisi Tari",
            category: "Performance",
            image:
                "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Fashion Parade",
            category: "Culture & Fashion",
            image:
                "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Expo Startup",
            category: "Innovation & Business",
            image:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Kids Zone",
            category: "Family Area",
            image:
                "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Movie Night",
            category: "Experience",
            image:
                "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Coffee Fest",
            category: "Lifestyle",
            image:
                "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
        {
            title: "Night Market",
            category: "Festival Experience",
            image:
                "https://images.unsplash.com/photo-1562088287-bde35a1ea917?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0",
        },
    ];


    // Triplicate for seamless infinite scroll
    const duplicatedItems = [...showcasePreview, ...showcasePreview, ...showcasePreview];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9,
            rotateX: 15,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 0.8,
            },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                delay: 0.3,
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
            },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
            },
        },
        exit: {
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.2 },
        },
        hover: {
            scale: 1.1,
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15)",
        },
        tap: { scale: 0.95 },
    };

    // Linear interpolation helper
    const lerp = (start, end, factor) => {
        return start + (end - start) * factor;
    };

    // Update target speed based on hover state
    useEffect(() => {
        targetSpeedRef.current = isHovered ? SLOW_SPEED : NORMAL_SPEED;
    }, [isHovered]);

    // Auto scroll animation with smooth speed transition
    useEffect(() => {
        const container = scrollRef.current;
        if (!container || !isInView) return;

        const totalWidth = container.scrollWidth / 3;

        // Initialize scroll position to middle section
        if (scrollPositionRef.current === 0) {
            scrollPositionRef.current = totalWidth;
            container.scrollLeft = totalWidth;
        }

        const animate = () => {
            // Smoothly interpolate current speed towards target speed
            currentSpeedRef.current = lerp(
                currentSpeedRef.current,
                targetSpeedRef.current,
                SPEED_LERP
            );

            scrollPositionRef.current += currentSpeedRef.current;

            if (scrollPositionRef.current >= totalWidth * 2) {
                scrollPositionRef.current = totalWidth;
            }

            container.scrollLeft = scrollPositionRef.current;
            animationRef.current = requestAnimationFrame(animate);
        };

        // Delay auto-scroll start for entrance animation
        const timeout = setTimeout(() => {
            animationRef.current = requestAnimationFrame(animate);
        }, 1500);

        return () => {
            clearTimeout(timeout);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isInView]);

    // Sync scroll position when user manually scrolls
    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;

        const totalWidth = container.scrollWidth / 3;

        if (container.scrollLeft >= totalWidth * 2) {
            container.scrollLeft = totalWidth;
            scrollPositionRef.current = totalWidth;
        } else if (container.scrollLeft <= 0) {
            container.scrollLeft = totalWidth;
            scrollPositionRef.current = totalWidth;
        } else {
            scrollPositionRef.current = container.scrollLeft;
        }
    }, []);

    // Navigation handlers
    const scrollPrev = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.offsetWidth * 0.2 + 8;
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }, []);

    const scrollNext = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const cardWidth = container.offsetWidth * 0.2 + 8;
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }, []);

    return (
        <>
            <motion.section
                ref={sectionRef}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                {/* Scrollable Container */}
                <motion.div
                    ref={scrollRef}
                    variants={containerVariants}
                    onScroll={handleScroll}
                    className="flex items-center gap-2 overflow-x-auto cursor-grab active:cursor-grabbing py-8"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                        perspective: "1000px",
                    }}
                >
                    {duplicatedItems.map((el, idx) => (
                        <motion.div
                            className={`${idx === 0 ? "pl-4 md:pl-10" : ""} min-w-[70lvw] w-[70lvw] md:min-w-[20lvw] md:w-[20lvw] h-[40lvh] md:h-[60lvh] rounded-main overflow-hidden relative shrink-0 select-none group`}
                            key={idx}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                y: -8,
                                transition: { type: "spring", stiffness: 300, damping: 20 },
                            }}
                        >
                            {/* Image with zoom effect on hover */}
                            <motion.div className="w-full h-full overflow-hidden rounded-main">
                                <Image
                                    width={500}
                                    height={500}
                                    src={el.image}
                                    alt={el.title}
                                    className="w-full h-full object-cover bg-white rounded-main pointer-events-none transition-transform duration-700 ease-out group-hover:scale-110"
                                    draggable={false}
                                />
                            </motion.div>

                            {/* Gradient Overlay */}
                            <motion.div
                                className="absolute top-0 left-0 right-0 w-full h-[70%] linear-blur-to-b bg-black/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            />

                            {/* Content Overlay */}
                            <div className="absolute top-0 left-0 right-0">
                                <div className="px-5 py-4">
                                    <motion.h1
                                        variants={titleVariants}
                                        className="font-bold text-2xl md:text-3xl bg-linear-to-b from-white via-neutral-200 to-neutral-50/70 bg-clip-text text-transparent leading-tight"
                                    >
                                        {el.title}
                                    </motion.h1>
                                </div>
                            </div>

                            {/* Hover overlay effect */}
                            <motion.div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-main" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>
        </>
    );
};