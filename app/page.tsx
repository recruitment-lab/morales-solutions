import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import IndustryStrip from '@/components/sections/IndustryStrip'
import WhyUs from '@/components/sections/WhyUs'
import TwoBlocks from '@/components/sections/TwoBlocks'
import ComplianceBand from '@/components/sections/ComplianceBand'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-navy">
      <Navbar />
      <Hero />
      <IndustryStrip />
      <WhyUs />
      <TwoBlocks />
      <ComplianceBand />
      <ContactSection />
      <Footer />
    </main>
  )
}
