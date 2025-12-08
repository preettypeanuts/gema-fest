import Image from "next/image"

export const About = () => {
    return (
        <>
            <section className="margin spacing">
                <div className=" space-y-5">
                    <h1 className="font-heading text-2xl font-bold tracking-tight">
                        <span className="bg-linear-to-br from-black via-black to-mainColor bg-clip-text text-transparent">
                            Apa Itu GEMA Fest ?
                        </span>
                    </h1>

                    <p className="text-3xl font-medium bg-linear-to-br from-black via-black to-thirdColor bg-clip-text text-transparent">
                        GEMA Fest adalah festival Ramadhan yang menghadirkan pengalaman penuh rasa, cerita, dan keceriaan. Mulai dari jajanan viral, kuliner khas Nusantara, spot berfoto, live performance, hingga kegiatan Ramadhan bernuansa hangat—semuanya kami hadirkan dalam satu tempat.
                    </p>
                </div>
            </section>

        </>
    )
}