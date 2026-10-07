import Button from '../components/Button'
import site from '../data/site'

const projects = [
  {
    number: '01',
    title: 'Identidade visual',
    description: 'Construção de sistemas visuais que traduzem a personalidade de cada projeto.',
    tags: ['Branding', 'Direção de arte'],
  },
  {
    number: '02',
    title: 'Experiências digitais',
    description: 'Interfaces claras, expressivas e pensadas para aproximar marcas e pessoas.',
    tags: ['UI/UX', 'Design digital'],
  },
  {
    number: '03',
    title: 'Projetos em destaque',
    description: 'Uma seleção de trabalhos e experimentos que mostram diferentes possibilidades visuais.',
    tags: ['Visual', 'Conceito'],
  },
]

export default function PortfolioSections() {
  return (
    <div className="portfolio-content">
      <section id="projetos" className="portfolio-section projects-section">
        <div className="section-heading">
          <p className="eyebrow">01 — Projetos</p>
          <h2>Ideias que ganham<br /><span>forma e presença.</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.number} className="project-card">
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
            </article>
          ))}
        </div>
      </section>

      <section id="sobre" className="portfolio-section about-section">
        <div className="section-heading">
          <p className="eyebrow">02 — Sobre</p>
          <h2>Design com intenção,<br /><span>detalhe e movimento.</span></h2>
        </div>
        <div className="about-copy">
          <p>{site.tagline} Meu trabalho parte da escuta e transforma conceitos em identidades visuais consistentes, interfaces intuitivas e experiências que permanecem.</p>
          <Button href="#contato" variant="ghost">Vamos conversar ↗</Button>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <p className="eyebrow">03 — Contato</p>
        <h2>Tem uma ideia<br /><span>para criar?</span></h2>
        <a className="contact-link" href={site.social.instagram.href} target="_blank" rel="noopener noreferrer">Fale comigo ↗</a>
      </section>
    </div>
  )
}
