import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import '../../styles/main.scss'

const Footer = () => {
  return (
    <footer className="footer">
      {/* Sección de Contacto */}
      <div className="footer__contact">
        <div className="footer__container">
          <h2 className="footer__title">Contacto</h2>
          
          <div className="footer__contact-grid">
            <div className="footer__contact-item">
              <p className="footer__label">Teléfono:</p>
              <p className="footer__value">910 84 16 72</p>
            </div>

            <div className="footer__contact-item">
              <p className="footer__label">E-mail:</p>
              <p className="footer__value">info@ilernamadrid.com</p>
            </div>

            <div className="footer__contact-item">
              <p className="footer__label">Horario del centro:</p>
              <p className="footer__value">De lunes a viernes de 9:00h a 20:00h</p>
            </div>
          </div>

          <div className="footer__social">
            <p className="footer__label">Redes sociales:</p>
            <div className="footer__social-icons">
              <a href="#" className="footer__social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer__social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer__social-link">
                <Youtube size={20} />
              </a>
              <a href="#" className="footer__social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enlaces (simplificado) */}
      <div className="footer__links">
        <div className="footer__container">
          <p style={{ textAlign: 'center', color: '#666' }}>
            © 2024 ILERNA - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;