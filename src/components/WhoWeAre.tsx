import { motion } from 'framer-motion'

export default function WhoWeAre() {
  return (
    <section id="quem-somos" className="py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="sr-only">Quem somos</h2>
        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-midnight p-4 shadow-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/img/quem%20somos.png"
            alt="Quem somos Picoli Soluções Elétricas"
            className="w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
