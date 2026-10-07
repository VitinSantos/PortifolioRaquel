const projects = {
  'special-dark': {
    number: '02',
    title: 'Reposicionamento da linha Special Dark',
    subtitle: 'Intenso em todas as estações.',
    intro: 'Uma campanha criada para ampliar a percepção da linha Special Dark e mostrar que chocolate intenso não precisa ficar preso às datas comemorativas.',
    images: [
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-10-07%20a%CC%80s%2005.26.54-HdgJ0jdEPYnWxY0UoKj5jos2QMZpjo.png', alt: 'Peças da campanha Special Dark' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-10-07%20a%CC%80s%2005.26.58-T6iPKu3zeDlekL2QCSaHlFJQHUuaxh.png', alt: 'Aplicações visuais da campanha' },
      { src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20Tela%202026-10-07%20a%CC%80s%2005.27.05-dH227n64QQ9okgKHdrMtVQCKRxz5Xw.png', alt: 'Paleta e direção criativa do projeto' },
    ],
  },
}

export default function ProjectDetail({ slug }) {
  const project = projects[slug] || projects['special-dark']

  return (
    <main className="project-detail">
      <header className="project-detail__nav">
        <a href="/#projetos">← Voltar aos projetos</a>
        <span>{project.number} / Projeto</span>
      </header>
      <section className="project-detail__intro">
        <p className="eyebrow">Estudo de caso · Campanha</p>
        <h1>{project.title}</h1>
        <p className="project-detail__subtitle">{project.subtitle}</p>
        <p className="project-detail__lead">{project.intro}</p>
      </section>
      <section className="project-detail__story">
        <div className="project-detail__copy">
          <p className="eyebrow">01 — Contexto</p>
          <h2>Uma ideia que atravessa o calendário.</h2>
          <p>Durante a análise, o desafio era fugir da associação do chocolate às datas sazonais. A direção criativa transforma intensidade em um estado de espírito: uma experiência que pode acompanhar o verão, o inverno e os dias comuns.</p>
        </div>
        <div className="project-gallery">
          {project.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}
        </div>
      </section>
    </main>
  )
}
