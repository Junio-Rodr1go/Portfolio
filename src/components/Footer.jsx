import React from 'react';
import { useLanguage } from '../context/language.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const t = {
    developed:
      language === 'English' ? 'Developed by' :
      language === 'Español' ? 'Desarrollado por' :
      'Desenvolvido por',
    rights:
      language === 'English' ? 'All rights reserved' :
      language === 'Español' ? 'Todos los derechos reservados' :
      'Todos os direitos reservados',
  };

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
            &copy; {currentYear} {t.developed} Júnio Rodrigo Cardoso de Sousa
          </div>
          <div style={styles.copyright}>
            {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
