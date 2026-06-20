import { motion } from 'framer-motion'
import { Bolt, Plug2, Lightbulb, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Instalação e troca de tomadas',
    description: 'Substituição e novos pontos com acabamento firme, proteção e uso seguro.',
    icon: Plug2,
  },
  {
    title: 'Instalação de interruptores',
    description: 'Pontos organizados, ligações limpas e funções adaptadas ao uso diário.',
    icon: Bolt,
  },
  {
    title: 'Instalação de luminárias',
    description: 'Iluminação residencial com acabamento profissional e economia inteligente.',
    icon: Lightbulb,
  },
  {
    title: 'Quadros elétricos e disjuntores',
    description: 'Organização de quadro, identificação de circuitos e ajustes de segurança.',
    icon: ShieldCheck,
  },
]

const complementaryServices = [
  'Ventilador de teto',
  'Caça de curtos e mau contato',
  'Organização e revisão de pontos elétricos',
  'Substituição de chuveiros',
  'Divisão de circuitos',
  'Instalações leves',
]

const serviceCard = 'glass-card group overflow-hidden rounded-[2rem] border border-white/10 p-8 shadow-glow'
const complementaryCard = 'flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 p-3 text-white transition hover:border-gold/20'

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Serviços elétricos</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Soluções residenciais com segurança, organização e atendimento local.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/70">
            Instalações, reparos, quadros e manutenção preventiva pensados para a elétrica da sua casa em Gravataí.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={serviceCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gold/10 text-gold transition group-hover:bg-gold/15">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 text-white/80 shadow-glow">
          <p className="text-sm uppercase tracking-[0.24em] text-gold">Reparos e Manutenções Complementares</p>
          <div className="mt-6 grid gap-4 text-sm sm:grid-cols-2 md:grid-cols-3">
            {complementaryServices.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 p-3 text-white transition hover:border-gold/20"
              >
                <Bolt className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
