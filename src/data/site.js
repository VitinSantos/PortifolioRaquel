// Conteúdo editável do site. Nada aqui é inventado:
// o que não foi informado fica como null e a interface simplesmente não o mostra.
const site = {
  name: 'Raquel Balduino',
  role: 'Designer',
  tagline: 'Transformo ideias em experiências visuais.',
  email: null, // TODO: adicionar quando a Raquel informar

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
    { label: 'Contato', href: '#contato' },
  ],
}

export default site
