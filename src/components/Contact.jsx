import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Whatsapp, Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const styles = {
    hoverEnter: {
      color: '#8b5cf6',
    },
    section: {
      padding: '96px 0'
    },
    icon: {
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      padding: '10px',
      borderRadius: '10px',
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
      gridTemplateColumns: '1fr',
      gap: '48px'
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    infoCard: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth < 666 ? '1fr' : '1fr 1fr',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    socialDivisor: {
      borderBottom: 'solid 1px rgba(139, 92, 246, 0.2)',
    },
    social: {
      color: '#d1d5db',
      margin: '0 0 0 10px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: '10px',
      gap: '12px',
    },
    infoTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px',
      color: '#8b5cf6'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '16px'
    },
    infoIcon: {
      fontSize: '24px'
    },
    infoText: {
      color: '#d1d5db'
    },

    socialLinks: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      marginTop: '16px'
    },
    socialLink: {
      display: 'inline-block',
      padding: '2px 4px',
      background: 'rgba(139, 92, 246, 0.2)',
      borderRadius: '8px',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    formCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: '32px',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      color: '#d1d5db',
      fontWeight: 500
    },
    input: {
      padding: '12px 16px',
      background: 'rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    textarea: {
      padding: '12px 16px',
      background: 'rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      fontFamily: 'inherit',
      resize: 'vertical',
      transition: 'all 0.3s ease'
    },
    submitButton: {
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '14px',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    successMessage: {
      textAlign: 'center',
      padding: '48px 0'
    },
    successIcon: {
      fontSize: '48px',
      marginBottom: '16px'
    },
    successTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px'
    }
  };

  return (
    <section id="contato" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header} className="animate-fade-in">
          <span style={styles.badge}>Vamos Conversar</span>
          <h2 style={styles.title}>Entre em Contato</h2>
          <div style={styles.divider}></div>
        </div>

        <div style={styles.content}>
          <div className="animate-slide-left">
            <div style={styles.infoCard}>
              <div>
                <h3 style={styles.infoTitle}>Informações de Contato</h3>
                <div style={styles.infoItem}>
                  <span style={styles.infoIcon}>< Envelope style={styles.icon} size='40px' color='#8b5cf6' /></span>
                  <span style={styles.infoText}>juniorodrigo0210@gmail.com</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoIcon}>< Telephone style={styles.icon} size='40px' color='#8b5cf6' /></span>
                  <span style={styles.infoText}>(18) 99817-6206</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoIcon}><GeoAlt style={styles.icon} size='40px' color='#8b5cf6' /></span>
                  <span style={styles.infoText}>Araçatuba, SP - Brasil</span>
                </div>
              </div>

              <div style={styles.socialLinks}>
                <div style={styles.socialDivisor}>
                  <a
                    style={styles.social} href="https://github.com/Junio-Rodr1go" target='_blank' >
                    <Github size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div
                      onMouseEnter={e => e.target.style.color = '#8b5cf6'}
                      onMouseLeave={e => e.target.style.color = '#d1d5db'}
                    >GitHub</div>
                  </a>
                </div>
                <div style={styles.socialDivisor}>
                  <a
                    style={styles.social} href="https://www.linkedin.com/in/junio-rodrigo-42542937a/" target='_blank'>
                    <Linkedin size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div
                      onMouseEnter={e => e.target.style.color = '#8b5cf6'}
                      onMouseLeave={e => e.target.style.color = '#d1d5db'}
                    >LinkeDin</div>
                  </a>
                </div>
                <div style={styles.socialDivisor}>
                  <a style={styles.social} href="https://www.instagram.com/okktuti/" target='_blank'>
                    <Instagram size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div
                      onMouseEnter={e => e.target.style.color = '#8b5cf6'}
                      onMouseLeave={e => e.target.style.color = '#d1d5db'}>
                      Instagram</div>
                  </a>
                </div>
                <div>
                  <a style={styles.social} href="https://wa.me/18998176206" target='_blank'>
                    <Whatsapp size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div
                      onMouseEnter={e => e.target.style.color = '#8b5cf6'}
                      onMouseLeave={e => e.target.style.color = '#d1d5db'}>
                      WhatsApp</div>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;