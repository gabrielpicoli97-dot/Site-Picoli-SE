import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Marina P.',
    role: 'Moradora de Gravataí',
    quote: 'O serviço foi feito com cuidado e o eletricista explicou cada etapa. Hoje minha casa está muito mais segura e organizada.',
  },
  {
    name: 'Eduardo M.',
    role: 'Condomínio residencial',
    quote: 'A revisão elétrica resolveu os desligamentos constantes e o quadro agora está identificado corretamente.',
  },
  {
    name: 'Renata S.',
    role: 'Família em Santa Cecília',
    quote: 'A troca de tomadas e a instalação de luminárias ficaram impecáveis. Atendimento rápido e profissional.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Depoimentos</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Clientes locais que já sentem a diferença.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <p className="text-base leading-8 text-white/70">“{item.quote}”</p>
              <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/60">
                <p className="font-semibold text-white">{item.name}</p>
                <p>{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
