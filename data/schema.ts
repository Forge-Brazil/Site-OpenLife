import { SEO_META } from '../App';
import { HOME_FAQS } from './faq';
import { CITIES } from './cities';

const ORG_ID = 'https://openlifebrasil.com.br/#organization';
const SITE_URL = 'https://openlifebrasil.com.br';

// Organization + LocalBusiness (a OpenLife tem endereço físico único em
// Bagé/RS — não fabricar LocalBusiness para as cidades atendidas online).
const ORGANIZATION_SCHEMA = {
  '@type': ['EducationalOrganization', 'LocalBusiness'],
  '@id': ORG_ID,
  name: 'OpenLife English School',
  alternateName: 'OpenLife',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/2.png`,
    width: 400,
    height: 400,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'Escola de inglês com método ESL imersivo. Fluência garantida em 18 meses para adultos, jovens e executivos. Online e presencial em todo o Brasil.',
  foundingDate: '2003',
  email: 'contato@openlifebrasil.com',
  telephone: '+55-53-99965-6216',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bagé',
    addressRegion: 'RS',
    addressCountry: 'BR',
  },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  sameAs: [
    'https://www.instagram.com/openlifebrasil/',
    'https://www.linkedin.com/in/openlife-english-school-bage/',
  ],
};

function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

function courseSchema(path: string, name: string, description: string, areaServed?: string) {
  return {
    '@type': 'Course',
    name,
    description,
    provider: { '@id': ORG_ID },
    url: `${SITE_URL}${path}`,
    ...(areaServed ? { areaServed: { '@type': 'City', name: areaServed } } : {}),
  };
}

const COURSE_PAGES: Record<string, string> = {
  '/ingles-online': 'Curso de Inglês Online',
  '/ingles-para-adultos': 'Inglês para Adultos',
  '/ingles-para-criancas': 'Inglês para Crianças — OpenLife Kids',
  '/ingles-para-adolescentes': 'Inglês para Adolescentes — OpenLife Teens',
  '/ingles-para-negocios': 'Inglês para Negócios',
};

const WEBSITE_SCHEMA = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'OpenLife English School',
  description: 'Curso de inglês online e presencial com método ESL imersivo. Fluência em 18 meses.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'pt-BR',
};

/** Gera o(s) bloco(s) JSON-LD apropriados para uma rota. Sempre inclui a
 *  Organization + WebSite globais; adiciona schema específico por página. */
export function buildSchema(path: string): object {
  const graph: object[] = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA];

  if (path === '/') {
    graph.push(faqPageSchema(HOME_FAQS));
  } else if (path === '/sobre') {
    graph.push({
      '@type': 'AboutPage',
      url: `${SITE_URL}/sobre`,
      about: { '@id': ORG_ID },
    });
  } else if (COURSE_PAGES[path]) {
    const meta = SEO_META[path];
    graph.push(courseSchema(path, COURSE_PAGES[path], meta?.description ?? COURSE_PAGES[path]));
  } else {
    const city = CITIES.find((c) => path === `/curso-de-ingles-${c.slug}`);
    if (city) {
      graph.push(
        courseSchema(
          path,
          `Curso de Inglês em ${city.name}`,
          `Aulas de inglês ao vivo e 100% online para quem mora em ${city.name}, com o método ESL imersivo da OpenLife.`,
          city.name
        )
      );
    }
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}
