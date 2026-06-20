import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Análise técnica',
    description: 'Verificamos o quadro, pontos de luz, tomadas e sinais de mau contato antes de qualquer intervenção.',
    step: '1',
  },
  {
    title: 'Execução organizada',
    description: 'Instalações e reparos feitos com cabos corretos, identificação de circuitos e acabamento limpo.',
    step: '2',
  },
  {
    title: 'Teste e orientação',
    description: 'Garantimos funcionamento, atualização de proteção e orientamos sobre uso seguro no dia a dia.',
    step: '3',
  },
]

export default function Steps() {
  return (
    <section id="steps" className="py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-gold">Como funciona</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Um processo simples e seguro para resolver sua elétrica residencial.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold text-lg font-semibold">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
