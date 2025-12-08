import { contactsItem } from "@/app/data";

export const Footer = () => {
    return (
        <footer className="w-full bg-darkColor text-white py-12 px-6 md:px-12">
            <div className="mx-auto grid md:grid-cols-3 gap-10">

                {/* BRAND */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-bold">Gema Fest 2026</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Festival kuliner, hiburan, UMKM, dan kolaborasi kreatif.
                        Bergabunglah menjadi bagian dari perayaan terbesar tahun ini.
                    </p>
                </div>

                {/* NAVIGATION */}
                <div>
                    <h4 className="font-semibold mb-4 text-lg">Navigasi</h4>
                    <ul className="flex flex-col gap-3 text-gray-300 text-sm">
                        <li><a href="#about" className="hover:text-white transition">Tentang Event</a></li>
                        <li><a href="#tenant" className="hover:text-white transition">Daftar Tenant</a></li>
                        <li><a href="#sponsor" className="hover:text-white transition">Paket Sponsor</a></li>
                        <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                        <li><a href="#contact" className="hover:text-white transition">Kontak</a></li>
                    </ul>
                </div>

                {/* SOCIALS */}
                <div>
                    <h4 className="font-semibold mb-4 text-lg">Sosial Media</h4>
                    <ul className="grid gap-3 text-sm">
                        {contactsItem.map((item, idx) => (
                            <li key={idx}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    className="text-gray-300 hover:text-white transition"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-lightColor/30 mt-12 pt-6 text-center text-gray-400 text-xs">
                © {new Date().getFullYear()} Gema Fest 2026. All Rights Reserved.
            </div>
        </footer>
    );
};
