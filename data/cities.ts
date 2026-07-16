export interface CityData {
  slug: string;
  name: string;
  uf: string;
  region: string;
}

// Maiores mercados do Brasil por população/demanda de cursos de inglês —
// proxy padrão de SEO local quando não há acesso direto a ferramenta de
// keyword volume (Keyword Planner/SEMrush). Cobre as principais regiões.
export const CITIES: CityData[] = [
  { slug: 'sao-paulo', name: 'São Paulo', uf: 'SP', region: 'Sudeste' },
  { slug: 'rio-de-janeiro', name: 'Rio de Janeiro', uf: 'RJ', region: 'Sudeste' },
  { slug: 'belo-horizonte', name: 'Belo Horizonte', uf: 'MG', region: 'Sudeste' },
  { slug: 'brasilia', name: 'Brasília', uf: 'DF', region: 'Centro-Oeste' },
  { slug: 'curitiba', name: 'Curitiba', uf: 'PR', region: 'Sul' },
  { slug: 'porto-alegre', name: 'Porto Alegre', uf: 'RS', region: 'Sul' },
  { slug: 'salvador', name: 'Salvador', uf: 'BA', region: 'Nordeste' },
  { slug: 'fortaleza', name: 'Fortaleza', uf: 'CE', region: 'Nordeste' },
  { slug: 'recife', name: 'Recife', uf: 'PE', region: 'Nordeste' },
  { slug: 'campinas', name: 'Campinas', uf: 'SP', region: 'Sudeste' },
];
