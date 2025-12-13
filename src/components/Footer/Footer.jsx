import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <div className="footer__container">
          <h2 className="footer__title">Contacto</h2>

          <div className="footer__contact-grid">
            <div className="footer__contact-item">
              <p className="footer__label">Teléfono:</p>
              <p className="footer__value">910 84 16 72</p>
            </div>

            <div className="footer__contact-item">
              <p className="footer__label">Email:</p>
              <p className="footer__value">online@ilerna.com</p>
            </div>

            <div className="footer__social">
              <p className="footer__label">Síguenos:</p>
              <div className="footer__social-icons">
                <a href="#" className="footer__social-link" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="footer__social-link" aria-label="Instagram">
                  <Instagram size={24} />
                </a>
                <a href="#" className="footer__social-link" aria-label="YouTube">
                  <Youtube size={24} />
                </a>
                <a href="#" className="footer__social-link" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__links">
        <div className="footer__container">
          <p>&copy; {new Date().getFullYear()} iLERNA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
