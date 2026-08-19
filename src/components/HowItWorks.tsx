import { motion } from 'framer-motion'

const steps = [
  { step: '01', title: 'Escolha o serviço', description: 'Veja as categorias e identifique o que você precisa.' },
  { step: '02', title: 'Envie sua solicitação', description: 'Fale com a gente pelo WhatsApp em poucos cliques.' },
  { step: '03', title: 'Alinhamos os detalhes', description: 'Avaliamos a demanda e enviamos o orçamento.' },
  {
    step: '04',
    title: 'Executamos com padrão AXION',
    description: 'Serviço entregue com precisão técnica e acabamento premium.',
  },
]

export function HowItWorks() {
  return (
    <section className="border-b border-line bg-surface px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-green">
            Como funciona
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold text-fg sm:text-4xl">
            Do primeiro contato à entrega
          </h2>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <motion.li
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-xl border border-line bg-card p-6"
            >
              <span className="font-display text-2xl font-bold text-green">{item.step}</span>
              <h3 className="mt-3 font-display text-base font-bold text-fg">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-steel">{item.description}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
