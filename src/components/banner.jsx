"use client"
import { useState, useEffect } from "react"
import { Coolshape } from "coolshapes-react";
import { motion } from "framer-motion"
import { FaCalendar, FaClock } from "react-icons/fa6";
import Image from "next/image";

const images = [
    "https://images.unsplash.com/photo-1639664342827-2d68822c55c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
]

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
}

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
}

export const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [scale, setScale] = useState(0.95)
    const [rounded, setRounded] = useState(24)
    const [margin, setMargin] = useState(80)

    // Image carousel effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    // Scroll effect - image scales up and fills margin on scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const maxScroll = 300

            const newScale = Math.min(0.95 + (scrollY / maxScroll) * 3, 1)
            const newRounded = Math.max(24 - Math.floor((scrollY / maxScroll) * 24), 0)
            const newMargin = Math.max(80 - Math.floor((scrollY / maxScroll) * 40), 0)

            setScale(newScale)
            setRounded(newRounded)
            setMargin(newMargin)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>

            <section className="px-4 sm:px-6 md:px-10 pt-6 sm:pt-8 md:pt-10 md:pb-3 space-y-6 sm:space-y-8 md:space-y-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-10 gap-6 sm:gap-8 md:gap-10 z-100"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Title Section */}
                    <motion.h1
                        className="col-span-1 lg:col-span-7 font-extrabold font-heading text-[110px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[150px] uppercase leading-[0.9] sm:leading-[0.85] md:leading-30 tracking-tighter text-white"
                        variants={fadeInLeft}
                    >
                        <motion.span
                            className="bg-linear-to-br from-darkColor via-darkColor to-130% to-yellow-300 bg-clip-text text-transparent inline-block"
                            initial={{ opacity: 0, y: 100, rotateX: -90 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{
                                duration: 1,
                                delay: 0.2,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            Gema Fest
                        </motion.span>
                        <br />
                        <motion.span
                            className="flex items-center gap-1 sm:gap-3"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                        >
                            <span className="bg-linear-to-br from-emerald-500 via-emerald-500 to-emerald-700 pr-1 bg-clip-text text-transparent">
                                2026
                            </span>
                            <motion.div
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    rotate: {
                                        duration: 20,
                                        repeat: Infinity,
                                        ease: "linear"
                                    },
                                    scale: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                            >
                                <Coolshape
                                    type="star"
                                    index={0}
                                    className="size-20 lg:size-20"
                                    noise={true}
                                />
                            </motion.div>
                        </motion.span>
                    </motion.h1>

                    {/* Right Section */}
                    <motion.div
                        className="col-span-1 lg:col-span-3 flex  justify-start lg:justify-end"
                        variants={fadeInRight}
                    >
                        <motion.div
                            className="grow md:w-fit w-full h-full flex flex-col justify-between gap-6 sm:gap-8 text-justify p-6 bg-linear-to-br from-darkColor via-darkColor to-mainColor from-50% via-50% rounded-main"
                            variants={staggerContainer}
                        >
                            <motion.p
                                className="text-white text-sm sm:text-base max-w-sm lg:max-w-sm font-bold"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.6 }}
                            >
                                <span className="flex items-center gap-2">
                                    <FaCalendar /> 18 Februari - 19 Maret 2026
                                </span>
                                <span className="flex items-center gap-2">
                                    <FaClock />  15:00 - 22:00 WIB
                                </span>
                            </motion.p>
                            <motion.div
                                className="flex flex-col flex-wrap gap-1"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.8
                                        }
                                    }
                                }}
                            >
                                <span className="font-medium text-white text-xs opacity-80">
                                    Managed By:
                                </span>
                                <Image
                                    width={80}
                                    height={80}
                                    className="grayscale brightness-300"
                                    src="/kawan.png"
                                    alt="kawan logo"
                                />
                            </motion.div>

                            <motion.div
                                className="flex flex-wrap gap-2 sm:gap-3"
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1,
                                            delayChildren: 0.8
                                        }
                                    }
                                }}
                            >
                                <a href="https://api.whatsapp.com/send?phone=6281292749915">
                                    <motion.button
                                        className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 w-full bg-white text-black rounded-full cursor-pointer duration-300"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Daftar Jadi Tenant
                                    </motion.button>
                                </a>
                                <a href="#event">
                                    <motion.button
                                        className="text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 w-full bg-black/10 border border-neutral-400/20 text-white backdrop-blur-sm rounded-full cursor-pointer duration-300"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Explore Event
                                    </motion.button>
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}