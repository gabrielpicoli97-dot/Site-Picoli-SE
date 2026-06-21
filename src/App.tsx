import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Problems from './components/Problems'
import Differentials from './components/Differentials'
import WhoWeAre from './components/WhoWeAre'
import Steps from './components/Steps'
import Gallery from './components/Gallery'
import Maintenance from './components/Maintenance'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { WHATSAPP_URL } from './config'

function App() {
  return (
    <div className="min-h-screen bg-midnight text-white">
      <Header />
      <main className="relative overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(244,195,74,0.14),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="relative z-10">
          <Hero />
          <Services />
          <Problems />
          <Differentials />
          <WhoWeAre />
          <Steps />
          <Gallery />
          <Maintenance />
          <Testimonials />
          <section className="py-24">
            <div className="mx-auto flex max-w-7xl items-center justify-center px-6 sm:px-8 lg:px-12">
              <img
                src="/img/logo.png"
                alt="Logo Picoli Soluções Elétricas"
                className="max-w-[180px] object-contain"
              />
            </div>
          </section>
          <CTA />
          <Footer />
        </div>
      </main>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gold shadow-lg shadow-gold/30 transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <span className="absolute -top-1 right-1 inline-flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-white" />
        </span>
        <img src="/img/whatsapp.png" alt="WhatsApp" className="h-8 w-8" />
      </a>
    </div>
  )
}

export default App
