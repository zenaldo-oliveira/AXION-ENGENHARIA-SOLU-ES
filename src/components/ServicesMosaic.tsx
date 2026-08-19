import { services } from '../data/services'
import { ServiceCard } from './ServiceCard'

const mosaicServices = [...services].sort((a, b) => a.mosaicOrder - b.mosaicOrder)

export function ServicesMosaic() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 border-b border-line bg-surface px-6 py-24 sm:py-32"
    >
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

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:auto-rows-[210px] lg:grid-cols-4 lg:grid-flow-row-dense">
          {mosaicServices.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
