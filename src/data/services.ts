import type { LucideIcon } from 'lucide-react'
import { Droplets, Hammer, Layers, PaintRoller, Snowflake, Sparkles, Wrench, Zap } from 'lucide-react'

export type ServiceSize = 'hero' | 'hero-wide' | 'standard' | 'standard-wide'

export interface Service {
  number: string
  slug: string
  name: string
  description: string
  highlights: string[]
  icon: LucideIcon
  whatsappMessage: string
  size: ServiceSize
  /** Ordem de exibição no mosaico — independente da numeração canônica acima. */
  mosaicOrder: number
}

export const services: Service[] = [
  {
    number: '01',
    slug: 'eletrica-automacao',
    name: 'Elétrica & Automação',
    description: 'Instalações, manutenção e automação com segurança e precisão técnica.',
    highlights: [
      'Instalações e manutenção elétrica',
      'Iluminação técnica',
      'Automação residencial e comercial',
      'Comandos e painéis',
    ],
    icon: Zap,
    whatsappMessage:
      'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Elétrica & Automação.',
    size: 'hero',
    mosaicOrder: 1,
  },
  {
    number: '02',
    slug: 'hidraulica',
    name: 'Hidráulica',
    description: 'Diagnóstico preciso e reparo definitivo — sem gambiarra, sem retrabalho.',
    highlights: ['Vazamentos e reparos', 'Torneiras e registros', 'Tubulações', 'Instalações e manutenção'],
    icon: Droplets,
    whatsappMessage: 'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Hidráulica.',
    size: 'standard',
    mosaicOrder: 3,
  },
  {
    number: '03',
    slug: 'pequenos-reparos',
    name: 'Pequenos Reparos',
    description: 'O reparo certo, no prazo certo, para quem não pode esperar.',
    highlights: ['Fixações e ajustes', 'Trocas e instalações', 'Manutenção geral', 'Reparos diversos'],
    icon: Wrench,
    whatsappMessage:
      'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Pequenos Reparos.',
    size: 'standard',
    mosaicOrder: 8,
  },
  {
    number: '04',
    slug: 'pintura',
    name: 'Pintura',
    description: 'Acabamento impecável, interno e externo, com padrão de execução técnica.',
    highlights: ['Pintura interna', 'Pintura externa', 'Preparação de paredes', 'Acabamento e retoques'],
    icon: PaintRoller,
    whatsappMessage: 'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Pintura.',
    size: 'standard',
    mosaicOrder: 4,
  },
  {
    number: '05',
    slug: 'pedreiro-reformas',
    name: 'Pedreiro & Pequenas Reformas',
    description: 'Da alvenaria ao acabamento — reformas executadas com padrão de engenharia.',
    highlights: ['Alvenaria e reboco', 'Pisos e revestimentos', 'Reparos estruturais', 'Pequenas reformas'],
    icon: Hammer,
    whatsappMessage:
      'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Pedreiro & Pequenas Reformas.',
    size: 'hero-wide',
    mosaicOrder: 6,
  },
  {
    number: '06',
    slug: 'drywall',
    name: 'Drywall',
    description: 'Ambientes reconfigurados com rapidez, limpeza e precisão milimétrica.',
    highlights: ['Paredes de drywall', 'Divisórias', 'Forros', 'Adequação de ambientes'],
    icon: Layers,
    whatsappMessage: 'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Drywall.',
    size: 'standard-wide',
    mosaicOrder: 5,
  },
  {
    number: '07',
    slug: 'gesso-acabamentos',
    name: 'Gesso & Acabamentos',
    description: 'Detalhes que elevam o ambiente — do forro à iluminação integrada.',
    highlights: ['Forros e sancas', 'Molduras', 'Acabamentos', 'Iluminação integrada'],
    icon: Sparkles,
    whatsappMessage:
      'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Gesso & Acabamentos.',
    size: 'standard',
    mosaicOrder: 7,
  },
  {
    number: '08',
    slug: 'ar-condicionado',
    name: 'Ar-Condicionado',
    description: 'Climatização instalada e mantida com precisão técnica, do projeto à manutenção.',
    highlights: [
      'Instalação de ar-condicionado',
      'Manutenção preventiva e corretiva',
      'Limpeza e higienização',
      'Avaliação técnica',
    ],
    icon: Snowflake,
    whatsappMessage:
      'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para instalação/manutenção de ar-condicionado.',
    size: 'hero',
    mosaicOrder: 2,
  },
]
