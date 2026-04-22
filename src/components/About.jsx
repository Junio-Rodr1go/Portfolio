import React from 'react';

const About = () => {
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

  return (
    <section id="sobre" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header} className="animate-fade-in">
          <span style={styles.badge}>Sobre Mim</span>
          <h2 style={styles.title}>Quem sou eu?</h2>
          <div style={styles.divider}></div>
        </div>

        <div style={{ ...styles.content, gridTemplateColumns: window.innerWidth > 640 ? '1fr 1fr' : '1fr' }}>
          <div className="animate-slide-left">
            <p style={styles.text}>
              Olá! Meu nome é <span style={styles.highlight}>Júnio Rodrigo</span>, desenvolvedor
              full stack apaixonado por criar experiências web modernas, performáticas e escaláveis.
            </p>

            <p style={styles.text}>
              Minha jornada começou pela curiosidade de entender como os sites funcionavam, e desde
              então não parei mais. Hoje estudo <span style={styles.highlight}>Desenvolvimento de Sistemas</span> na{' '}
              <span style={styles.highlight}>ETEC de Araçatuba</span>.
            </p>

            <p style={styles.text}>
              Trabalho com <span style={styles.highlight}>React, Node.js e MongoDB</span>, sempre
              focado em código limpo, boas práticas e soluções que realmente fazem diferença.
            </p>

            <p style={styles.text}>
              Também me comunico em <span style={styles.highlight}>Inglês e Espanhol (B2 - nível intermediario)</span>,
              o que me permite colaborar em projetos e consumir conteúdo técnico diretamente na fonte.
            </p>


            <div style={styles.stats}>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>5+</div>
                <div style={styles.statLabel}>Projetos Concluídos</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statNumber}>3+</div>
                <div style={styles.statLabel}>Anos de Prática</div>
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