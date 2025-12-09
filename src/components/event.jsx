"use client"
import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const eventFeatures = [
    {
        id: 1,
        icon: "🍢",
        title: "Street Food & Culinary Experience",
        description:
            "Jelajahi puluhan tenant makanan pilihan—mulai dari jajanan viral, makanan hangat untuk berbuka, hingga dessert manis khas Ramadhan.",
        bgImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80"
    },
    {
        id: 2,
        icon: "🎉",
        title: "Weekend Live Events & Performances",
        description:
            "Hiburan spesial setiap minggu: live music, ramadhan acoustic, special guest, dan penampilan komunitas lokal.",
        bgImage: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=80"
    },
    {
        id: 3,
        icon: "📸",
        title: "Spot Foto Ramadan Modern",
        description:
            "Dekorasi minimalis–meriah khas Ramadhan yang Instagrammable.",
        bgImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80"
    },
    {
        id: 4,
        icon: "🛍",
        title: "Bazaar & Community Corner",
        description:
            "Dukungan untuk UMKM lokal: craft, fashion modest, hampers, dan lain-lain.",
        bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
    },
    {
        id: 5,
        icon: "🎁",
        title: "Games, Giveaways & Tenant Specials",
        description:
            "Dapatkan promo eksklusif, diskon berbuka, hingga menghadiri booth pilihan dengan harga spesial.",
        bgImage: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=1200&q=80"
    }
];

const AUTOPLAY_DURATION = 5000;

// Animation variants
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

const headerVariants = {
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

const navigationVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const carouselVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const titleBadgeVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const descriptionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
        }
    }
};

export const Events = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % eventFeatures.length);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + eventFeatures.length) % eventFeatures.length);
        setProgress(0);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        setProgress(0);
    };

    useEffect(() => {
        if (isPaused) return;

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + (100 / (AUTOPLAY_DURATION / 50));
            });
        }, 50);

        const slideInterval = setInterval(() => {
            nextSlide();
        }, AUTOPLAY_DURATION);

        return () => {
            clearInterval(progressInterval);
            clearInterval(slideInterval);
        };
    }, [isPaused, currentSlide, nextSlide]);

    const circumference = 2 * Math.PI * 18;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <motion.section
            className='margin spacing'
            variants={containerVariants}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Header: Title + Navigation */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
                <motion.div
                    className='bg-linear-to-bl from-darkColor via-dafrom-darkColor to-mainColor bg-clip-text text-transparent'
                    variants={headerVariants}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dafrom-darkColor">
                        Event Highlights
                    </h2>
                    <p className="text-sm sm:text-base text-dafrom-darkColor/60 mt-1">
                        Discover what awaits you
                    </p>
                </motion.div>

                {/* Navigation Buttons with Progress Indicator */}
                <motion.div
                    className="flex items-center gap-2 sm:gap-3"
                    variants={navigationVariants}
                >
                    <motion.button
                        onClick={prevSlide}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="relative w-10 h-10 sm:w-12 sm:h-12 bg-darkColor/10 hover:bg-darkColor/20 backdrop-blur-sm text-dabg-darkColor rounded-full transition-all duration-300 flex items-center justify-center border border-dabg-darkColor/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </motion.button>

                    {/* Next Button with Circular Progress */}
                    <motion.button
                        onClick={nextSlide}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="relative w-10 h-10 sm:w-12 sm:h-12 bg-darkColor/10 hover:bg-darkColor/20 backdrop-blur-sm text-dabg-darkColor rounded-full transition-all duration-300 flex items-center justify-center border border-dabg-darkColor/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Circular Progress SVG */}
                        <svg
                            className="absolute inset-0 w-full h-full -rotate-90"
                            viewBox="0 0 44 44"
                        >
                            {/* Background circle */}
                            <circle
                                cx="22"
                                cy="22"
                                r="18"
                                fill="none"
                                stroke="rgba(255,255,255,0.2)"
                                strokeWidth="2"
                            />
                            {/* Progress circle */}
                            <circle
                                cx="22"
                                cy="22"
                                r="18"
                                fill="none"
                                stroke="url(#progressGradient)"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                className="transition-all duration-75 ease-linear"
                            />
                            <defs>
                                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#fbbf24" />
                                    <stop offset="100%" stopColor="#f59e0b" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <motion.div
                className="relative w-full h-[70lvh] md:h-[500px] lg:h-[600px] overflow-hidden rounded-main"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                variants={carouselVariants}
            >
                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-500 ease-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {eventFeatures.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="min-w-full h-full relative"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${feature.bgImage})` }}
                            >
                            </div>

                            {/* Title Badge - Top Left */}
                            <motion.div
                                className="absolute top-0 left-0 bg-white rounded-br-[35px]"
                                variants={titleBadgeVariants}
                                initial="hidden"
                                animate={currentSlide === index ? "visible" : "hidden"}
                                key={`title-${currentSlide}`}
                            >
                                <div className="bg-white rounded-out-lb-main"></div>
                                <div className="bg-white rounded-out-tr-main"></div>
                                <div className="text-sm sm:text-lg font-semibold tracking-wider">
                                    <div className="max-w-[280px] sm:max-w-sm w-fit text-white bg-darkColor rounded-main pl-6 py-4 pr-4 mr-2 mb-2">
                                        <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">
                                            <span className='bg-linear-to-br from-white via-white to-thirdColor bg-clip-text text-transparent'>
                                                {feature.title}
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Description - Bottom Left */}
                            <motion.div
                                className='absolute bottom-2 left-2 right-2 sm:right-auto'
                                variants={descriptionVariants}
                                initial="hidden"
                                animate={currentSlide === index ? "visible" : "hidden"}
                                key={`desc-${currentSlide}`}
                            >
                                <p className='p-3 sm:p-4 bg-black/30 rounded-xl sm:rounded-secondary backdrop-blur-md border border-white/10 max-w-sm text-sm sm:text-base text-white/90 leading-relaxed'>
                                    {feature.description}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator - Desktop Only */}
                <motion.div
                    className="hidden sm:flex absolute bottom-3 right-3 p-1.5 bg-white/10 backdrop-blur-sm rounded-main z-20 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    {eventFeatures.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                                ? 'bg-thirdColor w-6'
                                : 'bg-white/50 hover:bg-white/75 w-2'
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default Events;