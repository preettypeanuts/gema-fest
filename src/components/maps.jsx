"use client"
import { motion } from 'framer-motion';
import Link from "next/link";
import { MdDirections } from "react-icons/md";

// Animation variants - Fixed for mobile responsiveness
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const socialCardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

// Fixed: Removed x transform that causes horizontal overflow on mobile
const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const formFieldVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

// Fixed: Removed scale transform that causes layout issues
const mapVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const buttonVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut"
        }
    }
};
export const Maps = () => {
    return (
        <>
            {/* MAPS SECTION */}
            <motion.div
                className="margin spacing rounded-main overflow-hidden"
                variants={mapVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
            >

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={mapVariants}
                >
                    <h1 className="md:mx-10 mx-4 text-center mb-10 text-3xl md:text-5xl font-heading font-bold">
                        Lokasi {" "}
                        <motion.span
                            className="bg-linear-to-br from-black via-black to-amber-400 bg-clip-text text-transparent inline-block"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            GEMA Fest 2026
                        </motion.span>
                    </h1>
                </motion.div>
                <div className="mapouter rounded-3xl overflow-hidden grow h-[40vh] sm:h-[50vh] md:h-[60vh] w-full">
                    <div className="overflow-hidden rounded-box h-full relative">
                        <iframe
                            className="w-full h-full contrast-100"
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.581677730621!2d106.95628177499015!3d-6.1866957938008715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b09ef2ae3ff%3A0x6e906e182d101bf!2sMall%20Grand%20Cakung!5e0!3m2!1sid!2sid!4v1765185415582!5m2!1sid!2sid`}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <motion.div
                            className="absolute top-0 left-1/2 -translate-x-1/2"
                            variants={buttonVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Link href="https://maps.app.goo.gl/3bCgnUAtDdVzvFQS6">
                                <motion.button
                                    className="flex items-center truncate gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-mainColor/20 duration-300 hover:bg-mainColor hover:text-white backdrop-blur-sm cursor-pointer text-darkColor rounded-b-secondary font-semibold shadow-custom text-xs sm:text-sm md:text-base"
                                    whileHover={{ scale: 1.03, y: 2 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <MdDirections className="text-base sm:text-lg" />
                                    <span>Bawa Aku Ke Lokasi!</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}