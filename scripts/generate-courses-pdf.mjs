import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import PDFDocument from 'pdfkit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outputPath = path.join(root, 'public/cursos-openlife.pdf');
const logoPath = path.join(root, 'public/logomarca-real.png');

// Mantido em sincronia manual com constants.tsx (COURSES) — só os campos
// usados no resumo em PDF (título, faixa etária, foco, descrição, destaques).
const COURSES = [
  {
    title: 'OpenLife Kids',
    age: '6-9 anos',
    focus: 'Bilinguismo Precoce',
    description: 'Focado em bilinguismo precoce e desenvolvimento cognitivo. Um mundo de descobertas onde o inglês faz parte da brincadeira e do crescimento natural.',
    highlights: ['Aulas lúdicas e interativas', 'Desenvolvimento cognitivo acelerado', 'Professores especializados em alfabetização'],
  },
  {
    title: 'OpenLife Teens',
    age: '10-12 anos',
    focus: 'Cultura Pop e Certificações',
    description: 'Inglês conectado com cultura pop, gamificação e certificações. Focado em comunicação real para a geração tecnológica.',
    highlights: ['Metodologia gamificada', 'Foco total em speaking', 'Preparação para certificados internacionais'],
  },
  {
    title: 'OpenLife Journey',
    age: '13+ anos',
    focus: 'Fluência em 18 Meses',
    description: 'Fluência em 18 meses com metodologia ESL exclusiva. Nosso curso carro-chefe para quem precisa de resultados rápidos, imersão e comunicação sem tradução.',
    highlights: ['Metodologia ESL imersiva', 'Comunicação sem tradução mental', 'Certificação Internacional CEFR C1/C2'],
  },
  {
    title: 'Keep the Fluency',
    age: 'Avançado',
    focus: 'Comunidade e Desafios',
    description: 'Mantenha sua fluência com desafios e uma comunidade ativa. Ideal para networking e aprimoramento contínuo do vocabulário avançado.',
    highlights: ['Debates de alto nível', 'Networking internacional', 'Aperfeiçoamento gramatical fino'],
  },
];

const PURPLE = '#4C1D95';
const ORANGE = '#F57C20';
const SLATE = '#334155';
const GRAY = '#94A3B8';

function generate() {
  const doc = new PDFDocument({ size: 'A4', margins: { top: 60, bottom: 60, left: 56, right: 56 } });
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  doc.pipe(fs.createWriteStream(outputPath));

  // Cabeçalho
  doc.rect(0, 0, doc.page.width, 140).fill(PURPLE);
  if (fs.existsSync(logoPath)) {
    try { doc.image(logoPath, 56, 30, { height: 50 }); } catch { /* segue sem logo se o arquivo não for legível */ }
  }
  doc.fillColor('#ffffff').fontSize(24).font('Helvetica-Bold')
    .text('Nossos Cursos', 56, 90, { width: doc.page.width - 112 });
  doc.fontSize(11).font('Helvetica')
    .text('Uma trilha completa de aprendizado para cada fase da sua vida.', 56, 118);

  doc.fillColor(SLATE).y = 165;

  COURSES.forEach((course, i) => {
    if (doc.y > doc.page.height - 180) doc.addPage();

    doc.moveDown(i === 0 ? 0 : 1);
    doc.fillColor(ORANGE).fontSize(9).font('Helvetica-Bold')
      .text(course.focus.toUpperCase(), { characterSpacing: 0.5 });
    doc.fillColor(PURPLE).fontSize(18).font('Helvetica-Bold')
      .text(`${course.title}  ·  ${course.age}`);
    doc.moveDown(0.3);
    doc.fillColor(SLATE).fontSize(11).font('Helvetica')
      .text(course.description, { lineGap: 3 });
    doc.moveDown(0.4);
    course.highlights.forEach((h) => {
      doc.fillColor(PURPLE).fontSize(11).text('•  ', { continued: true }).fillColor(SLATE).text(h);
    });
    doc.moveDown(0.6);
    doc.strokeColor('#E2E8F0').lineWidth(1)
      .moveTo(56, doc.y).lineTo(doc.page.width - 56, doc.y).stroke();
  });

  doc.moveDown(1.5);
  doc.fillColor(GRAY).fontSize(9).font('Helvetica')
    .text('OpenLife English School  ·  contato@openlifebrasil.com  ·  openlifebrasil.com.br', { align: 'center' });

  doc.end();
  console.log(`[generate-courses-pdf] PDF gerado em ${outputPath}`);
}

generate();
