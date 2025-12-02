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
      <Banner />
      <About/>
      <HighlightSection/>
      <Events/>
    </>
  );
}
