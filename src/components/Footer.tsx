import { services } from '../data/services'
import { WHATSAPP_NUMBER } from '../lib/whatsapp'

const phoneDisplay = '+55 65 99283-2422'

export function Footer() {
  return (
    <footer id="site-footer" className="bg-surface px-6 py-16 text-sm text-steel">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div>
            <span className="font-display text-xl font-bold tracking-[0.15em] text-fg">
              AXI<span className="text-green">O</span>N
            </span>
            <p className="mt-2 max-w-xs text-steel">
              Engenharia &amp; Soluções para imóveis residenciais, comerciais e industriais.
            </p>
            <p className="mt-4 text-steel">
              WhatsApp:{' '}
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-fg transition hover:text-green">
                {phoneDisplay}
              </a>
            </p>
          </div>

          <nav aria-label="Serviços">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-steel-dim">
              Serviços
            </span>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <a href={`#${service.slug}`} className="transition hover:text-green">
                    {service.number} · {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-steel-dim sm:flex-row sm:items-center sm:justify-between">
          <p>Atendimento residencial, comercial e industrial.</p>
          <p>© {new Date().getFullYear()} AXION. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
