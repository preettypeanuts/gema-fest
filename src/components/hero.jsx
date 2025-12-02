"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
    "https://images.unsplash.com/photo-1639664342827-2d68822c55c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0",
    "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0",
]

export const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000) 

        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <section className="flex items-center justify-center h-[80lvh] md:h-screen w-full">
                <div
                    className="w-full  h-[calc(80vh-2rem)]  md:h-[calc(100vh-2rem)]  m-4 rounded-3xl overflow-hidden relative">
                    
                    {/* Background Images dengan Fade Animation */}
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            fill
                            className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                            src={src}
                            alt={`banner image ${index + 1}`}
                            priority={index === 0}
                        />
                    ))}

                    <div className="absolute inset-0 w-full h-full bg-black/20"></div>

                    <div className="absolute top-0 left-0 bg-black text-mainColor pr-2 pb-2 rounded-br-3xl">
                        <div className="bg-black rounded-out-lb-3xl"></div>
                        <div className="bg-black rounded-out-tr-3xl"></div>
                        <div className="text-sm sm:text-lg font-semibold uppercase tracking-wider px-3 sm:px-4 pt-2">
                            <span className="bg-linear-to-br from-orange-300 via-orange-300 to-orange-500 bg-clip-text text-transparent">
                                K - One Event
                            </span>
                        </div>
                    </div>

                    <div className="absolute inset-0 w-full h-full flex items-center">
                        <div className="mx-5 md:mx-10 max-w-3xl space-y-4 sm:space-y-6">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] sm:leading-15 text-white">
                                GEMA Fest 2026
                            </h1>
                            <p className="opacity-80 text-white text-sm sm:text-base max-w-xl">
                                Nikmati festival kuliner terbesar di Jakarta Timur—hadir dengan tenant pilihan, food street, hiburan ramadhan, dan beragam aktivitas seru sepanjang satu bulan penuh.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <button className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 bg-white rounded-full cursor-pointer duration-300 hover:bg-white/90 active:scale-95">
                                    Daftar Jadi Tenant
                                </button>
                                <button className="text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 bg-black/10 border border-neutral-400/20 text-white backdrop-blur-sm rounded-full cursor-pointer duration-300 hover:bg-black/30 active:scale-95">
                                    Explore Event
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-0 bg-black text-mainColor pl-2 sm:pl-3 pt-2 sm:pt-3 rounded-tl-3xl">
                        <div className="bg-black rounded-out-bl-3xl"></div>
                        <div className="bg-black rounded-out-rt-3xl"></div>
                        <div className="font-semibold capitalize tracking-wider text-xs sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-neutral-900 rounded-2xl">
                            <span className="bg-linear-to-br from-sky-200 via-sky-300 to-sky-300 bg-clip-text text-transparent">
                                Gembira Ramadhan
                                <br />
                                Penuh Rasa & Cerita
                            </span>
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="absolute bottom-4 left-4 flex gap-2 z-10 p-2 sm:p-3 bg-black/5 border border-neutral-400/10 rounded-full backdrop-blur-sm">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`cursor-pointer w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex 
                                        ? "bg-white w-4 sm:w-6" 
                                        : "bg-white/50 hover:bg-black/70"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}