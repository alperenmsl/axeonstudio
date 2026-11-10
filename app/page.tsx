import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
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
