import { motion } from 'framer-motion'
import { AlertTriangle, Zap, Activity } from 'lucide-react'

const problems = [
  {
    title: 'Tomadas e interruptores falhando',
    description: 'Pontos soltos, mau contato e instalações antigas que causam oscilações e riscos à sua família.',
    icon: Zap,
  },
  {
    title: 'Disjuntor desarmando frequentemente',
    description: 'Circuitos sobrecarregados, proteção inadequada ou fios danificados que precisam de correção imediata.',
    icon: AlertTriangle,
  },
  {
    title: 'Fios expostos ou sem organização',
    description: 'Cabeamento aparente, falta de identificação e exposição de condutores no quadro e nas caixas de passagem.',
    icon: Activity,
  },
]

export default function Problems() {
  return (
    <section id="problems" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Problemas que resolvemos</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Evite riscos e gaste menos corrigindo a elétrica antes que o problema piorar.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Atendimento residencial em Gravataí para reparos, substituições e ajustes com foco em segurança e durabilidade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/10 text-gold">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
