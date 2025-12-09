"use client"
import { motion } from 'framer-motion';
import { contactsItem } from "@/app/data";
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

export const Contacts = () => {
    return (
        <section className="margin spacing overflow-x-hidden">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="flex flex-col justify-between h-full gap-8 md:gap-0">
                    <motion.div variants={headerVariants}>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                            Daftar Sekarang!
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-8 md:mb-12">
                            Tertarik ikut serta menjadi Tenant atau Sponsor di Gema Fest 2026?
                            <br className="hidden sm:block" />
                            <span className="sm:hidden"> </span>
                            Isi form atau hubungi kami melalui sosial media di bawah.
                        </p>
                    </motion.div>

                    {/* SOCIAL MEDIA */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-3 md:gap-4 md:w-fit"
                        variants={containerVariants}
                    >
                        {contactsItem.slice(1, 5).map((el, idx) => (
                            <motion.a
                                href={el.link}
                                key={idx}
                                variants={socialCardVariants}
                                whileHover={{ scale: 1.03, y: -3 }}
                                whileTap={{ scale: 0.97 }}
                            >
                                <div className="aspect-square w-full bg-linear-to-tl from-darkColor via-darkColor to-pink-500 to-150% flex flex-col justify-between text-white p-3 sm:p-4 rounded-secondary min-h-[100px] sm:min-h-[120px] md:h-30 md:w-30">
                                    <div className="text-xl sm:text-2xl">
                                        {el.icon}
                                    </div>
                                    <p className="font-semibold text-xs sm:text-sm md:text-base">
                                        {el.label}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div 
                    variants={formVariants}
                    className="w-full"
                >
                    {/* FORM */}
                    <motion.form
                        id='form'
                        className="grid gap-4 md:gap-5 rounded-main bg-linear-to-br from-darkColor via-darkColor to-secondaryColor shadow-mainShadow p-4 sm:p-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">Nama Lengkap / PIC</label>
                            <input
                                type="text"
                                name='fullname'
                                required
                                placeholder="Masukkan nama Anda"
                                className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500 text-sm sm:text-base"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">Nama Brand / Bisnis</label>
                            <input
                                type="text"
                                name='brandname'
                                required
                                placeholder="Masukkan nama brand Anda"
                                className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500 text-sm sm:text-base"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">Email</label>
                            <input
                                name='email'
                                type="email"
                                required
                                placeholder="Masukkan email Anda"
                                className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500 text-sm sm:text-base"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">Pesan (Opsional)</label>
                            <textarea
                                name='messages'
                                rows={3}
                                placeholder="Masukkan pesan Anda"
                                className="resize-none border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500 text-sm sm:text-base"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">Kategori Pendaftaran</label>
                            <select className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 text-lightColor focus:ring-blue-500 text-sm sm:text-base">
                                <option value="">-- Pilih --</option>
                                <option value="tenant">Tenant / UMKM</option>
                                <option value="sponsor">Sponsor</option>
                                <option value="media">Media Partner</option>
                            </select>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="mt-2 sm:mt-4 w-full bg-thirdColor hover:bg-thirdColor/80 text-black p-2.5 sm:p-3 rounded-xl text-base sm:text-lg font-medium transition-all"
                            variants={formFieldVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Kirim Pendaftaran
                        </motion.button>
                        <motion.p
                            className="text-center text-[10px] sm:text-xs text-neutral-400 mt-1 sm:mt-2"
                            variants={formFieldVariants}
                        >
                            *Kami akan menghubungi maksimal 1x24 jam setelah formulir dikirim.
                        </motion.p>
                    </motion.form>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Contacts;