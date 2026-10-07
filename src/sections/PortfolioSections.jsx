import Button from '../components/Button'
import Reveal from '../components/Reveal'
import site from '../data/site'

const projects = [
  { number: '01', slug: 'alena', title: 'Construção da agência Alena', description: 'Projeto de TCC com conceito, identidade visual e direção de arte para uma agência de publicidade.', tags: ['Branding', 'Direção de arte'] },
  { number: '02', slug: 'special-dark', title: 'Reposicionamento Special Dark', description: 'Campanha para comunicar a intensidade do chocolate Hershey’s em todas as estações.', tags: ['Estratégia', 'Campanha'] },
  { number: '03', slug: 'conteudo-performance', title: 'Conteúdo para redes e performance', description: 'Criativos digitais para redes sociais e tráfego pago, adaptados a diferentes formatos.', tags: ['Social media', 'Conteúdo'] },
  { number: '04', slug: 'audiovisual', title: 'Produção audiovisual', description: 'Captação, direção e edição de comerciais com foco em narrativa, ritmo e atmosfera.', tags: ['Vídeo', 'Edição'] },
]

const experience = [
  ['Loyalty Academy Brasil', 'Marketing Digital com foco em Fidelização', 'Social media estratégica, calendário editorial, posts e edição de cortes para YouTube, Reels, TikTok e Instagram.'],
  ['All Net Educação', 'Designer', 'Design para social media, campanhas, apresentações, vídeos e apoio em tráfego pago.'],
  ['Forma Pack', 'Design Gráfico e Marketing', 'Pré-impressão, embalagens, identidade visual, fotografia de produtos e estratégias de conteúdo.'],
]

export default function PortfolioSections() {
  return (
    <div className="portfolio-content">
      <section id="projetos" className="portfolio-section projects-section">
        <Reveal className="section-heading">

          <p className="eyebrow">01 — Projetos</p>
          <h2>Ideias que ganham<br /><span>forma e presença.</span></h2>
        </Reveal>

        <Reveal className="projects-grid">

          {projects.map((project) => (
            <a key={project.number} className="project-card" href={`/projetos/${project.slug}`} aria-label={`Abrir projeto: ${project.title}`}>
              <div className="project-card__top">
                <span>{project.number}</span>
                <span className="project-card__arrow" aria-hidden="true">↗</span>
              </div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </a>
          ))}
        </Reveal>
      </section>

      <section id="sobre" className="portfolio-section about-section">
        <Reveal className="section-heading">

          <p className="eyebrow">02 — Sobre</p>
          <h2>Design com intenção,<br /><span>detalhe e movimento.</span></h2>
        </Reveal>
        <Reveal className="about-copy" delay={0.12}>

          <p>{site.about}</p>
          <p>Minha experiência com conteúdo digital também me trouxe visão de narrativa, posicionamento e impacto. Gosto de observar tendências, organizar ideias e transformar referências em soluções visuais que façam sentido.</p>
          <Button href="#experiencia" variant="ghost">Ver experiência ↗</Button>
        </Reveal>
      </section>

      <section id="experiencia" className="portfolio-section experience-section">
        <Reveal className="section-heading">
          <p className="eyebrow">03 — Experiência</p>
          <h2>Entre estratégia,<br /><span>criação e execução.</span></h2>
        </Reveal>
        <div className="experience-list">
          {experience.map(([company, role, description]) => (
            <Reveal as="article" className="experience-item" key={company}>
              <div>
                <p className="experience-company">{company}</p>
                <h3>{role}</h3>
              </div>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contato" className="contact-section">
        <p className="eyebrow">04 — Contato</p>
        <h2>Vamos transformar<br /><span>ideias em impacto?</span></h2>
        <a className="contact-link" href={`mailto:${site.email}`}>Fale comigo ↗</a>
        <p className="contact-meta">{site.email} · {site.location}</p>
      </section>
    </div>
  )
}
