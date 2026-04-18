import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const styles = {
    footer: {
      background: 'rgba(0, 0, 0, 0.5)',
      borderTop: '1px solid rgba(139, 92, 246, 0.2)',
      padding: '32px 0'
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '0 24px'
    },
    content: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '16px'
    },
    copyright: {
      color: '#9ca3af',
      fontSize: '14px'
    },
    heart: {
      color: '#8b5cf6'
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.copyright}>
            &copy; {currentYear} Desenvolvido por Júnio Rodrigo Cardoso de Sousa
          </div>
          <div style={styles.copyright}>
            Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;