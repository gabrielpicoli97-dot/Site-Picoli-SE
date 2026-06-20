export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:px-12">
        <div>
          <p className="font-semibold text-white">Picoli Soluções Elétricas</p>
          <p className="mt-2">Eletricista residencial em Gravataí/RS com foco em segurança, revisão e pequenos reparos.</p>
        </div>
        <div className="flex flex-col gap-2 sm:items-end">
          <a href="https://wa.me/5551995922019" target="_blank" rel="noreferrer" className="transition hover:text-gold">
            WhatsApp: (51) 99592-2019
          </a>
          <p className="text-white/50">Atende Gravataí e bairros próximos: Centro, Santa Cecília, Morada do Vale e região.</p>
          <a href="#top" className="transition hover:text-gold">Voltar ao topo</a>
        </div>
      </div>
    </footer>
  )
}
