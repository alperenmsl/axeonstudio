import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
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
        <WhyAxeon />
        <Templates />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
