import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
      gap: '70px',
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

  const navItems = ['Início', 'Sobre', 'Habilidades', 'Projetos'];
  const sectionIds = ['inicio', 'sobre', 'habilidades', 'projetos'];

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.logo} onClick={() => scrollToSection('inicio')}>
          {"<Júnio />"}
        </div>
        
        <div style={{ ...styles.desktopMenu, display: window.innerWidth < 980 ? 'none' : 'flex' }}>
          {navItems.map((item, idx) => (
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
            Contato
          </button>
        </div>
        
        <button
          style={{ ...styles.mobileMenuButton, display: window.innerWidth < 980 ? 'block' : 'none' }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {isMenuOpen && (
        <div style={styles.mobileMenu}>
          {navItems.map((item, idx) => (
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