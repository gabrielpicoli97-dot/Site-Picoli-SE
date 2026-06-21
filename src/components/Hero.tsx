import { motion } from 'framer-motion'
import { Bolt, ShieldCheck, Sparkles } from 'lucide-react'
import { WHATSAPP_URL } from '../config'

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section id="top" className="hero-section relative overflow-hidden pt-28 pb-24">
      <div className="hero-spotlight" />
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-[1.2fr_0.9fr] lg:items-center lg:px-12">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-white/5 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
            <Sparkles className="h-4 w-4" />
            Elétrica residencial em Gravataí
          </span>
          <h1 className="font-semibold leading-tight text-white text-[30px] sm:text-[36px] lg:text-[52px]">
            Eletricista residencial em Gravataí com atendimento rápido, seguro e bem feito.
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-white/75">
            Instalação de tomadas, troca de disjuntores, chuveiros, iluminação, ventiladores de teto e manutenção elétrica residencial com orçamento pelo WhatsApp.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-[16px] font-semibold uppercase tracking-[0.06em] text-midnight shadow-lg shadow-gold/20 transition hover:scale-[1.02] hover:brightness-105"
            >
              Chamar no WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-[16px] font-semibold text-white/90 transition hover:border-gold hover:text-gold"
            >
              Ver serviços
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-glow">
              <p className="text-sm uppercase tracking-[0.24em] text-white/60">Atendimento</p>
              <p className="mt-2 text-xl font-semibold text-white">Gravataí e bairros próximos</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-glow">
              <p className="text-sm uppercase tracking-[0.24em] text-white/60">Tranquilidade</p>
              <p className="mt-2 text-xl font-semibold text-white">Diagnóstico completo antes de qualquer reparo</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.12 }}
        >
          <div className="glass-card relative overflow-hidden rounded-[2rem] border border-white/10 shadow-glow">
            <img
              src="/img/hero-electric.jpg"
              alt="Instalação elétrica residencial por profissional em Gravataí"
              className="h-full w-full object-cover object-center hero-image-mask"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/90 to-transparent p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/90">
                <Bolt className="h-4 w-4 text-gold" />
                Atendimento rápido para reparos e manutenção elétrica
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
