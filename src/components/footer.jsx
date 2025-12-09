import { contactsItem } from "@/app/data";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="m-4 md:m-10 bg-linear-to-br from-darkColor via-darkColor to-mainColor to-170% p-4 md:p-10 rounded-main">
            <div className="mx-auto grid md:grid-cols-3 gap-10">

                {/* BRAND */}
                <div className="flex flex-col gap-4">
                    <div className="flex md:flex-row flex-row justify-center md:justify-start items-center gap-2">
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
                    </div>
                    <h3 className="text-2xl font-bold text-white">Gema Fest 2026</h3>
                    <p className="text-sm text-neutral-200 leading-relaxed">
                        Festival kuliner, hiburan, UMKM, dan kolaborasi kreatif.
                        Bergabunglah menjadi bagian dari perayaan terbesar tahun ini.
                    </p>
                </div>

                {/* NAVIGATION */}
                <div>
                    <h4 className="font-semibold mb-4 text-lg text-white">Navigasi</h4>
                    <ul className="flex flex-col gap-3 text-neutral-200 text-sm">
                        <li><a href="#about" className="hover:text-baseColor transition">Tentang Event</a></li>
                        <li><a href="#form" className="hover:text-baseColor transition">Daftar Tenant</a></li>
                        <li><a href="#sponsor" className="hover:text-baseColor transition">Paket Sponsor</a></li>
                        <li><a href="#faq" className="hover:text-baseColor transition">FAQ</a></li>
                        <li><a href="#contact" className="hover:text-baseColor transition">Kontak</a></li>
                    </ul>
                </div>

                {/* SOCIALS */}
                <div>
                    <h4 className="font-semibold mb-4 text-lg text-white">Sosial Media</h4>
                    <ul className="grid gap-3 text-sm">
                        {contactsItem.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="text-neutral-200 hover:text-baseColor transition"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-lightColor/30 mt-12 pt-6 text-center text-lightColor text-xs">
                © {new Date().getFullYear()} Gema Fest 2026. All Rights Reserved.
            </div>
        </footer>
    );
};
