import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

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
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '48px'
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    },
    infoCard: {
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      padding: '24px',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
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
      gap: '16px',
      marginTop: '16px'
    },
    socialLink: {
      display: 'inline-block',
      padding: '8px 16px',
      background: 'rgba(139, 92, 246, 0.2)',
      borderRadius: '8px',
      color: '#8b5cf6',
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
              <h3 style={styles.infoTitle}>📞 Informações de Contato</h3>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📧</span>
                <span style={styles.infoText}>seuemail@exemplo.com</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📱</span>
                <span style={styles.infoText}>(11) 99999-9999</span>
              </div>
              <div style={styles.infoItem}>
                <span style={styles.infoIcon}>📍</span>
                <span style={styles.infoText}>São Paulo, SP - Brasil</span>
              </div>
            </div>
            
            <div style={styles.infoCard}>
              <h3 style={styles.infoTitle}>🌐 Redes Sociais</h3>
              <div style={styles.socialLinks}>
                <a href="#" style={styles.socialLink} onMouseEnter={(e) => e.target.style.background = '#8b5cf6'} onMouseLeave={(e) => e.target.style.background = 'rgba(139, 92, 246, 0.2)'}>GitHub</a>
                <a href="#" style={styles.socialLink} onMouseEnter={(e) => e.target.style.background = '#8b5cf6'} onMouseLeave={(e) => e.target.style.background = 'rgba(139, 92, 246, 0.2)'}>LinkedIn</a>
                <a href="#" style={styles.socialLink} onMouseEnter={(e) => e.target.style.background = '#8b5cf6'} onMouseLeave={(e) => e.target.style.background = 'rgba(139, 92, 246, 0.2)'}>Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-right">
            <div style={styles.formCard}>
              {isSubmitted ? (
                <div style={styles.successMessage}>
                  <div style={styles.successIcon}>✅</div>
                  <h3 style={styles.successTitle}>Mensagem enviada!</h3>
                  <p style={{ color: '#d1d5db' }}>Entrarei em contato em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Nome completo *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="Digite seu nome"
                      onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)'}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={styles.input}
                      placeholder="seuemail@exemplo.com"
                      onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)'}
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Mensagem *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      style={styles.textarea}
                      placeholder="Digite sua mensagem..."
                      onFocus={(e) => e.target.style.borderColor = '#8b5cf6'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(139, 92, 246, 0.3)'}
                    />
                  </div>
                  <button
                    type="submit"
                    style={styles.submitButton}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;