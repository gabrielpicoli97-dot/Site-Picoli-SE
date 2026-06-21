import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { WHATSAPP_URL } from '../config'

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[#08102c]/80 p-10 shadow-glow backdrop-blur-xl">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-gold">Orçamento rápido</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Precisa de um eletricista em Gravataí agora?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-white/70">
              Envie fotos do ponto elétrico e receba uma resposta clara com soluções seguras, sem improviso.
            </p>
          </div>
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 text-[16px] font-semibold text-midnight shadow-lg shadow-gold/20 transition hover:scale-[1.02]"
            >
              Solicitar orçamento
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white/90 transition hover:border-gold hover:text-gold"
            >
              Ver serviços
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
