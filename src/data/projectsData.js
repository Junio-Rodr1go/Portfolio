import gymImg from './imgs/gym.png'
import studioImg from './imgs/studio.png'
import coffeeImg from './imgs/coffee.png'
import pokedexImg from './imgs/pokedex.png'
import flappyImg from './imgs/flappy.png'
import calculadorImg from './imgs/calculador.png'
import vendavelImg from './imgs/vendavel.png'

export const projectsData = [
  {
    id: 1,
    title: "Landing Page Academia",
    description: "Landing page moderna para academia com design responsivo e animações suaves.",
    description_en: "Modern gym landing page with responsive design and smooth animations.",
    description_es: "Landing page moderna para gimnasio con diseño responsivo y animaciones suaves.",
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
    description_en: "Landing page for a modern beauty salon with smooth animations.",
    description_es: "Landing page de un salón de belleza moderno con animaciones suaves.",
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
    description_en: "A coffee shop with a cozy design, multiple pages and animations.",
    description_es: "Una cafetería con diseño acogedor, diferentes páginas y animaciones.",
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
    description_en: "Full site with API consumption, search bar and advanced data handling.",
    description_es: "Sitio completo con consumo de API, barra de búsqueda y mayor manipulación de datos.",
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
    description_en: "Clone of the famous Flappy Bird game.",
    description_es: "Clon del famoso juego Flappy Bird.",
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
    description_en: "100% functional calculator with a clean interface, featuring light and dark mode.",
    description_es: "Calculadora 100% funcional con interfaz limpia, con modo claro y oscuro.",
    tech: ["HTML", "JavaScript", "CSS3"],
    image: calculadorImg,
    demoLink: "https://calculadora-drab-phi.vercel.app/",
    codeLink: "https://github.com/Junio-Rodr1go/Calculator",
    featured: false
  },
  {
    id: 7,
    title: "Loja Vendável",
    description: "Loja virtual completa com design moderno.",
    description_en: "Complete online store with modern design.",
    description_es: "Tienda virtual completa con diseño moderno.",
    tech: ["React", "CSS3", "Vite"],
    image: vendavelImg,
    demoLink: "https://vendavel.vercel.app/",
    codeLink: "https://github.com/Junio-Rodr1go/Store",
    featured: false
  }
];
