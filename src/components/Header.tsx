import { motion } from 'framer-motion'
import { LayoutDashboard, PhoneCall, Menu, X } from 'lucide-react'
import { useState } from 'react'

const links = [
  { label: 'Serviços', href: '#services' },
  { label: 'Problemas', href: '#problems' },
  { label: 'Diferenciais', href: '#differentials' },
  { label: 'Como funciona', href: '#steps' },
  { label: 'Galeria', href: '#gallery' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-midnight/95 backdrop-blur-xl"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-white text-midnight shadow-glow">
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">Picoli</p>
            <p className="text-xs text-white/60">Soluções Elétricas</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-white/70 transition hover:text-gold">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://wa.me/5551995922019"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-midnight shadow-lg shadow-gold/20 transition hover:brightness-110"
          >
            <PhoneCall className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="mobile-nav lg:hidden">
          <div className="flex flex-col px-2 pb-6">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5551995922019"
              target="_blank"
              rel="noreferrer"
              className="mt-2 rounded-2xl bg-gold px-4 py-3 text-center text-sm font-semibold text-midnight"
            >
              Solicitar orçamento
            </a>
          </div>
        </div>
      ) : null}
    </motion.header>
  )
}
