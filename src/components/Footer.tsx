import { MessageCircle } from 'lucide-react'
import { services } from '../data/services'
import { attendants } from '../data/attendants'
import { buildWhatsAppUrl, WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'
import { trackEvent } from '../lib/analytics'

const attendantContacts = [
  { ...attendants.zenaldo, phoneDisplay: '+55 65 99283-2422' },
  { ...attendants.fagner, phoneDisplay: '+55 65 99283-3417' },
]

export function Footer() {
  return (
    <footer id="site-footer" className="bg-surface px-6 py-16 text-sm text-steel">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div>
            <span className="font-display text-xl font-bold tracking-[0.15em] text-fg">
              IDEAL <span className="text-green">TÉCNICA</span>
            </span>
            <p className="mt-2 max-w-xs text-steel">
              Soluções técnicas para sua casa, empresa ou comércio.
            </p>
          </div>

          <div>
            <span className="font-display text-xs uppercase tracking-[0.2em] text-steel-dim">
              Atendimento
            </span>
            <ul className="mt-4 flex flex-col gap-4">
              {attendantContacts.map((contact) => (
                <li key={contact.id}>
                  <p className="text-fg">{contact.name}</p>
                  <a
                    href={buildWhatsAppUrl(contact.whatsappNumber, WHATSAPP_GENERIC_MESSAGE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('click_whatsapp', { location: 'footer', attendant: contact.id })}
                    className="mt-1 inline-flex items-center gap-1.5 text-steel transition hover:text-green"
                  >
                    <MessageCircle size={14} aria-hidden />
                    {contact.phoneDisplay}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Serviços">
            <span className="font-display text-xs uppercase tracking-[0.2em] text-steel-dim">
              Serviços
            </span>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <a href={`#${service.slug}`} className="transition hover:text-green">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-steel-dim sm:flex-row sm:items-center sm:justify-between">
          <p>Atendimento residencial, comercial e industrial.</p>
          <p>© {new Date().getFullYear()} Ideal Técnica. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
