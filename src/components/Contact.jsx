import React, { useState, useRef } from 'react';
import { Github, Linkedin, Instagram, Whatsapp, Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';
import { useLanguage } from '../context/language.jsx';
import emailjs from '@emailjs/browser';
import { CheckCircleFill } from 'react-bootstrap-icons'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();
  const isMobile = window.innerWidth <= 1120
  const { language } = useLanguage();

  const t = {
    badge:
      language === 'English' ? "Let's Talk" :
      language === 'Español' ? 'Hablemos' :
      'Vamos Conversar',  
    title:
      language === 'English' ? 'Get in Touch' :
      language === 'Español' ? 'Ponte en Contacto' :
      'Entre em Contato',
    infoTitle:
      language === 'English' ? 'Contact Information' :
      language === 'Español' ? 'Información de Contacto' :
      'Informações de Contato',
    formTitle:
      language === 'English' ? 'Send a Message' :
      language === 'Español' ? 'Enviar un Mensaje' :
      'Enviar Mensagem',
    labelName:
      language === 'English' ? 'Name' :
      language === 'Español' ? 'Nombre' :
      'Nome',
    labelEmail: 'Email',
    labelMessage:
      language === 'English' ? 'Message' :
      language === 'Español' ? 'Mensaje' :
      'Mensagem',
    placeholderName:
      language === 'English' ? 'Your name' :
      language === 'Español' ? 'Tu nombre' :
      'Seu nome',
    placeholderEmail:
      language === 'English' ? 'your@email.com' :
      language === 'Español' ? 'tu@email.com' :
      'seu@email.com',
    placeholderMessage:
      language === 'English' ? 'Write your message here...' :
      language === 'Español' ? 'Escribe tu mensaje aquí...' :
      'Escreva sua mensagem aqui...',
    submit:
      language === 'English' ? 'Send Message' :
      language === 'Español' ? 'Enviar Mensaje' :
      'Enviar Mensagem',
    sending:
      language === 'English' ? 'Sending...' :
      language === 'Español' ? 'Enviando...' :
      'Enviando...',
    successTitle:
      language === 'English' ? 'Message Sent!' :
      language === 'Español' ? '¡Mensaje Enviado!' :
      'Mensagem Enviada!',
    successText:
      language === 'English' ? "Thank you! I'll get back to you soon." :
      language === 'Español' ? '¡Gracias! Me pondré en contacto pronto.' :
      'Obrigado! Entrarei em contato em breve.',
    sendAnother:
      language === 'English' ? 'Send another message' :
      language === 'Español' ? 'Enviar otro mensaje' :
      'Enviar outra mensagem',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_8jdls7n',
      'template_l39p5qn',
      formRef.current,
      'J2b9WI4PLWxZRg7TQ'
    ).then(() => {
      setIsSubmitted(true);
      setIsSending(false);
      setFormData({ name: '', email: '', message: '' });
    }).catch(() => {
      setIsSending(false);
      alert(language === 'English' ? 'Error sending message. Try again.' :
            language === 'Español' ? 'Error al enviar. Intenta de nuevo.' :
            'Erro ao enviar. Tente novamente.');
    });
  };

  const styles = {
    section: { padding: '96px 0' },
    icon: {
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      padding: '10px',
      borderRadius: '10px',
    },
    container: { 
      maxWidth: '1280px', margin: '0 auto', padding: '0 24px' 
    },
    header: { textAlign: 'center', marginBottom: '64px' },
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
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      gap: '48px',
      alignItems: 'start'
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
    socialDivisor: { borderBottom: 'solid 1px rgba(139, 92, 246, 0.2)' },
    social: {
      color: '#d1d5db',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      margin: '10px',
      gap: '12px',
    },
    infoTitle: { fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', color: '#8b5cf6' },
    infoItem: { display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' },
    infoIcon: { fontSize: '24px' },
    infoText: { color: '#d1d5db' },
    socialLinks: { display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' },
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
    formTitle: { fontSize: '20px', fontWeight: 'bold', marginBottom: '24px', color: '#8b5cf6' },
    form: { display: 'flex', flexDirection: 'column', gap: '20px' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '8px' },
    label: { color: '#d1d5db', fontWeight: 500, fontSize: '14px' },
    input: {
      padding: '12px 16px',
      background: 'rgba(0, 0, 0, 0.3)',
      border: '1px solid rgba(139, 92, 246, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.3s ease',
      width: '100%'
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
      transition: 'all 0.3s ease',
      minHeight: '140px',
      width: '100%'
    },
    submitButton: {
      background: isSending ? 'rgba(139, 92, 246, 0.5)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      color: 'white',
      padding: '14px',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      fontSize: '16px',
      cursor: isSending ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      width: '100%'
    },
    successMessage: {
      textAlign: 'center',
      padding: '48px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    },
    successIcon: { background: 'rgba(0, 180, 0, 0.1)', borderRadius: '50%', padding: '30px'  },
    successTitle: { fontSize: '24px', fontWeight: 'bold' },
    successText: { color: '#d1d5db' },
    sendAnotherBtn: {
      marginTop: '8px',
      background: 'transparent',
      border: '1px solid #8b5cf6',
      color: '#8b5cf6',
      padding: '10px 24px',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '14px',
      transition: 'all 0.3s ease'
    }
  };

  return (
    <section id="contato" style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header} className="animate-fade-in">
          <span style={styles.badge}>{t.badge}</span>
          <h2 style={styles.title}>{t.title}</h2>
          <div style={styles.divider}></div>
        </div>

        <div style={styles.content}>
          <div className="animate-slide-left">
            <div style={styles.infoCard}>
              <div>
                <h3 style={styles.infoTitle}>{t.infoTitle}</h3>
                <div style={styles.infoItem}>
                  <span style={styles.infoIcon}><Envelope style={styles.icon} size='40px' color='#8b5cf6' /></span>
                  <span style={styles.infoText}>juniorodrigo0210@gmail.com</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoIcon}><Telephone style={styles.icon} size='40px' color='#8b5cf6' /></span>
                  <span style={styles.infoText}>(18) 99817-6206</span>
                </div>
                <div style={styles.infoItem}>
                  <span style={styles.infoIcon}><GeoAlt style={styles.icon} size='40px' color='#8b5cf6' /></span>
                  <span style={styles.infoText}>Araçatuba, SP - Brasil</span>
                </div>
              </div>

              <div style={styles.socialLinks}>
                <div style={styles.socialDivisor}>
                  <a style={styles.social} href="https://github.com/Junio-Rodr1go" target='_blank'>
                    <Github size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div onMouseEnter={e => e.target.style.color = '#8b5cf6'} onMouseLeave={e => e.target.style.color = '#d1d5db'}>GitHub</div>
                  </a>
                </div>
                <div style={styles.socialDivisor}>
                  <a style={styles.social} href="https://www.linkedin.com/in/junio-rodrigo-42542937a/" target='_blank'>
                    <Linkedin size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div onMouseEnter={e => e.target.style.color = '#8b5cf6'} onMouseLeave={e => e.target.style.color = '#d1d5db'}>LinkeDin</div>
                  </a>
                </div>
                <div style={styles.socialDivisor}>
                  <a style={styles.social} href="https://www.instagram.com/okktuti/" target='_blank'>
                    <Instagram size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div onMouseEnter={e => e.target.style.color = '#8b5cf6'} onMouseLeave={e => e.target.style.color = '#d1d5db'}>Instagram</div>
                  </a>
                </div>
                <div>
                  <a style={styles.social} href="https://wa.me/18998176206" target='_blank'>
                    <Whatsapp size='40px' color='#8b5cf6' style={styles.socialLink} />
                    <div onMouseEnter={e => e.target.style.colos = '#8b5cf6'} onMouseLeave={e => e.target.style.color = '#d1d5db'}>WhatsApp</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-right">
            <div style={styles.formCard}>
              {isSubmitted ? (
                <div style={styles.successMessage}>
                  <div style={styles.successIcon}><CheckCircleFill className={styles.submited} color="#00b400" size={150} /></div>
                  <div style={styles.successTitle}>{t.successTitle}</div>
                  <div style={styles.successText}>{t.successText}</div>
                  <button style={styles.sendAnotherBtn} onClick={() => setIsSubmitted(false)}>
                    {t.sendAnother}
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={styles.formTitle}>{t.formTitle}</h3>
                  <form ref={formRef} style={styles.form} onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>{t.labelName}</label>
                      <input
                        style={styles.input}
                        type="text"
                        name="from_name"
                        placeholder={t.placeholderName}
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>{t.labelEmail}</label>
                      <input
                        style={styles.input}
                        type="email"
                        name="from_email"
                        placeholder={t.placeholderEmail}
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div style={styles.inputGroup}>
                      <label style={styles.label}>{t.labelMessage}</label>
                      <textarea
                        style={styles.textarea}
                        name="message"
                        placeholder={t.placeholderMessage}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <button type="submit" style={styles.submitButton} disabled={isSending}>
                      {isSending ? t.sending : t.submit}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
