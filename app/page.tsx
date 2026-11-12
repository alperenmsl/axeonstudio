import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Templates } from "@/components/Templates";
import { WhyAxeon } from "@/components/WhyAxeon";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Process />
        <WhyAxeon />
        <Templates />
        <Faq />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
