"use client"
import { useEffect, useState } from "react";
import GradualBlurMemo from "./GradualBlur";

export const Navbar = () => {
    const items = ["Home", "Event", "Guest Star", "Tenant", "Contact Form"];

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={`${isScrolled ? " top-3 left-1/2 -translate-x-1/2" : " right-11.5 top-11.5"} hidden duration-500 ease-in-out fixed md:flex gap-1 z-100`}>
                {items.map((item, index) => (
                    <a href=""
                        key={index}
                    >
                        <div className="truncate px-3 py-2 bg-black/20 text-white rounded-full backdrop-blur-sm text-xs font-medium border border-neutral-400/20 duration-300 hover:bg-white/30 active:scale-95">
                            {item}
                        </div>
                    </a>
                ))}
            </nav>

              <nav className={`${isScrolled ? "bottom-3 " : "bottom-5"} left-1/2 -translate-x-1/2 md:hidden duration-500 ease-in-out fixed flex gap-1 z-100`}>
                {items.map((item, index) => (
                    <a href=""
                        key={index}
                    >
                        <div className="truncate px-3 py-2 bg-black/20 text-white rounded-full backdrop-blur-sm text-xs font-medium border border-neutral-400/20 duration-300 hover:bg-white/30 active:scale-95">
                            {item}
                        </div>
                    </a>
                ))}
            </nav>

            <section className={`${isScrolled ? "translate-y-0" : "-translate-y-[300px]"} duration-300 fixed -top-5 left-0 right-0 z-99`}>
                <GradualBlurMemo
                    target="parent"
                    position="top"
                    height="7rem"
                    strength={1}
                    divCount={5}
                    curve="bezier"
                    exponential={true}
                    opacity={1}
                    animated={true} 
                    responsive={true}
                />
            </section >
        </>
    )
}
