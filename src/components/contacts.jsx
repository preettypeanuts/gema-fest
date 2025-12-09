"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactsItem } from "@/app/data";

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

export const Contacts = () => {
    const [formData, setFormData] = useState({
        fullname: '',
        brandname: '',
        email: '',
        messages: '',
        category: '',
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formData.fullname || !formData.brandname || !formData.email || !formData.category) {
            setStatus('error');
            setMessage('Mohon lengkapi semua field yang wajib diisi.');
            return;
        }

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage(data.message);
                // Reset form
                setFormData({
                    fullname: '',
                    brandname: '',
                    email: '',
                    messages: '',
                    category: '',
                });
            } else {
                setStatus('error');
                setMessage(data.message || 'Terjadi kesalahan. Silakan coba lagi.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('Terjadi kesalahan jaringan. Silakan coba lagi.');
        }
    };

    return (
        <section className="margin spacing overflow-x-hidden">
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
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
                        onSubmit={handleSubmit}
                        className="grid gap-4 md:gap-5 rounded-main bg-linear-to-br from-darkColor via-darkColor to-secondaryColor shadow-mainShadow p-4 sm:p-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Success/Error Message */}
                        {message && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`p-3 rounded-xl text-sm sm:text-base ${status === 'success'
                                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                        : 'bg-red-500/20 text-red-300 border border-red-500/30'
                                    }`}
                            >
                                {status === 'success' ? '✅ ' : '⚠️ '}{message}
                            </motion.div>
                        )}

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">
                                Nama Lengkap / PIC <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name='fullname'
                                value={formData.fullname}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                placeholder="Masukkan nama Anda"
                                className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 text-lightColor focus:ring-blue-500 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">
                                Nama Brand / Bisnis <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                name='brandname'
                                value={formData.brandname}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                placeholder="Masukkan nama brand Anda"
                                className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 text-lightColor focus:ring-blue-500 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">
                                Email <span className="text-red-400">*</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                placeholder="Masukkan email Anda"
                                className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 text-lightColor focus:ring-blue-500 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">Pesan (Opsional)</label>
                            <textarea
                                name='messages'
                                value={formData.messages}
                                onChange={handleChange}
                                rows={3}
                                disabled={status === 'loading'}
                                placeholder="Masukkan pesan Anda"
                                className="resize-none border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 text-lightColor focus:ring-blue-500 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            />
                        </motion.div>

                        <motion.div className="grid gap-2" variants={formFieldVariants}>
                            <label className="font-medium text-lightColor text-sm sm:text-base">
                                Kategori Pendaftaran <span className="text-red-400">*</span>
                            </label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                required
                                disabled={status === 'loading'}
                                className="border p-2.5 sm:p-3 rounded-xl focus:ring-2 placeholder:text-neutral-300 text-lightColor text-lightColor focus:ring-blue-500 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <option value="">-- Pilih --</option>
                                <option value="tenant">Tenant / UMKM</option>
                                <option value="sponsor">Sponsor</option>
                                <option value="media">Media Partner</option>
                            </select>
                        </motion.div>

                        <motion.button
                            type="submit"
                            disabled={status === 'loading'}
                            className="mt-2 sm:mt-4 w-full bg-thirdColor hover:bg-thirdColor/80 text-black p-2.5 sm:p-3 rounded-xl text-base sm:text-lg font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            variants={formFieldVariants}
                            whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                            whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                        >
                            {status === 'loading' ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Mengirim...
                                </>
                            ) : (
                                'Kirim Pendaftaran'
                            )}
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