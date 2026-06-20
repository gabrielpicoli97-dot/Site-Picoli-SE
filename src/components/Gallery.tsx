import { motion } from 'framer-motion'

const gallery = [
  { src: '/img/hero-electric.jpg', alt: 'Montagem de instalação elétrica residencial' },
  { src: '/img/panel-electric.jpg', alt: 'Quadro elétrico organizado e identificado' },
  { src: '/img/wiring-electric.jpg', alt: 'Cabos elétricos bem organizados' },
  { src: '/img/multimeter-electric.jpg', alt: 'Verificação com multímetro profissional' },
  { src: '/img/maintenance-electric.jpg', alt: 'Serviço de manutenção elétrica preventiva' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Galeria</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Veja o padrão visual do nosso trabalho elétrico residencial.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image) => (
            <motion.div
              key={image.src}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glow"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img src={image.src} alt={image.alt} className="h-60 w-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
