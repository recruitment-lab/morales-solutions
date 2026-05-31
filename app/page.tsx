import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustryStrip from "@/components/IndustryStrip";
import WhyUs from "@/components/WhyUs";
import TwoBlocks from "@/components/TwoBlocks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IndustryStrip />
        <WhyUs />
        <TwoBlocks />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
