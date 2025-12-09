"use client"
import { contactsItem } from "@/app/data";
import Image from "next/image";
import { motion } from "framer-motion";

export const Footer = () => {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const logoVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="m-4 md:m-10 bg-linear-to-br from-darkColor via-darkColor to-mainColor to-170% p-4 md:p-10 rounded-main"
        >
            <div className="mx-auto grid md:grid-cols-3 gap-10">

                {/* BRAND */}
                <motion.div variants={itemVariants} className="flex flex-col gap-4">
                    <motion.div
                        variants={logoVariants}
                        className="flex md:flex-row flex-row justify-center md:justify-start items-center gap-2"
                    >
                        <Image
                            width={80}
                            height={80}
                            className="grayscale brightness-300"
                            src="/kawan.png"
                            alt="kawan logo"
                        />
                        <Image
                            width={80}
                            height={80}
                            className="grayscale brightness-300"
                            src="/ge.png"
                            alt="gema fest 2026 logo"
                        />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Gema Fest 2026</h3>
                    <p className="text-sm text-neutral-200 leading-relaxed">
                        Festival kuliner, hiburan, UMKM, dan kolaborasi kreatif.
                        Bergabunglah menjadi bagian dari perayaan terbesar tahun ini.
                    </p>
                </motion.div>

                {/* NAVIGATION */}
                <motion.div variants={itemVariants}>
                    <h4 className="font-semibold mb-4 text-lg text-white">Navigasi</h4>
                    <ul className="flex flex-col gap-3 text-neutral-200 text-sm">
                        {["Tentang Event", "Daftar Tenant", "Paket Sponsor", "FAQ", "Kontak"].map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
                            >
                                <a
                                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                                    className="hover:text-baseColor transition"
                                >
                                    {item}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* SOCIALS */}
                <motion.div variants={itemVariants}>
                    <h4 className="font-semibold mb-4 text-lg text-white">Sosial Media</h4>
                    <ul className="grid gap-3 text-sm">
                        {contactsItem.map((item, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.3 }}
                            >
                                <a
                                
                                    href={item.link}
                                    target="_blank"
                                    className="text-neutral-200 hover:text-baseColor transition"
                                >
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

            </div>

            {/* COPYRIGHT */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="border-t border-lightColor/30 mt-12 pt-6 text-center text-lightColor text-xs"
            >
                © {new Date().getFullYear()} Gema Fest 2026. All Rights Reserved.
            </motion.div>
        </motion.footer>
    );
};