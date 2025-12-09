'use client'
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { FaCalendar, FaClock } from "react-icons/fa6";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20
        }
    }
};

const highlightWords = ["GEMA Fest", "festival Ramadhan", "jajanan viral", "kuliner khas Nusantara", "live performance"];

const AnimatedText = ({ text }) => {
    const words = text.split(" ");
    return (
        <>
            {words.map((word, i) => {
                const isHighlight = highlightWords.some(hw => word.includes(hw.split(" ")[0]));
                return (
                    <motion.span
                        key={i}
                        className={`inline-block mr-2 ${isHighlight ? "text-amber-600" : ""}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.02, duration: 0.3 }}
                    >
                        {word}
                    </motion.span>
                );
            })}
        </>
    );
};

const FloatingIcon = ({ children, delay = 0 }) => (
    <motion.div
        className="absolute text-4xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.15, scale: 1, y: [0, -10, 0] }}
        transition={{
            opacity: { delay, duration: 0.5 },
            scale: { delay, duration: 0.5 },
            y: { delay, duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
    >
        {children}
    </motion.div>
);

export const About = () => {
    return (
        <section className="relative">
            <FloatingIcon delay={0}><span className="absolute top-20 left-10">🌙</span></FloatingIcon>
            <FloatingIcon delay={0.2}><span className="absolute top-32 right-20">⭐</span></FloatingIcon>
            <FloatingIcon delay={0.4}><span className="absolute bottom-40 left-20">🕌</span></FloatingIcon>
            <FloatingIcon delay={0.6}><span className="absolute bottom-20 right-10">✨</span></FloatingIcon>
            <FloatingIcon delay={0.8}><span className="absolute top-1/2 right-32">🎉</span></FloatingIcon>

            <motion.div
                className="absolute inset-0 opacity-10"
                initial={{ backgroundPosition: "0% 0%" }}
                animate={{ backgroundPosition: "100% 100%" }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                style={{
                    backgroundImage: "radial-linear(circle, #f59e0b 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }}
            />

            <div className="margin spacing relative z-10 mx-auto px-6 py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-8"
                >
                    <motion.div variants={headingVariants} className="relative inline-block">
                        <motion.div
                            className="absolute -inset-2 bg-linear-to-r from-amber-200 to-orange-200 rounded-lg blur-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 0.5 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        />
                        <h1 className="relative text-3xl md:text-4xl font-bold tracking-tight">
                            <motion.span
                                className="bg-linear-to-br from-gray-900 via-gray-800 to-amber-600 bg-clip-text text-transparent"
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Apa Itu GEMA Fest ?
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.div
                        variants={paragraphVariants}
                        className="relative"
                    >
                        <motion.div
                            className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-mainColor to-orange-500 rounded-full"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                            style={{ originY: 0 }}
                        />

                        <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed bg-linear-to-br from-gray-800 via-gray-700 to-amber-700 bg-clip-text text-transparent pl-4">
                            <AnimatedText text="GEMA Fest adalah festival Ramadhan yang menghadirkan pengalaman penuh rasa, cerita, dan keceriaan. Mulai dari jajanan viral, kuliner khas Nusantara, spot berfoto, live performance, hingga kegiatan Ramadhan bernuansa hangat—semuanya kami hadirkan dalam satu tempat." />
                        </p>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-3 pt-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <motion.span
                            className="truncate flex items-center gap-2 px-4 py-2 bg-linear-to-r from-mainColor to-secondaryColor text-white font-bold rounded-full text-sm uppercase tracking-wider border border-amber-200 shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(251, 191, 36, 0.3)" }}
                            transition={{ delay: 1 + 1 * 0.1, duration: 0.3 }}
                        >
                            <FaCalendar /> 18 Februari - 19 Maret 2026
                        </motion.span>
                        <motion.span
                            className="truncate flex items-center gap-2 px-4 py-2 bg-linear-to-r from-mainColor to-secondaryColor text-white font-bold rounded-full text-sm uppercase tracking-wider border border-amber-200 shadow-sm"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(251, 191, 36, 0.3)" }}
                            transition={{ delay: 1 + 1 * 0.1, duration: 0.3 }}
                        > <FaClock /> 15:00 - 22:00 WIB
                        </motion.span>
                        {["Kuliner", " Spot Foto", " Live Music", "Festival"].map((tag, i) => (
                            <motion.span
                                key={tag}
                                className="px-4 py-2 bg-linear-to-r from-darkColor to-darkColor text-white rounded-full text-sm font-medium border border-amber-200 shadow-sm"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(251, 191, 36, 0.3)" }}
                                transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}