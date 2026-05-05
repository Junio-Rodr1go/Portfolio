import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/language.jsx';

const flags = {
  'Português': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 504" width="22" height="15">
      <rect width="720" height="504" fill="#009C3B" />
      <polygon points="360,36 684,252 360,468 36,252" fill="#FFDF00" />
      <circle cx="360" cy="252" r="144" fill="#002776" />
      <path d="M216,252 Q360,180 504,252" stroke="white" strokeWidth="28" fill="none" />
    </svg>
  ),
  'English': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="22" height="15">
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="white" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 V30 M0,15 H60" stroke="white" strokeWidth="10" />
      <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  ),
  'Español': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="22" height="15">
      <rect width="3" height="2" fill="#c60b1e" />
      <rect y="0.5" width="3" height="1" fill="#ffc400" />
    </svg>
  ),
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const isMobile = window.innerWidth < 1120;
  const { language, setLanguage } = useLanguage('Português');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const styles = {
    navbar: {
      position: 'fixed',
      top: 0,
      width: '100vw',
      zIndex: 1000,
      transition: 'all 0.3s ease',
      background: isScrolled ? 'rgba(15, 12, 41, 0.95)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.2)' : 'none'
    },
    container: {
      flexDirection: 'column',
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    select: {
      display: isMobile ? 'flex' : 'block',
      flexDirection: 'column',
      transition: 'all 0.3s ease',
      fontSize: '15px',
      position: 'absolute',
      right: isMobile ? '60px' : '100px',
      top: isMobile ? '14px' : '20px',
      background: isScrolled ? 'rgba(15, 12, 41, 0.95)' : 'transparent',
      color: 'white',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '8px',
      padding: '4px 8px',
      cursor: 'pointer',
      outline: 'none',
      width: isMobile ? 'auto' : '140px',
      alignItems: isMobile && 'center',
      gap: '10px'
    },
    selected: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '4px 8px',
      cursor: 'pointer',
      transition: 'background 0.3s ease'
    },
    option: {
      padding: '5px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
      borderRadius: '10px'
    },
    logo: {
      position: 'absolute',
      alignSelf: 'start',
      fontSize: '28px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      cursor: 'pointer'
    },
    desktopMenu: {
      display: 'flex',
      gap: '110px',
      alignItems: 'center',
      justifyContent: 'center'
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: '#d1d5db',
      fontSize: '1rem',
      fontWeight: 500,
      cursor: 'pointer',
      transition: 'color 0.3s ease'
    },
    mobileMenuButton: {
      alignSelf: 'end',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      fontSize: '24px'
    },
    mobileMenu: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '20px 24px',
      background: 'rgba(15, 12, 41, 0.95)',
      backdropFilter: 'blur(10px)',
      borderTop: '1px solid rgba(139, 92, 246, 0.2)'
    }
  };

  const navItems = {
    'Português': ['Início', 'Sobre', 'Projetos'],
    'English': ['Home', 'About', 'Projects'],
    'Español': ['Inicio', 'Acerca de', 'Proyectos']
  };
  const sectionIds = ['inicio', 'sobre', 'projetos'];

  const LangSelector = () => (
    <div style={styles.select}>
      <div onClick={() => setIsSelected(!isSelected)} style={styles.selected}>
        {flags[language]} {!isMobile && language}
      </div>
      {isSelected && (
        <div>
          <div style={styles.option}
            onClick={() => { setLanguage('English'); setIsSelected(false); }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {flags['English']} {!isMobile && 'English'}
          </div>
          <div style={styles.option}
            onClick={() => { setLanguage('Español'); setIsSelected(false); }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {flags['Español']} {!isMobile && 'Español'}
          </div>
          <div style={styles.option}
            onClick={() => { setLanguage('Português'); setIsSelected(false); }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          >
            {flags['Português']} {!isMobile && 'Português'}
          </div>
        </div>

      )}
    </div>
  );

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => scrollToSection('inicio')}>
          {"<Júnio />"}
        </div>

        <div style={{ ...styles.desktopMenu, display: isMobile ? 'none' : 'flex' }}>
          {navItems[language].map((item, idx) => (
            <button
              key={idx}
              style={styles.navLink}
              onClick={() => scrollToSection(sectionIds[idx])}
              onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              {item}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ padding: '10px 24px' }}
            onClick={() => scrollToSection('contato')}
          >
            { language === 'Português' ? 'Contato' : language === 'English' ? 'Contact' : 'Contacto'}
          </button>
        </div>

        <LangSelector />

        <button
          style={{ ...styles.mobileMenuButton, display: isMobile ? 'block' : 'none' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          {navItems[language].map((item, idx) => (
            <button
              key={idx}
              style={{ ...styles.navLink, textAlign: 'left', padding: '12px 0' }}
              onClick={() => scrollToSection(sectionIds[idx])}
            >
              {item}
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ width: '100%', textAlign: 'center' }}
            onClick={() => scrollToSection('contato')}
          >
            Contato
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
