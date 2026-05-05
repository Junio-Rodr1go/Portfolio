import React from 'react';
import { useLanguage } from '../context/language.jsx';

const About = () => {
  const { language } = useLanguage();

  const styles = {
    section: {
      padding: '96px 0',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.05))'
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '64px'
    },
    badge: {
      color: '#8b5cf6',
      fontWeight: 600,
      letterSpacing: '1px',
      fontSize: '14px',
      textTransform: 'uppercase'
    },
    title: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: 'bold',
      marginTop: '12px',
      marginBottom: '16px'
    },
    divider: {
      width: '96px',
      height: '4px',
      background: 'linear-gradient(90deg, #6366f1, #8b5cf6)',
      margin: '0 auto'
    },
    content: {
      display: 'grid',
      gap: '48px',
      alignItems: 'center'
    },
    text: {
      color: '#d1d5db',
      lineHeight: 1.8,
      marginBottom: '24px'
    },
    highlight: {
      color: '#8b5cf6',
      fontWeight: 'bold'
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '32px'
    },
    statCard: {
      textAlign: 'center',
      padding: '24px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '16px',
      backdropFilter: 'blur(10px)'
    },
    statNumber: {
      fontSize: '32px',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    statLabel: {
      fontSize: '14px',
      color: '#9ca3af',
      marginTop: '8px'
    },
    imageContainer: {
      borderRadius: '20px',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      padding: '3px'
    },
    image: {
      width: '100%',
      borderRadius: '16px',
      overflow: 'hidden'
    },
    img: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  };

  const t = {
    badge:
      language === 'English' ? 'About Me' :
      language === 'Español' ? 'Sobre Mí' :
      'Sobre Mim',
    title:
      language === 'English' ? 'Who am I?' :
      language === 'Español' ? '¿Quién soy?' :
      'Quem sou eu?',
    p1:
      language === 'English'
        ? <p style={styles.text}>Hi! My name is <span style={styles.highlight}>Júnio Rodrigo</span>, a full stack developer passionate about creating modern, performant, and scalable web experiences.</p>
        : language === 'Español'
        ? <p style={styles.text}>¡Hola! Mi nombre es <span style={styles.highlight}>Júnio Rodrigo</span>, desarrollador full stack apasionado por crear experiencias web modernas, eficientes y escalables.</p>
        : <p style={styles.text}>Olá! Meu nome é <span style={styles.highlight}>Júnio Rodrigo</span>, desenvolvedor full stack apaixonado por criar experiências web modernas, performáticas e escaláveis.</p>,
    p2:
      language === 'English'
        ? <p style={styles.text}>My journey started with curiosity about how websites worked, and I haven't stopped since. I currently study <span style={styles.highlight}>Systems Development</span> at <span style={styles.highlight}>ETEC de Araçatuba</span>.</p>
        : language === 'Español'
        ? <p style={styles.text}>Mi camino comenzó por la curiosidad de entender cómo funcionaban los sitios web, y desde entonces no he parado. Actualmente estudio <span style={styles.highlight}>Desarrollo de Sistemas</span> en la <span style={styles.highlight}>ETEC de Araçatuba</span>.</p>
        : <p style={styles.text}>Minha jornada começou pela curiosidade de entender como os sites funcionavam, e desde então não parei mais. Hoje estudo <span style={styles.highlight}>Desenvolvimento de Sistemas</span> na{' '}<span style={styles.highlight}>ETEC de Araçatuba</span>.</p>,
    p3:
      language === 'English'
        ? <p style={styles.text}>I work with <span style={styles.highlight}>React, Node.js and MongoDB</span>, always focused on clean code, best practices, and solutions that truly make a difference.</p>
        : language === 'Español'
        ? <p style={styles.text}>Trabajo con <span style={styles.highlight}>React, Node.js y MongoDB</span>, siempre enfocado en código limpio, buenas prácticas y soluciones que realmente marcan la diferencia.</p>
        : <p style={styles.text}>Trabalho com <span style={styles.highlight}>React, Node.js e MongoDB</span>, sempre focado em código limpo, boas práticas e soluções que realmente fazem diferença.</p>,
    p4:
      language === 'English'
        ? <p style={styles.text}>I also communicate in <span style={styles.highlight}>Portuguese, Spanish and English (B2 - intermediate level)</span>, which allows me to collaborate on projects and consume technical content directly from the source.</p>
        : language === 'Español'
        ? <p style={styles.text}>También me comunico en <span style={styles.highlight}>Portugués, Inglés y Español (B2 - nivel intermedio)</span>, lo que me permite colaborar en proyectos y consumir contenido técnico directamente de la fuente.</p>
        : <p style={styles.text}>Também me comunico em <span style={styles.highlight}>Inglês e Espanhol (B2 - nível intermediario)</span>, o que me permite colaborar em projetos e consumir conteúdo técnico diretamente na fonte.</p>,
    projects:
      language === 'English' ? 'Completed Projects' :
      language === 'Español' ? 'Proyectos Completados' :
      'Projetos Concluídos',
    years:
      language === 'English' ? 'Years of Practice' :
      language === 'Español' ? 'Años de Práctica' :
      'Anos de Prática',
  };

  return (
    <section id="sobre" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header} className="animate-fade-in">
          <span style={styles.badge}>{t.badge}</span>
          <h2 style={styles.title}>{t.title}</h2>
          <div style={styles.divider}></div>
        </div>

        <div style={{ ...styles.content, gridTemplateColumns: window.innerWidth > 640 ? '1fr 1fr' : '1fr' }}>
          <div className="animate-slide-left">
            {t.p1}
            {t.p2}
            {t.p3}
            {t.p4}

            <div style={styles.stats}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>5+</div>
                <div style={styles.statLabel}>{t.projects}</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>3+</div>
                <div style={styles.statLabel}>{t.years}</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-right">
            <div style={styles.imageContainer}>
              <div style={styles.image}>
                <img
                  src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&h=500&fit=crop"
                  alt="Coding"
                  style={styles.img}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
