import React from 'react';
import { useLanguage } from '../context/language.jsx'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    hero: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px'
    },
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '0 20px'
    },
    badge: {
      display: 'inline-block',
      background: 'rgba(139, 92, 246, 0.2)',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '14px',
      color: '#8b5cf6',
      marginBottom: '24px'
    },
    badgeActive: {
      display: 'inline-block',
      background: 'rgba(139, 92, 246, 0.2)',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '14px',
      color: '#a179ff',
      marginBottom: '24px'
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: 1.2
    },
    gradientText: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    description: {
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      color: '#d1d5db',
      marginBottom: '32px',
      lineHeight: 1.6
    },
    buttons: {
      display: 'flex',
      gap: '16px',
      flexWrap: 'wrap'
    },
    imageContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    },
    image: {
      width: '100%',
      minWidth: '275px',
      maxWidth: '400px',
      borderRadius: '20px',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      padding: '4px'
    },
    imageInner: {
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden'
    },
    img: {
      width: '100%',
      minHeight: '275px',
      height: 'auto',
      display: 'block'
    },
    floatingBadge: {
      position: 'absolute',
      bottom: '20px',
      right: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '8px 16px',
      borderRadius: '50px',
      fontSize: '14px'
    }
  };
  const { language } = useLanguage();

  return (
    <section id="inicio" style={styles.hero}>
      <div style={styles.container}>
        <div style={{ ...styles.content, gridTemplateColumns: window.innerWidth > 640 ? '1fr 1fr' : '1fr' }}>
          <div className="animate-slide-left">
            <span style={styles.badge}>
              {language === 'Português' ? '👋 Olá, eu sou Júnio Rodrigo' : language === 'English' ? '👋 Hello, I am Júnio Rodrigo' : '👋 Hola, Soy Júnio Rodrigo'}</span>
            <h1 style={styles.title}>
              {language === 'Português' ? (<>Desenvolvedor <span style={styles.gradientText}>Full Stack</span></>) : language === 'English' ? (<>Developer <span style={styles.gradientText}>Full Stack</span></>) : (<>Desarrollador <span style={styles.gradientText}>Full Stack</span></>)}
            </h1>
            <p style={styles.description}>
              {language === 'Português' ? 'Crio soluções digitais incríveis com React, Node.js e tecnologias modernas. Apaixonado por transformar ideias em código funcional e elegante.' : language === 'English' ? 'I create amazing digital solutions with React, Node.js, and modern technologies. Passionate about turning ideas into functional and elegant code.' : 'Creo soluciones digitales increíbles con React, Node.js y tecnologías modernas. Soy apasionado por transformar ideas en código funcional y elegante.'}
            </p>
            <div style={styles.buttons}>
              <button className="btn-primary" onClick={() => scrollToSection('projetos')}>
                {language === 'Português' ? 'Ver Projetos' : language === 'English' ? 'Check out Projects' : 'Ver Proyectos'}
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contato')}>
                {language === 'Português' ? 'Entrar em Contato' : language === 'English' ? 'Get in touch' : 'Ponerse en contacto'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;