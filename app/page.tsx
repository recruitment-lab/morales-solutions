import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustryStrip from "@/components/IndustryStrip";
import WhyUs from "@/components/WhyUs";
import DualPath from "@/components/DualPath";
import ComplianceBand from "@/components/ComplianceBand";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IndustryStrip />
        <WhyUs />
        <DualPath />
        <ComplianceBand />
      </main>
      <Footer />
    </>
  );
}
