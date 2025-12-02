"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Coolshape } from "coolshapes-react";
import { motion, AnimatePresence } from "framer-motion"
import { MdLocationPin } from "react-icons/md";
import { IoCalendarClear } from "react-icons/io5";
import { TbClockHour10Filled } from "react-icons/tb";

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

const imageSlideVariants = {
    enter: {
        opacity: 0,
        scale: 1.1,
    },
    center: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.25, 0.46, 0.45, 0.94]
        }
    },
    exit: {
        opacity: 0,
        scale: 1.05,
        transition: {
            duration: 0.8
        }
    }
}

export const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className="px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-10 min-h-[calc(100vh-2rem)] md:h-[calc(100vh-10lvh)] space-y-6 sm:space-y-8 md:space-y-10">
                <motion.div
                    className="h-[40vh] md:h-[50lvh] rounded-main relative "
                    initial="hidden"
                    animate="visible"
                    variants={fadeInDown}
                >

                    {images.map((src, index) => (
                        <Image
                            key={index}
                            fill
                            className={`rounded-main w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
                            src={src}
                            alt={`banner image ${index + 1}`}
                            priority={index === 0}
                        />
                    ))}
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            width={1}
                            height={1}
                            className={`absolute blur-3xl scale-x-103 scale-y-110 saturate-200 -z-50 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-50" : "opacity-0"}`}
                            src={src}
                            alt={`banner image ${index + 1}`}
                            priority={index === 0}
                        />
                    ))}

                    <div className="absolute right-0 bottom-0">
                        <div className="rounded-secondary bg-white/10 text-white border border-neutral-500/20 backdrop-blur-sm px-4 py-2.5 m-1 font-medium">
                            <h1 className="flex items-center gap-1 opacity-70">
                                <MdLocationPin />
                                Lucky Lex Mall
                            </h1>
                            <p className="flex items-center gap-1 opacity-70">
                                <IoCalendarClear /> 18 Februari - 18 Maret 2026
                            </p>
                            <p className="flex items-center gap-1 opacity-70">
                                <TbClockHour10Filled /> 15:00 - 22:00 WIB
                            </p>
                        </div>
                    </div>
                </motion.div>


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
                            className="bg-linear-to-br from-white via-white to-violet-300 bg-clip-text text-transparent inline-block"
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
                        className="col-span-1 lg:col-span-3 flex justify-start lg:justify-end"
                        variants={fadeInRight}
                    >
                        <motion.div
                            className="flex flex-col justify-between gap-6 sm:gap-8 text-justify"
                            variants={staggerContainer}
                        >
                            <motion.p
                                className="text-white text-sm sm:text-base max-w-sm lg:max-w-sm"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.6 }}
                            >
                                Nikmati festival kuliner terbesar di Jakarta Timur—hadir dengan tenant pilihan, food street, hiburan ramadhan, dan beragam aktivitas seru sepanjang satu bulan penuh.
                            </motion.p>

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
                                        className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 bg-white text-black rounded-full cursor-pointer duration-300"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Daftar Jadi Tenant
                                    </motion.button>
                                </a>
                                <a href="#event">
                                    <motion.button
                                        className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 bg-black/10 border border-neutral-400/20 text-white backdrop-blur-sm rounded-full cursor-pointer duration-300"
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