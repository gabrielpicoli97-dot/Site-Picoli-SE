import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Problems from './components/Problems'
import Differentials from './components/Differentials'
import Steps from './components/Steps'
import Gallery from './components/Gallery'
import Maintenance from './components/Maintenance'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

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
          <Steps />
          <Gallery />
          <Maintenance />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
