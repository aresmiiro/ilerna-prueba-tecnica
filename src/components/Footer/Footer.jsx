import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Phone, MapPin } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact-header">
          <h2 className="footer__contact-title">Contacto</h2>
          <div className="footer__contact-info">
            <div className="footer__contact-block">
              <p className="footer__contact-label">Teléfono:</p>
              <a href="tel:910841672" className="footer__contact-value">910 84 16 72</a>
            </div>
            <div className="footer__contact-block">
              <p className="footer__contact-label">E-mail:</p>
              <a href="mailto:info@ilernamadrid.com" className="footer__contact-value">info@ilernamadrid.com</a>
            </div>
            <div className="footer__contact-block">
              <p className="footer__contact-label">Horario del centro:</p>
              <p className="footer__contact-value">De lunes a viernes de 9:00h a 20:00h</p>
            </div>
          </div>
          <div className="footer__contact-social">
            <p className="footer__contact-social-label">Redes sociales:</p>
            <div className="footer__contact-social-icons">
              <a href="#" className="footer__contact-social-link" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" className="footer__contact-social-link" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" className="footer__contact-social-link" aria-label="Twitter">
                <Twitter size={14} />
              </a>
              <a href="#" className="footer__contact-social-link" aria-label="YouTube">
                <Youtube size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>
        <div className="footer__top">
            <a href="/" className="footer__logo-link">
              <img src="/assets/images/logo-ilerna.svg" alt="iLERNA" />
            </a>
          <p className="footer__social-title">Síguenos</p>
          <div className="footer__social-icons">
            <a href="#" className="footer__social-link" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Pinterest">
              <MapPin size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="Spotify">
              <Youtube size={20} />
            </a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__section-title">Contacto</h3>
            <div className="footer__links">
              <div className="footer__contact-item">
                <a href="tel:900730222" className="footer__contact-value">900 730 222</a>
              </div>
              <div className="footer__contact-item">
                <span className="footer__contact-label">Horario: De L a V de 9:00 a 20:00.</span>
              </div>
              <div className="footer__contact-item">
                <a href="mailto:online@ilerna.com" className="footer__contact-value">online@ilerna.com</a>
              </div>
            </div>

            <h3 className="footer__section-title" style={{ marginTop: '24px' }}>iLERNA</h3>
            <div className="footer__links">
              <a href="#" className="footer__link">Grupo iLERNA</a>
              <a href="#" className="footer__link">Blog iLERNA</a>
              <a href="#" className="footer__link">Centro de Ayuda</a>
              <a href="#" className="footer__link">Opiniones alumnos</a>
              <a href="#" className="footer__link">Movilidad Internacional</a>
              <a href="#" className="footer__link">Trabaja con nosotros</a>
            </div>
          </div>

          {/* Columna 2: Centros */}
          <div className="footer__section">
            <h3 className="footer__section-title">Centros</h3>
            <div className="footer__links">
              <a href="#" className="footer__link">FP Sevilla</a>
              <a href="#" className="footer__link">FP Madrid</a>
              <a href="#" className="footer__link">FP Lleida</a>
              <a href="#" className="footer__link">FP Tarragona</a>
              <a href="#" className="footer__link">FP Barcelona</a>
              <a href="#" className="footer__link">FP Valladolid</a>
              <a href="#" className="footer__link">FP Córdoba</a>
              <a href="#" className="footer__link">FP Cádiz</a>
            </div>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Grados de FP</h3>
            <div className="footer__links">
              <a href="#" className="footer__link">Grado Medio</a>
              <a href="#" className="footer__link">Grado Superior</a>
            </div>

            <h3 className="footer__section-title" style={{ marginTop: '24px' }}>Modalidades de FP</h3>
            <div className="footer__links">
              <a href="#" className="footer__link">FP a distancia</a>
              <a href="#" className="footer__link">FP Presencial</a>
              <a href="#" className="footer__link">FP Semipresencial</a>
              <a href="#" className="footer__link">FP + Universidad</a>
              <a href="#" className="footer__link">CSO para adultos</a>
            </div>
          </div>
          <div className="footer__section">
            <h3 className="footer__section-title">Familias FP</h3>
            <div className="footer__links">
              <a href="#" className="footer__link">FP Sanidad</a>
              <a href="#" className="footer__link">FP Servicios Socioculturales</a>
              <a href="#" className="footer__link">FP Imagen y Sonido</a>
              <a href="#" className="footer__link">FP Marketing y Comercio</a>
              <a href="#" className="footer__link">FP Informática y Comunicaciones</a>
              <a href="#" className="footer__link">FP Administración y Gestión</a>
              <a href="#" className="footer__link">FP Hostelería y Turismo</a>
              <a href="#" className="footer__link">FP Deporte</a>
            </div>
          </div>
        </div>

        <div className="footer__divider"></div>
        <div className="footer__bottom">
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">Promociones</a>
            <a href="#" className="footer__legal-link">Condiciones de venta</a>
            <a href="#" className="footer__legal-link">Política de cookies</a>
            <a href="#" className="footer__legal-link">Política de privacidad</a>
            <a href="#" className="footer__legal-link">Aviso legal</a>
            <a href="#" className="footer__legal-link">Resolución de litigios</a>
            <a href="#" className="footer__legal-link">Canal ético</a>
            <a href="#" className="footer__legal-link">Mapa Web</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;