import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import CloudSection from '@/components/CloudSection'
import ValueProp from '@/components/ValueProp'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-slate-900 text-slate-50 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <CloudSection />
      <ValueProp />
      <ContactSection />
      <Footer />
    </main>
  )
}
