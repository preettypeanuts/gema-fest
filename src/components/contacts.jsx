import { contactsItem } from "@/app/data";
import Link from "next/link";
import { MdDirections } from "react-icons/md";

export const Contacts = () => {
    return (
        <section className="margin spacing">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Daftar Sekarang!
                        </h2>
                        <p className="text-gray-600 mb-12">
                            Tertarik ikut serta menjadi Tenant atau Sponsor di Gema Fest 2026?
                            <br />
                            Isi form atau hubungi kami melalui sosial media di bawah.
                        </p>
                    </div>

                    {/* SOCIAL MEDIA */}
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:w-fit">
                        {contactsItem.slice(1, 5).map((el, idx) => (
                            <a
                                href=""
                                key={idx}
                            >
                                <div className="md:aspect-square w-full bg-darkColor flex flex-col justify-between text-white p-4 rounded-secondary min-h-30 min-w-30 md:h-30 md:w-30">
                                    <div>
                                        {el.icon}
                                    </div>

                                    <p className="font-medium">
                                        {el.label}
                                    </p>

                                </div>
                            </a>
                        ))}
                    </div>
                </div>


                <div>
                    {/* FORM */}
                    <form className="grid gap-5 rounded-main bg-white shadow-mainShadow p-6">
                        <div className="grid gap-2">
                            <label className="font-medium">Nama Lengkap / PIC</label>
                            <input
                                type="text"
                                required
                                placeholder="Masukkan nama Anda"
                                className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label className="font-medium">Nama Brand / Bisnis</label>
                            <input
                                type="text"
                                required
                                placeholder="Masukkan nama Anda"
                                className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                required
                                placeholder="Masukkan email Anda"
                                className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label className="font-medium">Pesan (Opsional)</label>
                            <textarea
                                type="email"
                                required
                                placeholder="Masukkan pesan Anda"
                                className="resize-none border p-3 rounded-xl focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="grid gap-2">
                            <label className="font-medium">Kategori Pendaftaran</label>
                            <select className="border p-3 rounded-xl focus:ring-2 focus:ring-blue-500">
                                <option value="">-- Pilih --</option>
                                <option value="tenant">Tenant / UMKM</option>
                                <option value="sponsor">Sponsor</option>
                                <option value="media">Media Partner</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="mt-4 w-full bg-thirdColor hover:bg-thirdColor/80 text-black p-3 rounded-xl text-lg font-medium transition-all"
                        >
                            Kirim Pendaftaran
                        </button>
                        <p className="text-center text-xs text-gray-500 mt-2">
                            *Kami akan menghubungi maksimal 1x24 jam setelah formulir dikirim.
                        </p>
                    </form>
                </div>
            </div>
            <div id="maps" className="mt-10 shadow-mainShadow rounded-main overflow-hidden">
                <div className="mapouter rounded-3xl overflow-hidden grow h-[50lvh] md:h-[60lvh] w-full">
                    <div className="overflow-hidden rounded-box h-full relative">
                        <iframe
                            className="w-full h-full contrast-100"
                            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.581677730621!2d106.95628177499015!3d-6.1866957938008715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b09ef2ae3ff%3A0x6e906e182d101bf!2sMall%20Grand%20Cakung!5e0!3m2!1sid!2sid!4v1765185415582!5m2!1sid!2sid`}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 ">
                            <Link
                                href="https://maps.app.goo.gl/3bCgnUAtDdVzvFQS6"
                            >
                                <button className="flex items-center gap-2 px-3 py-2 bg-linear-to-br bg-mainColor/20 duration-300 hover:bg-mainColor hover:text-white backdrop-blur-sm cursor-pointer text-darkColor rounded-b-secondary font-semibold shadow-custom">
                                    <MdDirections /> Bawa Aku Ke Lokasi!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
