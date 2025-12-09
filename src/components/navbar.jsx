"use client"

import { useEffect, useState, useRef } from "react";
import { Sparkles, Star, Zap, Gift, Timer, Ticket, X, ChevronLeft, ChevronRight } from "lucide-react";

// ==================== STICKY BAR ====================
export const StickyBar = ({ onClose }) => {
    const announcements = [
        { icon: Sparkles, text: "Special Price Untuk 10 Tenant Pertama" },
        { icon: Star, text: "Daftar Sekarang & Dapatkan Bonus Eksklusif" },
        { icon: Zap, text: "Slot Terbatas — Jangan Sampai Kehabisan!" },
        { icon: Gift, text: "Gratis Media Exposure untuk Early Bird" },
        { icon: Timer, text: "Promo Berakhir dalam Waktu Terbatas" },
        { icon: Ticket, text: "Gema Fest 2026 — Be Part of Something Big" },
    ];

    const items = [...announcements, ...announcements];

    return (
        <div className="relative bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 py-2.5 border-b border-white/10">
            <div className="relative flex overflow-hidden pr-12">
                <div className="flex items-center gap-10 whitespace-nowrap animate-scroll">
                    {items.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={idx} className="flex items-center gap-2.5">
                                <div className="relative">
                                    <IconComponent className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white/90">
                                    {item.text}
                                </span>
                                <span className="text-amber-400/50 text-[10px]">✦</span>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center gap-10 whitespace-nowrap animate-marquee" aria-hidden="true">
                    {items.map((item, idx) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={`dup-${idx}`} className="flex items-center gap-2.5">
                                <div className="relative">
                                    <IconComponent className="w-3.5 h-3.5 text-amber-400" />
                                </div>
                                <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-white/90">
                                    {item.text}
                                </span>
                                <span className="text-amber-400/50 text-[10px]">✦</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
            <button
                onClick={onClose}
                className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center bg-linear-to-l from-gray-900 via-gray-900 to-transparent z-20 group"
                aria-label="Close announcement"
            >
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 group-active:scale-95">
                    <X className="w-3.5 h-3.5 text-black group-hover:text-white transition-colors" />
                </div>
            </button>
        </div>
    );
};

// ==================== NAV ITEM ====================
const NavItem = ({ item, isActive, isMobile, itemRef }) => {
    if (isMobile) {
        return (
            <a href={item.href} ref={itemRef}>
                <div
                    className={`
                        relative px-4 py-2.5 rounded-full text-[11px] font-semibold tracking-wide
                        transition-all duration-300 ease-out active:scale-95
                        ${isActive
                            ? "bg-white text-gray-900 shadow-lg shadow-white/30"
                            : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                        }
                    `}
                >
                    {/* Active glow effect */}
                    {isActive && (
                        <div className="absolute inset-0 bg-amber-400/40 rounded-2xl blur-xl -z-10 animate-pulse" />
                    )}

                    {/* Dot indicator for active */}
                    {isActive && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50" />
                    )}

                    <span className="relative uppercase whitespace-nowrap">{item.label}</span>
                </div>
            </a>
        );
    }

    return (
        <a href={item.href} className="relative">
            <div
                className={`
                    relative truncate px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide 
                    duration-300 active:scale-95 overflow-hidden
                    ${isActive ? "text-gray-900" : "text-white hover:bg-white/10"}
                `}
            >
                <div
                    className={`
                        absolute inset-0 bg-white rounded-full
                        transition-all duration-500 ease-out
                        ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                    `}
                />
                <div
                    className={`
                        absolute inset-0 bg-amber-400 rounded-full blur-md -z-10
                        transition-all duration-500
                        ${isActive ? "opacity-50" : "opacity-0"}
                    `}
                />
                <span className="relative z-10 uppercase tracking-wider">{item.label}</span>
            </div>
        </a>
    );
};

// ==================== MOBILE NAV SCROLL INDICATOR ====================
const ScrollIndicator = ({ direction, onClick, visible }) => (
    <button
        onClick={onClick}
        className={`
            absolute ${direction === 'left' ? '-left-1' : '-right-1'} top-1/2 -translate-y-1/2
            w-8 h-15 flex items-center justify-center z-20
            bg-linear-to-${direction === 'left' ? 'r' : 'l'} from-black/80 via-black/40 to-transparent
            transition-all duration-300
            ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
        aria-label={`Scroll ${direction}`}
    >
        {direction === 'left' ? (
            <ChevronLeft className="w-4 h-4 text-white/70" />
        ) : (
            <ChevronRight className="w-4 h-4 text-white/70" />
        )}
    </button>
);

// ==================== NAVBAR ====================
export const Navbar = () => {
    const items = [
        { label: "About", href: "#about", id: "about" },
        { label: "Why Us", href: "#why-us", id: "why-us" },
        { label: "Event", href: "#event", id: "event" },
        { label: "Faq", href: "#faq", id: "faq" },
        { label: "Contact", href: "#contact", id: "contact" },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [showStickyBar, setShowStickyBar] = useState(true);
    const [activeSection, setActiveSection] = useState("");
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const mobileNavRef = useRef(null);
    const itemRefs = useRef({});

    // Handle scroll for navbar visibility
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Check scroll position for indicators
    const checkScrollPosition = () => {
        const nav = mobileNavRef.current;
        if (!nav) return;

        setCanScrollLeft(nav.scrollLeft > 10);
        setCanScrollRight(nav.scrollLeft < nav.scrollWidth - nav.clientWidth - 10);
    };

    // Auto-scroll to active item
    useEffect(() => {
        if (activeSection && itemRefs.current[activeSection] && mobileNavRef.current) {
            const item = itemRefs.current[activeSection];
            const nav = mobileNavRef.current;

            const itemRect = item.getBoundingClientRect();
            const navRect = nav.getBoundingClientRect();

            const itemCenter = itemRect.left + itemRect.width / 2;
            const navCenter = navRect.left + navRect.width / 2;
            const scrollOffset = itemCenter - navCenter;

            nav.scrollBy({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
    }, [activeSection]);

    // Intersection Observer for active section detection
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            items.forEach((item) => {
                const element = document.getElementById(item.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const handleNavClick = (id) => {
        setActiveSection(id);
    };

    const handleCloseStickyBar = () => {
        setShowStickyBar(false);
    };

    const scrollNav = (direction) => {
        const nav = mobileNavRef.current;
        if (!nav) return;

        const scrollAmount = direction === 'left' ? -120 : 120;
        nav.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    const stickyBarHeight = showStickyBar ? "36px" : "0px";

    return (
        <>
            {/* ========== STICKY BAR ========== */}
            <div
                className={`
                    sticky top-0 left-0 right-0 z-60 overflow-hidden
                    transition-all duration-500 ease-out
                    ${showStickyBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0"}
                `}
            >
                <StickyBar onClose={handleCloseStickyBar} />
            </div>

            {/* ========== MOBILE NAVBAR (Bottom) - Enhanced ========== */}
            <div
                className={`
                    ${isScrolled ? "bottom-6" : "bottom-4"} 
                    left-0 right-0 px-3
                    md:hidden 
                    duration-500 ease-in-out 
                    fixed z-100
                `}
            >
                {/* Container with glass effect */}
                <div className="relative bg-black/70 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl shadow-black/50 py-1 px-1 overflow-hidden">

                    {/* Ambient glow */}
                    <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />

                    {/* Scroll indicators */}
                    <ScrollIndicator
                        direction="left"
                        onClick={() => scrollNav('left')}
                        visible={canScrollLeft}
                    />
                    <ScrollIndicator
                        direction="right"
                        onClick={() => scrollNav('right')}
                        visible={canScrollRight}
                    />

                    {/* Scrollable nav container */}
                    <nav
                        ref={mobileNavRef}
                        onScroll={checkScrollPosition}
                        className="flex gap-1.5 overflow-x-auto scrollbar-hide scroll-smooth"
                        style={{
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch'
                        }}
                    >
                        {items.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => handleNavClick(item.id)}
                                className="shrink-0"
                            >
                                <NavItem
                                    item={item}
                                    isActive={activeSection === item.id}
                                    isMobile={true}
                                    itemRef={(el) => itemRefs.current[item.id] = el}
                                />
                            </div>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ========== DESKTOP NAVBAR (Top - Below Sticky Bar) ========== */}
            <nav
                className={`
                    ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"} 
                    left-1/2 -translate-x-1/2 
                    hidden md:flex gap-1 
                    duration-500 ease-in-out 
                    fixed z-50
                    transition-all
                `}
                style={{
                    top: isScrolled
                        ? `calc(${stickyBarHeight} + ${showStickyBar ? "16px" : "16px"})`
                        : stickyBarHeight
                }}
            >
                <div className="flex gap-1 p-1 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/50">
                    {items.map((item, index) => (
                        <div key={index} onClick={() => handleNavClick(item.id)}>
                            <NavItem
                                item={item}
                                isActive={activeSection === item.id}
                                isMobile={false}
                            />
                        </div>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;