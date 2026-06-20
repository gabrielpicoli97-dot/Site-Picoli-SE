import { motion } from 'framer-motion'
import { Cpu, Globe2, Shield, Sparkles } from 'lucide-react'

const items = [
  {
    title: 'Segurança certificada',
    description: 'Execução com cabos, conectores e disjuntores adequados para evitar curto e aquecimento.',
    icon: Shield,
  },
  {
    title: 'Atendimento local',
    description: 'Profissional de Gravataí com deslocamento rápido e escopo claro para o seu lar.',
    icon: Sparkles,
  },
  {
    title: 'Acabamento técnico',
    description: 'Serviço organizado com identificação de circuitos e acabamentos limpos em tomadas e quadros.',
    icon: Cpu,
  },
  {
    title: 'Responsabilidade diária',
    description: 'Comunicação direta, orçamento transparente e comprometimento com prazos.',
    icon: Globe2,
  },
]

export default function Differentials() {
  return (
    <section id="differentials" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Diferenciais</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Segurança, organização e confiança em cada etapa.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="glass-card flex items-start gap-4 rounded-[2rem] border border-white/10 p-6 shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/10 text-gold">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
