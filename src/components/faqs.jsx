"use client"
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

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
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const accordionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const accordionItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

export const Faq = () => {
    const faqData = [
        {
            id: 1,
            category: "Tenant",
            question: "Apa keuntungan menjadi tenant di Gema Fest 2026?",
            answer: "Tenant akan mendapatkan exposure langsung ke ribuan pengunjung, kesempatan meningkatkan penjualan, brand awareness, dan potensi kolaborasi antar vendor/event."
        },
        {
            id: 2,
            category: "Tenant",
            question: "Berapa biaya untuk sewa booth?",
            answer: "Biaya booth akan menyesuaikan kategori usaha, ukuran booth, serta fasilitas tambahan. Detail paket lengkap dapat dilihat pada proposal atau dengan menghubungi tim melalui WhatsApp."
        },
        {
            id: 3,
            category: "Tenant",
            question: "Apa saja fasilitas yang didapatkan tenant?",
            answer: "Fasilitas meliputi area booth, listrik, keamanan, serta media exposure sesuai paket yang dipilih."
        },
        {
            id: 4,
            category: "Tenant",
            question: "Apakah boleh membawa peralatan sendiri?",
            answer: "Boleh. Tenant diperbolehkan membawa peralatan tambahan selama mengikuti standar keamanan event dan sesuai regulasi venue."
        },
        {
            id: 5,
            category: "Tenant",
            question: "Apakah slot booth terbatas?",
            answer: "Ya. Slot booth terbatas dan akan ditutup ketika quota telah terpenuhi atau mendekati hari event."
        },
        {
            id: 6,
            category: "Payment & Registration",
            question: "Bagaimana cara mendaftar sebagai tenant?",
            answer: "Tenant dapat mendaftar melalui form registrasi resmi, atau menghubungi tim melalui WhatsApp untuk onboarding dan ketersediaan slot."
        },
        {
            id: 9,
            category: "Sponsor",
            question: "Apa benefit bagi sponsor di Gema Fest 2026?",
            answer: "Sponsor mendapatkan exposure brand yang luas secara offline maupun online, aktivasi brand experience, placement logo, hingga paket media sesuai tier sponsor."
        },
        {
            id: 10,
            category: "General",
            question: "Kapan event ini akan berlangsung?",
            answer: "Event akan berlangsung pada 18 Februari - 19 Maret tahun 2026"
        },
    ];

    return (
        <section className="margin spacing px-4 sm:px-6 md:px-8">
            <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* Header Section */}
                <motion.div 
                    className="bg-linear-to-bl from-darkColor via-darkColor to-mainColor bg-clip-text text-transparent text-center md:text-left"
                    variants={headerVariants}
                >
                    <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-darkColor">
                        FAQs
                    </h1>
                    <p className="capitalize text-xs sm:text-sm md:text-base text-darkColor/60 mt-1 max-w-md mx-auto md:mx-0">
                        Yang perlu kamu ketahui tentang Gema Fest 2026
                    </p>
                </motion.div>

                {/* Accordion Section */}
                <motion.div 
                    className="w-full"
                    variants={accordionContainerVariants}
                >
                    <Accordion type="single" collapsible className="space-y-2 sm:space-y-3">
                        {faqData.map((el, idx) => (
                            <motion.div
                                key={el.id}
                                variants={accordionItemVariants}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                transition={{ duration: 0.2 }}
                            >
                                <AccordionItem value={`item-${idx}`} className="border-none">
                                    <AccordionTrigger
                                        className="bg-linear-to-br from-darkColor via-darkColor to-thirdColor to-280% 
                                            px-3 sm:px-4 py-3 sm:py-4
                                            text-white font-medium 
                                            text-sm sm:text-[15px] md:text-base
                                            text-left leading-snug
                                            rounded-secondary!
                                            [&>svg]:shrink-0 [&>svg]:ml-2 [&>svg]:w-4 [&>svg]:h-4 sm:[&>svg]:w-5 sm:[&>svg]:h-5"
                                    >
                                        {el.question}
                                    </AccordionTrigger>
                                    <AccordionContent
                                        className="bg-darkColor text-lightColor 
                                            px-3 sm:px-4 py-3
                                            text-xs sm:text-sm md:text-base
                                            leading-relaxed
                                            rounded-secondary! mt-2"
                                    >
                                        {el.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Faq;