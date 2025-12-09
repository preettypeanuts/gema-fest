"use client"
import { motion } from 'framer-motion';
import { contactsItem } from "@/app/data";
import Link from "next/link";
import { MdDirections } from "react-icons/md";

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

const socialCardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
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

const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

const mapVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
};

const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
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
        <section className="margin spacing">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex flex-col justify-between h-full">
                    <motion.div variants={headerVariants}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Daftar Sekarang!
                        </h2>
                        <p className="text-gray-600 mb-12">
                            Tertarik ikut serta menjadi Tenant atau Sponsor di Gema Fest 2026?
                            <br />
                            Isi form atau hubungi kami melalui sosial media di bawah.
                        </p>
                    </motion.div>

                    {/* SOCIAL MEDIA */}
                    <motion.div
                        className="grid md:grid-cols-4 grid-cols-2 gap-4 md:w-fit"
                        variants={containerVariants}
                    >
                        {contactsItem.slice(1, 5).map((el, idx) => (
                            <motion.a
                                href=""
                                key={idx}
                                variants={socialCardVariants}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="md:aspect-square w-full bg-linear-to-tl from-darkColor via-darkColor to-pink-500 to-190% flex flex-col justify-between text-white p-4 rounded-secondary min-h-30 min-w-30 md:h-30 md:w-30">
                                    <div>
                                        {el.icon}
                                    </div>
                                    <p className="font-semibold">
                                        {el.label}
                                    </p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div variants={formVariants}>
                    {/* FORM */}
                    <motion.form
                        id='form'
                        className="grid gap-5 rounded-main bg-linear-to-br from-darkColor via-darkColor to-secondaryColor to-180% shadow-mainShadow p-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor">Nama Lengkap / PIC</label>
                            <input
                                type="text"
                                required
                                placeholder="Masukkan nama Anda"
                                className="border p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor">Nama Brand / Bisnis</label>
                            <input
                                type="text"
                                required
                                placeholder="Masukkan nama Anda"
                                className="border p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="Masukkan email Anda"
                                className="border p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor">Pesan (Opsional)</label>
                            <textarea
                                required
                                placeholder="Masukkan pesan Anda"
                                className="resize-none border p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 focus:ring-blue-500"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor">Kategori Pendaftaran</label>
                            <select className="border p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 text-lightColor focus:ring-blue-500">
                                <option value="">-- Pilih --</option>
                                <option value="tenant">Tenant / UMKM</option>
                                <option value="sponsor">Sponsor</option>
                                <option value="media">Media Partner</option>
                            </select>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="mt-4 w-full bg-thirdColor hover:bg-thirdColor/80 text-black p-3 rounded-xl text-lg font-medium transition-all"
                            variants={formFieldVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Kirim Pendaftaran
                        </motion.button>
                        <motion.p
                            className="text-center text-xs text-neutral-400 mt-2"
                            variants={formFieldVariants}
                        >
                            *Kami akan menghubungi maksimal 1x24 jam setelah formulir dikirim.
                        </motion.p>
                    </motion.form>
                </motion.div>
            </motion.div>

            {/* MAPS SECTION */}
            <motion.div
                id="maps"
                className="mt-10 shadow-mainShadow rounded-main overflow-hidden"
                variants={mapVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <div className="mapouter rounded-3xl overflow-hidden grow h-[50lvh] md:h-[60lvh] w-full">
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
                                    className="flex items-center truncate gap-2 px-3 py-2 bg-linear-to-br bg-mainColor/20 duration-300 hover:bg-mainColor hover:text-white backdrop-blur-sm cursor-pointer text-darkColor rounded-b-secondary font-semibold shadow-custom"
                                    whileHover={{ scale: 1.05, y: 2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <MdDirections /> Bawa Aku Ke Lokasi!
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contacts;