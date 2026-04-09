import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tech.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  const filters = ['all', 'React', 'Node.js', 'CSS3', 'JavaScript'];

  const styles = {
    section: {
      padding: '96px 0',
      background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.02))'
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
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '12px',
      marginTop: '40px',
      flexWrap: 'wrap'
    },
    filterButton: {
      padding: '8px 20px',
      borderRadius: '50px',
      background: 'transparent',
      border: '1px solid rgba(139, 92, 246, 0.5)',
      color: '#d1d5db',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '32px',
      marginTop: '48px'
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    projectImage: {
      width: '100%',
      height: '240px',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    projectContent: {
      padding: '24px'
    },
    projectTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '12px'
    },
    projectDescription: {
      color: '#d1d5db',
      marginBottom: '16px',
      lineHeight: 1.6
    },
    techTags: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '20px'
    },
    techTag: {
      padding: '4px 12px',
      background: 'rgba(139, 92, 246, 0.2)',
      borderRadius: '50px',
      fontSize: '12px',
      color: '#8b5cf6'
    },
    projectLinks: {
      display: 'flex',
      gap: '16px',
      paddingTop: '16px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    link: {
      color: '#8b5cf6',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <section id="projetos" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header} className="animate-fade-in">
          <span style={styles.badge}>Meus Trabalhos</span>
          <h2 style={styles.title}>Projetos em Destaque</h2>
          <div style={styles.divider}></div>
        </div>
        
        <div style={styles.filterContainer}>
          {filters.map((f, idx) => (
            <button
              key={idx}
              style={{
                ...styles.filterButton,
                background: filter === f ? 'linear-gradient(135deg, #6366f1, #8b5cf6)' : 'transparent',
                borderColor: filter === f ? 'transparent' : 'rgba(139, 92, 246, 0.5)'
              }}
              onClick={() => setFilter(f)}
              onMouseEnter={(e) => {
                if (filter !== f) e.target.style.borderColor = '#8b5cf6';
              }}
              onMouseLeave={(e) => {
                if (filter !== f) e.target.style.borderColor = 'rgba(139, 92, 246, 0.5)';
              }}
            >
              {f === 'all' ? 'Todos' : f}
            </button>
          ))}
        </div>
        
        <div style={styles.projectsGrid}>
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="animate-fade-in"
              style={{
                ...styles.projectCard,
                transform: hoveredProject === project.id ? 'translateY(-8px)' : 'translateY(0)'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img 
                src={project.image} 
                alt={project.title}
                style={{
                  ...styles.projectImage,
                  transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                }}
              />
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDescription}>{project.description}</p>
                <div style={styles.techTags}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div style={styles.projectLinks}>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    🔗 Demo ao vivo
                  </a>
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
                    💻 Código fonte
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;