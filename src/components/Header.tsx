import { motion } from 'framer-motion'
import { Home, Info, Menu, PhoneCall, ShieldCheck, Wrench, X } from 'lucide-react'
import { useState } from 'react'
import { WHATSAPP_URL } from '../config'

const links = [
  { label: 'Início', href: '#top', icon: Home },
  { label: 'Serviços', href: '#services', icon: Wrench },
  { label: 'Segurança', href: '#problems', icon: ShieldCheck },
  { label: 'Sobre', href: '#differentials', icon: Info },
  { label: 'Contato', href: '#contact', icon: PhoneCall },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#080E1D]/95 backdrop-blur-xl"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center rounded-lg bg-[#080E1D] p-1">
          <img
            src="/img/arte headline.png"
            alt="Picoli Soluções Elétricas"
            className="h-12 sm:h-14 lg:h-16 w-auto object-contain bg-transparent mix-blend-normal"
          />
        </a>

        <nav className="hidden items-center gap-3 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-2 text-sm font-semibold text-midnight shadow-lg shadow-gold/20 transition hover:brightness-110"
          >
            <img src="/img/whatsapp.png" alt="WhatsApp" className="h-4 w-4" />
            Chamar no WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mobile-nav lg:hidden">
          <div className="flex flex-col px-2 pb-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 px-4 py-3 text-sm text-white/80 transition hover:bg-white/5 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-3 py-2 text-center text-sm font-semibold text-midnight"
            >
              <img src="/img/whatsapp.png" alt="WhatsApp" className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  )
}
