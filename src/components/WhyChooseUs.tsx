import { motion } from 'framer-motion'
import { Building2, MessageCircle, Ruler, ShieldCheck } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Equipe técnica especializada',
    description: 'Profissionais preparados para cada tipo de serviço — não um "faz-tudo" genérico.',
  },
  {
    icon: Building2,
    title: 'Residencial, comercial e industrial',
    description: 'Atendimento para todos os perfis de imóvel e demanda.',
  },
  {
    icon: MessageCircle,
    title: 'Orçamento rápido pelo WhatsApp',
    description: 'Fale direto com a gente e receba retorno ágil.',
  },
  {
    icon: Ruler,
    title: 'Padrão de execução premium',
    description: 'Acabamento e precisão técnica em cada etapa do serviço.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="border-b border-line bg-ink px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-green">
            Por que a Ideal Técnica
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-fg sm:text-4xl">
            Engenharia e precisão em cada serviço
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-xl border border-line bg-card p-6 transition-colors duration-300 hover:border-green/25"
            >
              <pillar.icon className="text-green" size={22} aria-hidden />
              <h3 className="mt-4 font-display text-base font-bold text-fg">{pillar.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-steel">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
