import React from 'react';

const skillsData = {
  frontend: [
    { name: 'React', level: 90, color: '#61dafb' },
    { name: 'JavaScript', level: 85, color: '#f7df1e' },
    { name: 'HTML/CSS', level: 90, color: '#e95f3d' }
  ],
  backend: [
    { name: 'Node.js', level: 85, color: '#339933' },
    { name: 'Express', level: 85, color: '#4133ff' },
    { name: 'MongoDB', level: 80, color: '#85d186' }
  ],
  tools: [
    { name: 'Git', level: 85, color: '#f05032' },
    { name: 'VS Code', level: 90, color: '#007acc' },
  ]
};

const Skills = () => {
  const styles = {
    section: {
      padding: '96px 0'
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
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      marginTop: '48px'
    },
    skillCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '32px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '24px',
      textAlign: 'center',
      color: '#8b5cf6'
    },
    skillItem: {
      marginBottom: '20px'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px'
    },
    skillName: {
      fontWeight: 500
    },
    skillPercent: {
      color: '#8b5cf6'
    },
    progressBar: {
      width: '100%',
      height: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '4px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '4px',
      transition: 'width 1s ease'
    }
  };

  return (
    <section id="habilidades" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header} className="animate-fade-in">
          <span style={styles.badge}>Minhas Habilidades</span>
          <h2 style={styles.title}>Tecnologias que domino</h2>
          <div style={styles.divider}></div>
        </div>
        
        <div style={styles.grid}>
          <div className="animate-slide-left">
            <div style={styles.skillCard}>
              <h3 style={styles.cardTitle}>🎨 Frontend</h3>
              {skillsData.frontend.map((skill, idx) => (
                <div key={idx} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div 
                      style={{
                        ...styles.progressFill,
                        width: `${skill.level}%`,
                        background: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div style={styles.skillCard}>
              <h3 style={styles.cardTitle}>⚙️ Backend</h3>
              {skillsData.backend.map((skill, idx) => (
                <div key={idx} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div 
                      style={{
                        ...styles.progressFill,
                        width: `${skill.level}%`,
                        background: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-slide-right">
            <div style={styles.skillCard}>
              <h3 style={styles.cardTitle}>🛠️ Ferramentas</h3>
              {skillsData.tools.map((skill, idx) => (
                <div key={idx} style={styles.skillItem}>
                  <div style={styles.skillHeader}>
                    <span style={styles.skillName}>{skill.name}</span>
                    <span style={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div style={styles.progressBar}>
                    <div 
                      style={{
                        ...styles.progressFill,
                        width: `${skill.level}%`,
                        background: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;