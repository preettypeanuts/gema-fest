import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Events } from "@/components/event";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import HighlightSection from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Banner />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="why-us">
        <HighlightSection />
      </section>
      <section id="event">
        <Events />
      </section>

    </>
  );
}
