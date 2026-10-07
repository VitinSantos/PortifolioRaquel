import Nav from './components/Nav'
import Hero from './sections/Hero'
import PortfolioSections from './sections/PortfolioSections'

export default function App() {
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
