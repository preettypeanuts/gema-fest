import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Contacts } from "@/components/contacts";
import { RunningImage } from "@/components/running-image";
import { Faq } from "@/components/faqs";
import Events from "@/components/event";
import HighlightSection from "@/components/why-us";

export default function Home() {
  return (
    <>
      <Banner />
      <RunningImage />

      <section id="about">
        <About />
      </section>

      <section id="why-us">
        <HighlightSection />
      </section>
      <section id="event">
        <Events />
      </section>

      <section id="faq">
        <Faq />
      </section>

      <section id="contact">
        <Contacts />
      </section>
    </>
  );
}
