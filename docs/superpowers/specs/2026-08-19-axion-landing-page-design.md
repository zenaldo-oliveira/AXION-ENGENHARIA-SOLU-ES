# AXION — Landing Page (Design Spec)

Data: 2026-08-19
Status: Aprovado para planejamento de implementação

## 1. Posicionamento e funil

AXION é uma empresa de engenharia, manutenção e soluções para imóveis residenciais, comerciais e industriais. A landing page **não é institucional** — é uma vitrine comercial de serviços, otimizada para geração de leads via WhatsApp.

Funil alvo: `Anúncio → Landing Page → Serviço → WhatsApp → Orçamento`.

Posicionamento: empresa profissional de engenharia, manutenção e soluções — explicitamente **não** uma empresa genérica de "faz-tudo". A marca deve transmitir profissionalismo, confiança, precisão, qualidade e capacidade técnica.

Público: clientes residenciais, empresas, comércios, condomínios e clientes industriais que precisam contratar serviços de manutenção, instalação, reforma ou acabamento.

## 2. Identidade visual

- **Paleta base:** preto/grafite (#0a0b0c–#1b1c1f) como fundo, branco para texto principal, cinza metálico (#8a8f98) para texto secundário.
- **Cor de destaque:** Âmbar `#E8B23D` ("Circuit Amber"). Uso estratégico e contido em: CTAs, ícones, números dos cards, detalhes dos cards, linhas técnicas, glow, estados de hover. Nunca como preenchimento de área grande — regra prática: o âmbar aparece em traços, badges, texto e botões, nunca em blocos de fundo extensos.
- **Tipografia:** Space Grotesk (títulos, geométrica/técnica) + Inter (corpo, alta legibilidade). Carregadas via Google Fonts com `preconnect` e `display=swap`.
- **Linguagem gráfica v1 (sem fotografia real):** grid de blueprint sutil, linhas arquitetônicas finas, formas geométricas abstratas, glow âmbar em hover/focus — tudo via CSS/SVG. Nenhuma foto de estoque.
- **Preparação para o futuro:** cada card de serviço reserva um "slot" visual (hoje preenchido por ícone + gráfico técnico) que poderá futuramente receber uma foto real de obra sem alterar a estrutura do componente.
- **Evitar:** aparência de site de eletricista comum, site de pedreiro, catálogo genérico, template pronto, verde tradicional de manutenção, azul corporativo genérico, excesso de cores.

## 3. Estrutura da página

```
Hero
↓
Serviços (mosaico assimétrico, 8 cards)
↓
CTA intermediário
↓
Por que escolher a AXION
↓
Como funciona
↓
CTA final
↓
Footer
```
+ Botão de WhatsApp flutuante, persistente em todo o scroll (recolhe/ajusta perto do footer para não sobrepor).

## 4. Hero

- Headline: **"SERVIÇOS PARA SUA CASA, EMPRESA OU COMÉRCIO."**
- Subheadline: "Elétrica, automação, ar-condicionado, hidráulica, reformas, pintura, drywall e pequenos reparos."
- CTA principal: **"Solicitar orçamento pelo WhatsApp"** → WhatsApp, mensagem genérica (ver §7).
- CTA secundário (assumido, não contestado pelo usuário): **"Ver serviços"** → scroll âncora até a seção de serviços. Pode ser removido se o cliente preferir um único CTA de WhatsApp.
- Indicadores de confiança (texto simples, sem inventar números/avaliações/certificações): "Atendimento profissional" · "Orçamento" · "Soluções residenciais e comerciais".
- Composição visual: grid técnico de fundo + formas geométricas/linhas com leve animação (Framer Motion), sem foto.

## 5. Serviços — mosaico assimétrico (8 categorias)

Elétrica & Automação (01) e Ar-Condicionado (08) formam a dupla de destaque técnico no topo do mosaico (cards maiores — reforçam o posicionamento de engenharia/sistemas). Pedreiro & Reformas (05) é um banner largo. Os demais (Hidráulica, Pintura, Drywall, Gesso, Pequenos Reparos) são cards padrão, com Drywall em formato largo para quebrar a grade. A numeração 01–08 é a ordem canônica (usada em listas e no rodapé); a posição de cada card *dentro* do mosaico é livre, definida por equilíbrio visual.

| # | Categoria | Slug (`data-service`) | Descrição comercial | Destaques do card (4) | Mensagem WhatsApp |
|---|---|---|---|---|---|
| 01 | Elétrica & Automação | `eletrica-automacao` | Instalações, manutenção e automação com segurança e precisão técnica. | Instalações e manutenção elétrica · Iluminação técnica · Automação residencial e comercial · Comandos e painéis | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Elétrica & Automação." |
| 02 | Hidráulica | `hidraulica` | Diagnóstico preciso e reparo definitivo — sem gambiarra, sem retrabalho. | Vazamentos e reparos · Torneiras e registros · Tubulações · Instalações e manutenção | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Hidráulica." |
| 03 | Pequenos Reparos | `pequenos-reparos` | O reparo certo, no prazo certo, para quem não pode esperar. | Fixações e ajustes · Trocas e instalações · Manutenção geral · Reparos diversos | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Pequenos Reparos." |
| 04 | Pintura | `pintura` | Acabamento impecável, interno e externo, com padrão de execução técnica. | Pintura interna · Pintura externa · Preparação de paredes · Acabamento e retoques | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Pintura." |
| 05 | Pedreiro & Pequenas Reformas | `pedreiro-reformas` | Da alvenaria ao acabamento — reformas executadas com padrão de engenharia. | Alvenaria e reboco · Pisos e revestimentos · Reparos estruturais · Pequenas reformas | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Pedreiro & Pequenas Reformas." |
| 06 | Drywall | `drywall` | Ambientes reconfigurados com rapidez, limpeza e precisão milimétrica. | Paredes de drywall · Divisórias · Forros · Adequação de ambientes | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Drywall." |
| 07 | Gesso & Acabamentos | `gesso-acabamentos` | Detalhes que elevam o ambiente — do forro à iluminação integrada. | Forros e sancas · Molduras · Acabamentos · Iluminação integrada | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para Gesso & Acabamentos." |
| 08 | Ar-Condicionado | `ar-condicionado` | Climatização instalada e mantida com precisão técnica, do projeto à manutenção. | Instalação · Manutenção preventiva e corretiva · Limpeza e higienização · Avaliação técnica | "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para instalação/manutenção de ar-condicionado." |

Todas as mensagens seguem o padrão "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento para [Categoria]." — a menção "vim pelo site" ajuda a identificar a origem do lead, especialmente relevante para tráfego pago.

### Anatomia de cada card
Número · ícone Lucide em badge âmbar (baixa opacidade) · nome · descrição comercial (1 linha) · lista dos 4 destaques · motivo gráfico técnico de fundo (linha fina estilo blueprint, específico por categoria — ex.: raio para elétrica, gota/tubo para hidráulica, floco para ar-condicionado) · botão "Solicitar orçamento" (âmbar) → WhatsApp.

## 6. Seções de apoio

**CTA intermediário** (logo após o mosaico de serviços — ponto de maior intenção após o usuário escanear os cards): "Não encontrou o que precisa? Fale com a gente." + botão WhatsApp (mensagem genérica).

**Por que escolher a AXION** — 4 pilares: equipe técnica especializada (não "faz-tudo") · atendimento residencial, comercial e industrial · orçamento rápido pelo WhatsApp · padrão de execução e acabamento premium.

**Como funciona** — 4 passos: escolha o serviço → envie sua solicitação pelo WhatsApp → alinhamos detalhes e agendamos avaliação/orçamento → executamos com padrão AXION.

**CTA final** — banner de largura total reforçando a mensagem comercial, com um botão grande "Solicitar orçamento pelo WhatsApp" (mensagem genérica).

**Footer** — wordmark + tagline, WhatsApp/telefone em texto (para quem preferir copiar/discar), lista das 8 categorias como âncoras, menção a atendimento residencial/comercial/industrial, copyright.

## 7. WhatsApp

Número: **+55 65 99283-2422** → base da URL `https://wa.me/5565992832422`.

Mensagem genérica (Hero, CTA intermediário, CTA final, botão flutuante): "Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento."

Mensagens específicas por serviço: ver tabela do §5.

`src/lib/whatsapp.ts` centraliza o número e a montagem da URL (`buildWhatsAppUrl(message)`), evitando duplicar o número em mais de 12 botões.

## 8. Rastreamento (estrutura, sem bibliotecas novas)

Nenhuma biblioteca de analytics/pixel é instalada ou chamada nesta fase. A estrutura fica pronta para receber GA4, Google Ads e Meta Pixel futuramente:

- `src/lib/analytics.ts`: exporta `trackEvent(eventName: string, params?: Record<string, string>)`. Implementação atual é um stub inofensivo (log em modo dev), sem chamadas de rede — ponto único a ser substituído quando um provedor real for integrado.
- Eventos wireados agora (via `trackEvent` nos handlers de clique já existentes):
  - `click_whatsapp` — clique em CTA genérico de WhatsApp (hero, CTA intermediário, CTA final, flutuante).
  - `whatsapp_service` — clique em CTA de WhatsApp de um card de serviço, com `{ service: <slug>, location: 'service-card' }`.
  - `click_cta` — clique em CTA que não é WhatsApp (ex.: "Ver serviços").
- Eventos documentados como contrato, não implementados agora (dependeriam de plumbing sem utilidade sem um provedor real conectado): `page_view`, `view_service`.
- Todo botão de ação carrega atributos `data-*`: `data-service="<slug>"` (presente apenas em CTAs específicos de serviço) e `data-location` (`hero` | `service-card` | `mid-cta` | `final-cta` | `whatsapp-float`).

## 9. Preparação para tráfego pago (sem criar rotas agora)

- `src/data/services.ts`: array central tipado (`Service[]`) com `slug`, `number`, `name`, `description`, `highlights`, `icon`, `whatsappMessage`, `size` (tamanho no mosaico). Fonte única de conteúdo — hoje alimenta o mosaico da home; no futuro pode alimentar páginas dedicadas por serviço sem duplicar conteúdo.
- Nenhum router é instalado e nenhuma rota é criada nesta fase. A preparação é apenas no nível de dados: os `slugs` já nascem estáveis e reutilizáveis como segmento de URL futuro (ex.: `/servicos/eletrica-automacao`), evitando refatoração de conteúdo quando essas páginas forem criadas.
- Os exemplos de rota citados pelo cliente (`/servicos/eletrica`, `/servicos/ar-condicionado`, `/servicos/hidraulica`, `/servicos/pintura`, `/servicos/reformas`, `/servicos/drywall`) usam formas abreviadas de alguns slugs; a forma final da URL (slug completo vs. alias curto) fica em aberto para quando essas páginas forem de fato construídas.

## 10. SEO

Rascunho, sem inventar cidade, endereço ou avaliações:

- `<title>`: "AXION — Engenharia & Soluções | Elétrica, Hidráulica, Ar-Condicionado e Reformas"
- `<meta name="description">`: "Elétrica, automação, ar-condicionado, hidráulica, pintura, reformas, drywall e gesso. Atendimento residencial, comercial e industrial. Solicite seu orçamento pelo WhatsApp."

SEO local (bairro/cidade atendida) fica pendente até o cliente fornecer a região de atuação.

## 11. Performance, acessibilidade e semântica

- Mobile-first (Tailwind CSS v4).
- Sem peso de fotografia na v1 — gráficos leves em SVG/CSS.
- HTML semântico: `<header>`, `<main>`, um `<section>` por bloco, `<nav>` no footer, `<footer>`.
- Botões de WhatsApp com `aria-label` descritivo (não dependem apenas do ícone), foco visível, contraste âmbar/grafite validado.
- Framer Motion respeitando `prefers-reduced-motion`.

## 12. Stack e restrições técnicas

React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion + Lucide React (dependências já presentes no projeto). Nenhuma dependência nova é instalada. Sem GSAP. Sem Three.js. Sem router. Sem SDK de analytics/pixel.

## 13. Itens em aberto (não bloqueiam a implementação da v1)

- Manter ou remover o CTA secundário "Ver serviços" no Hero (assumido como mantido).
- Região/cidade atendida, para SEO local futuro.
- Fotografias reais de obras/serviços, para substituir os slots gráficos no futuro.
- Forma final dos slugs de rota (`/servicos/<slug>`) quando as páginas dedicadas forem criadas.
