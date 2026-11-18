export interface DecorPackageItem {
  id: string;
  name: string;
  note: string;
}

export interface DecorCategory {
  id: string;
  label: string;
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  items: DecorPackageItem[];
}

export interface OnSiteOption {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
}

export const BUSINESS_INFO = {
  name: 'Decorefest Catalão',
  address: 'R. Natal, 525 - Lot. Jardim Paraiso, Catalão - GO, 75711-520',
  phoneDisplay: '(64) 99601-1061',
  whatsappDigits: '5564996011061',
  hours: '24 horas',
} as const;

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BUSINESS_INFO.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const HERO_MEDIA = {
  image: '/src/assets/images/hero_kids_party_decor_1794970562836.jpg',
  alt: 'Decoração completa de aniversário montada no local com arco orgânico de balões em azul oceano e roxo profundo, painéis curvos e mesas cilindro',
};

export const DECOR_CATEGORIES: DecorCategory[] = [
  {
    id: 'infantis',
    label: 'Festas Infantis',
    headline: 'Universos lúdicos sob medida',
    summary:
      'Nosso carro-chefe: levamos painéis temáticos, arcos de balões e peças cenográficas até a sua festa infantil.',
    image: '/src/assets/images/kids_themed_balloons_1794970562803.jpg',
    imageAlt: 'Decoração de festa infantil montada em residência com arco de balões azul e roxo, flores e suportes para bolo',
    items: [
      {
        id: 'arco-baloes-infantil',
        name: 'Arco orgânico de balões personalizado',
        note: 'Combinação de cores e tamanhos ajustada ao tema da criança.',
      },
      {
        id: 'paineis-tematicos',
        name: 'Painéis cenográficos em camadas',
        note: 'Estruturas com revestimento liso, tecido ou arte exclusiva.',
      },
      {
        id: 'mesas-cilindro',
        name: 'Trio de mesas cilindro e aparadores',
        note: 'Altura proporcional ao ambiente escolhido para a festa.',
      },
      {
        id: 'pecas-decorativas',
        name: 'Suportes para bolo e personagens',
        note: 'Bandejas, vasos florais e adornos temáticos prontos para as fotos.',
      },
    ],
  },
  {
    id: 'aniversarios',
    label: 'Jovens & Adultos',
    headline: 'Estética atual e marcante',
    summary:
      'Cenários limpos e elegantes com arcos geométricos, iluminação pontual e arranjos para celebrar em qualquer idade.',
    image: '/src/assets/images/teen_adult_party_decor_1794970563928.jpg',
    imageAlt: 'Painel contemporâneo em arcos azul oceano e roxo profundo com cascata de balões e cilindros decorativos',
    items: [
      {
        id: 'arcos-geometricos',
        name: 'Painéis em arcos contemporâneos',
        note: 'Composição moderna com textura e profundidade visual.',
      },
      {
        id: 'cascata-baloes',
        name: 'Cascata de balões com folhagens',
        note: 'Toque orgânico que valoriza o cenário principal das fotos.',
      },
      {
        id: 'iluminacao-cenica',
        name: 'Pontos de luz quente e velas LED',
        note: 'Destaque sutil para o painel e a mesa do bolo à noite.',
      },
      {
        id: 'arranjos-florais',
        name: 'Arranjos florais e vasos coordenados',
        note: 'Paleta harmônica pensada para o estilo do aniversariante.',
      },
    ],
  },
  {
    id: 'especiais',
    label: 'Chás & Datas Especiais',
    headline: 'Delicadeza em cada detalhe',
    summary:
      'Montagens acolhedoras para chá de bebê, chá revelação, mesversários e comemorações íntimas em família.',
    image: '/src/assets/images/hero_kids_party_decor_1794970562836.jpg',
    imageAlt: 'Cenário de celebração com painéis arqueados, flores e balões montado em ambiente residencial',
    items: [
      {
        id: 'cha-revelacao',
        name: 'Cenário completo para chá revelação',
        note: 'Cores neutras ou contrastantes com espaço livre para a surpresa.',
      },
      {
        id: 'pocket-party',
        name: 'Montagem compacta para salas e apartamentos',
        note: 'Aproveitamento inteligente de cantos menores sem perder impacto.',
      },
      {
        id: 'letreiro-luminoso',
        name: 'Letreiro decorativo e fundo iluminado',
        note: 'Realce delicado para destacar o homenageado do dia.',
      },
      {
        id: 'canto-lounge',
        name: 'Tapete e poltrona de apoio para fotos',
        note: 'Composição aconchegante ao lado da mesa principal.',
      },
    ],
  },
];

export const ONSITE_OPTIONS: OnSiteOption[] = [
  {
    id: 'residencia',
    name: 'Em casa ou condomínio',
    subtitle: 'Levamos a festa até onde você mora',
    description:
      'Adaptamos painéis, balões e mesas ao tamanho exato da sua sala, varanda gourmet ou salão do condomínio.',
    highlights: [
      'Avaliação prévia das medidas do ambiente',
      'Montagem completa antes da chegada dos convidados',
      'Retirada organizada ao término do evento',
    ],
    image: '/src/assets/images/decor_setup_service_1794970563312.jpg',
    imageAlt: 'Decoradoras montando arco de balões e mesas cilindro diretamente no local escolhido pelo cliente',
  },
  {
    id: 'salao-externo',
    name: 'No local que você escolher',
    subtitle: 'Chácaras, clubes e espaços externos',
    description:
      'Você escolhe o espaço da festa em Catalão e região; nossa equipe transporta, instala e finaliza cada detalhe no local.',
    highlights: [
      'Transporte próprio de toda a estrutura e acervo',
      'Adequação do cenário para áreas cobertas ou abertas',
      'Cuidado integral para você apenas aproveitar a festa',
    ],
    image: '/src/assets/images/hero_kids_party_decor_1794970562836.jpg',
    imageAlt: 'Decoração montada pela equipe em amplo espaço escolhido pelo cliente',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'infantil-jardim',
    title: 'Festa Infantil Temática',
    category: 'Montagem Residencial · Balões Orgânicos',
    image: '/src/assets/images/kids_themed_balloons_1794970562803.jpg',
    imageAlt: 'Decoração de festa infantil montada em casa com balões azuis e roxos',
  },
  {
    id: 'painel-arcos',
    title: 'Aniversário em Tons Oceano & Roxo',
    category: 'Painéis em Arcos · Cilindros',
    image: '/src/assets/images/teen_adult_party_decor_1794970563928.jpg',
    imageAlt: 'Painéis em arcos azul oceano e roxo profundo com cascata de balões',
  },
  {
    id: 'equipe-montagem',
    title: 'Montagem Dedicada no Local',
    category: 'Produção Própria · No Seu Espaço',
    image: '/src/assets/images/decor_setup_service_1794970563312.jpg',
    imageAlt: 'Equipe preparando arco de balões e flores no ambiente do cliente',
  },
  {
    id: 'cenografia-completa',
    title: 'Cenografia Completa para Eventos',
    category: 'Acervo Completo · Catalão - GO',
    image: '/src/assets/images/hero_kids_party_decor_1794970562836.jpg',
    imageAlt: 'Decoração completa com painéis arqueados, balões e mesas cilindro',
  },
];
