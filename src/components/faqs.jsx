"use client"
import { motion } from 'framer-motion';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

// Animation variants
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
        <>
            <section className="margin spacing">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div 
                        className='bg-linear-to-bl from-darkColor via-dafrom-darkColor to-mainColor bg-clip-text text-transparent'
                        variants={headerVariants}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dafrom-darkColor">
                            FAQs
                        </h1>
                        <p className="capitalize text-sm sm:text-base text-dafrom-darkColor/60 mt-1">
                            Yang perlu kamu ketahui tenatang Gema Fest 2026
                        </p>
                    </motion.div>
                    <motion.div variants={accordionContainerVariants}>
                        <div>
                            <Accordion type="single" collapsible className="space-y-2">
                                {faqData.map((el, idx) => (
                                    <motion.div
                                        key={idx}
                                        variants={accordionItemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <AccordionItem value={`item-${idx}`}>
                                            <AccordionTrigger
                                                className={`bg-linear-to-br from-darkColor via-darkColor to-thirdColor to-280% px-3 text-white font-medium text-[16px] rounded-secondary!`}
                                            >
                                                {el.question}
                                            </AccordionTrigger>
                                            <AccordionContent
                                                className={`bg-darkColor text-lightColor px-3 rounded-secondary! pt-3 mt-2`}
                                            >
                                                {el.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                ))}
                            </Accordion>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default Faq;