import gymImg from './imgs/gym.png'
import studioImg from './imgs/studio.png'
import coffeeImg from './imgs/coffee.png'
import pokedexImg from './imgs/pokedex.png'
import flappyImg from './imgs/flappy.png'
import calculadorImg from './imgs/calculador.png'

export const projectsData = [
  {
    id: 1,
    title: "Landing Page Academia",
    description: "Landing page moderna para academia com design responsivo e animações suaves.",
    tech: ["React", "CSS3", "Vite"],
    image: gymImg,
    demoLink: "https://academia-landing-page-six.vercel.app/",
    codeLink: "https://github.com/Junio-Rodr1go/Academia-landingPage",
    featured: true
  },
  {
    id: 2,
    title: "Salão de beleza",
    description: "Landing page de um salão de beleza moderno com animações suaves.",
    tech: ["React", "CSS3", "Vite"],
    image: studioImg,
    demoLink: "https://danicabelos.vercel.app/",
    codeLink: "https://github.com/Junio-Rodr1go/Studio-hair",
    featured: true
  },
  {
    id: 3,
    title: "Cafeteria",
    description: "Uma cafeteria com design aconchegante, diferentes páginas e animações.",
    tech: ["HTML", "JavaScript", "CSS3"],
    image: coffeeImg,
    demoLink: "https://junio-rodr1go.github.io/Cafeteria/",
    codeLink: "https://github.com/Junio-Rodr1go/Cafeteria",
    featured: false
  },
  {
    id: 4,
    title: "Pokedex",
    description: "Site completo com consumo de API, barra de pesquisa e maior manipulação de dados.",
    tech: ["HTML", "JavaScript", "API RESTful", "CSS3"],
    image: pokedexImg,
    demoLink: "https://junio-rodr1go.github.io/Pokedex/",
    codeLink: "https://github.com/Junio-Rodr1go/Pokedex",
    featured: false
  },
  {
    id: 5,
    title: "Flappy bird",
    description: "Clone do famoso jogo Flappy bird.",
    tech: ["HTML", "JavaScript", "CSS3"],
    image: flappyImg,
    demoLink: "https://flappy-bird-ten-blond.vercel.app/",
    codeLink: "https://github.com/Junio-Rodr1go/Flappy-Bird",
    featured: false
  },
  {
    id: 6,
    title: "Calculadora",
    description: "Calculadora 100% funcional e de interface limpa, contendo light mode e Dark mode.",
    tech: ["HTML", "JavaScript", "CSS3"],
    image: calculadorImg,
    demoLink: "https://calculadora-drab-phi.vercel.app/",
    codeLink: "https://github.com/Junio-Rodr1go/Calculator",
    featured: false
  }
];