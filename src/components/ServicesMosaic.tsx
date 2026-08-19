import { services } from '../data/services'
import { ServiceCard } from './ServiceCard'

const residentialServices = services
  .filter((service) => service.group === 'residencial-comercial')
  .sort((a, b) => a.mosaicOrder - b.mosaicOrder)

const industrialServices = services
  .filter((service) => service.group === 'industrial')
  .sort((a, b) => a.mosaicOrder - b.mosaicOrder)

export function ServicesMosaic() {
  return (
    <section id="servicos" className="scroll-mt-24 border-b border-line bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-green">Serviços</span>
          <h2 className="mt-4 font-display text-3xl font-bold text-fg sm:text-4xl">
            Qual serviço você precisa?
          </h2>
          <p className="mt-4 text-sm text-steel sm:text-base">
            Engenharia, manutenção e acabamento — do reparo pontual à reforma completa.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-steel">
            Serviços Residenciais &amp; Comerciais
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[210px] lg:grid-cols-4 lg:grid-flow-row-dense">
            {residentialServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>

        <div id="industrial" className="scroll-mt-24 mt-20 rounded-3xl border border-line bg-ink p-6 sm:p-10">
          <h3 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-green">
            Soluções Industriais
          </h3>
          <p className="mt-2 max-w-xl text-sm text-steel">
            Manutenção, instalação e engenharia para operações industriais e infraestrutura.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industrialServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
