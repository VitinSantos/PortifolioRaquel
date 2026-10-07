// Conteúdo editável do site. Nada aqui é inventado:
// o que não foi informado fica como null e a interface simplesmente não o mostra.
const site = {
  name: 'Raquel Balduino',
  role: 'Técnica em Publicidade | Marketing | Design',
  tagline: 'Design nasce de pesquisa, repertório e intenção — não apenas de estética.',
  email: 'raquelbalduino2006@gmail.com',
  location: 'Barueri, São Paulo, Brasil',
  about: 'Sou curiosa e gosto de entender o contexto antes de criar. Sou técnica em Publicidade e estudante de Design Digital, atuando com criação visual, composição, tipografia e linguagem para construir soluções que comuniquem com clareza e propósito.',

  social: {
    instagram: {
      label: 'Instagram',
      href: 'https://www.instagram.com/rbalduinoo/',
    },
    linkedin: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/raquel-balduino-bb4129259/?isSelfProfile=false',
    },
  },

  nav: [
    { label: 'Projetos', href: '#projetos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Contato', href: '#contato' },
  ],
}

export default site
