import Nav from './components/Nav'
import Hero from './sections/Hero'
import PortfolioSections from './sections/PortfolioSections'
import ProjectDetail from './sections/ProjectDetail'

export default function App() {
  const projectSlug = window.location.pathname.match(/^\/projetos\/([^/]+)/)?.[1]

  if (projectSlug) {
    return <ProjectDetail slug={projectSlug} />
  }

  return (
    <>
      <Nav />
      <main id="conteudo">
        <Hero />
        <PortfolioSections />
      </main>
    </>
  )
}
