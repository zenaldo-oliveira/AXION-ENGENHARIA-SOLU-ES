import type { LucideIcon } from 'lucide-react'
import {
  Cog,
  Droplets,
  Gauge,
  Hammer,
  Landmark,
  Layers,
  PaintRoller,
  Snowflake,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react'
import type { AttendantId } from './attendants'

export type ServiceSize = 'hero' | 'hero-wide' | 'standard' | 'standard-wide'
export type ServiceGroup = 'residencial-comercial' | 'industrial'

export interface Service {
  number: string
  slug: string
  name: string
  description: string
  highlights: string[]
  icon: LucideIcon
  whatsappMessage: string
  size: ServiceSize
  /** Ordem de exibição no mosaico — relativa ao grupo, não à numeração canônica acima. */
  mosaicOrder: number
  /** Caminho do vídeo de fundo do card — opcional, só definido para categorias com material real. */
  video?: string
  /** Atendente responsável — define para qual WhatsApp o orçamento deste serviço é direcionado. */
  attendant: AttendantId
  /** Grupo de exibição no mosaico — Residencial & Comercial ou Industrial. */
  group: ServiceGroup
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
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Elétrica & Automação. Como podemos começar?',
    size: 'hero',
    mosaicOrder: 1,
    video: '/videos/services/eletrica-automacao.mp4',
    attendant: 'fagner',
    group: 'residencial-comercial',
  },
  {
    number: '02',
    slug: 'hidraulica',
    name: 'Hidráulica',
    description: 'Diagnóstico preciso e reparo definitivo — sem gambiarra, sem retrabalho.',
    highlights: ['Vazamentos e reparos', 'Torneiras e registros', 'Tubulações', 'Instalações e manutenção'],
    icon: Droplets,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Hidráulica. Como podemos começar?',
    size: 'standard',
    mosaicOrder: 3,
    video: '/videos/services/hidraulica.mp4',
    attendant: 'zenaldo',
    group: 'residencial-comercial',
  },
  {
    number: '03',
    slug: 'pequenos-reparos',
    name: 'Pequenos Reparos',
    description: 'O reparo certo, no prazo certo, para quem não pode esperar.',
    highlights: ['Fixações e ajustes', 'Trocas e instalações', 'Manutenção geral', 'Reparos diversos'],
    icon: Wrench,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Pequenos Reparos. Como podemos começar?',
    size: 'standard',
    mosaicOrder: 8,
    attendant: 'zenaldo',
    group: 'residencial-comercial',
  },
  {
    number: '04',
    slug: 'pintura',
    name: 'Pintura',
    description: 'Acabamento impecável, interno e externo, com padrão de execução técnica.',
    highlights: ['Pintura interna', 'Pintura externa', 'Preparação de paredes', 'Acabamento e retoques'],
    icon: PaintRoller,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Pintura. Como podemos começar?',
    size: 'standard',
    mosaicOrder: 4,
    video: '/videos/services/pintura.mp4',
    attendant: 'zenaldo',
    group: 'residencial-comercial',
  },
  {
    number: '05',
    slug: 'pedreiro-reformas',
    name: 'Pedreiro & Pequenas Reformas',
    description: 'Da alvenaria ao acabamento — reformas executadas com padrão de engenharia.',
    highlights: ['Alvenaria e reboco', 'Pisos e revestimentos', 'Reparos estruturais', 'Pequenas reformas'],
    icon: Hammer,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Pedreiro & Pequenas Reformas. Como podemos começar?',
    size: 'hero-wide',
    mosaicOrder: 6,
    video: '/videos/services/pedreiro-reformas.mp4',
    attendant: 'zenaldo',
    group: 'residencial-comercial',
  },
  {
    number: '06',
    slug: 'drywall',
    name: 'Drywall',
    description: 'Ambientes reconfigurados com rapidez, limpeza e precisão milimétrica.',
    highlights: ['Paredes de drywall', 'Divisórias', 'Forros', 'Adequação de ambientes'],
    icon: Layers,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Drywall. Como podemos começar?',
    size: 'standard-wide',
    mosaicOrder: 5,
    video: '/videos/services/drywall.mp4',
    attendant: 'zenaldo',
    group: 'residencial-comercial',
  },
  {
    number: '07',
    slug: 'gesso-acabamentos',
    name: 'Gesso & Acabamentos',
    description: 'Detalhes que elevam o ambiente — do forro à iluminação integrada.',
    highlights: ['Forros e sancas', 'Molduras', 'Acabamentos', 'Iluminação integrada'],
    icon: Sparkles,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Gesso & Acabamentos. Como podemos começar?',
    size: 'standard',
    mosaicOrder: 7,
    video: '/videos/services/gesso-acabamentos.mp4',
    attendant: 'zenaldo',
    group: 'residencial-comercial',
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
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Ar-Condicionado. Como podemos começar?',
    size: 'hero',
    mosaicOrder: 2,
    video: '/videos/services/ar-condicionado.mp4',
    attendant: 'zenaldo',
    group: 'residencial-comercial',
  },
  {
    number: '09',
    slug: 'eletromecanica-industrial',
    name: 'Eletromecânica Industrial',
    description:
      'Instalação, manutenção e serviços eletromecânicos para máquinas, equipamentos e sistemas industriais.',
    highlights: [
      'Manutenção eletromecânica',
      'Instalação de motores',
      'Painéis elétricos',
      'Automação industrial',
    ],
    icon: Cog,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Eletromecânica Industrial. Como podemos começar?',
    size: 'hero-wide',
    mosaicOrder: 1,
    video: '/videos/services/eletromecanica-industrial.mp4',
    attendant: 'fagner',
    group: 'industrial',
  },
  {
    number: '10',
    slug: 'manutencao-pontes',
    name: 'Manutenção de Pontes',
    description: 'Inspeção, manutenção e reparo estrutural de pontes e passarelas industriais.',
    highlights: [
      'Inspeção estrutural',
      'Manutenção preventiva e corretiva',
      'Reparo de estruturas metálicas',
      'Laudos técnicos',
    ],
    icon: Landmark,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Manutenção de Pontes. Como podemos começar?',
    size: 'standard',
    mosaicOrder: 2,
    video: '/videos/services/manutencao-pontes.mp4',
    attendant: 'fagner',
    group: 'industrial',
  },
  {
    number: '11',
    slug: 'ar-comprimido-compressores',
    name: 'Ar Comprimido & Compressores',
    description: 'Instalação, manutenção e otimização de sistemas de ar comprimido e compressores industriais.',
    highlights: [
      'Instalação de compressores',
      'Manutenção preventiva e corretiva',
      'Redes de ar comprimido',
      'Diagnóstico de vazamentos',
    ],
    icon: Gauge,
    whatsappMessage:
      'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento para Ar Comprimido & Compressores. Como podemos começar?',
    size: 'standard',
    mosaicOrder: 3,
    video: '/videos/services/ar-comprimido-compressores.mp4',
    attendant: 'fagner',
    group: 'industrial',
  },
]
