import { motion } from 'framer-motion'
import { Wrench, ShieldCheck, Zap } from 'lucide-react'

const maintenancePoints = [
  {
    title: 'Conferência de fluxo elétrico',
    description: 'Identificação de pontos quentes e balanceamento dos circuitos para reduzir falhas.'
  },
  {
    title: 'Proteção e disjuntores',
    description: 'Avaliação de disjuntores, DPS e cabeamento, com troca quando necessário para maior segurança.'
  },
  {
    title: 'Revisão preventiva',
    description: 'Manutenção periódica para garantir funcionamento confiável e evitar reparos emergenciais.'
  },
]

export default function Maintenance() {
  return (
    <section id="maintenance" className="py-24 bg-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Manutenção e segurança</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Manutenção elétrica residencial que evita problemas e protege sua casa.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
              Planos rápidos para inspeção, correção de defeitos e atualizações de proteção elétrica com foco em confiabilidade.
            </p>

            <div className="mt-10 grid gap-4">
              {maintenancePoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="glass-card rounded-[2rem] border border-white/10 p-6 shadow-glow"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-gold/10 text-gold">
                    {index === 0 ? <Zap className="h-6 w-6" /> : index === 1 ? <ShieldCheck className="h-6 w-6" /> : <Wrench className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="overflow-hidden rounded-[2rem] border border-white/10 shadow-glow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <img src="/img/maintenance-electric.jpg" alt="Manutenção elétrica" className="h-[480px] w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
