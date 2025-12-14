import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Sección con fondo del body: Contacto, Logo y Links */}
      <div className="footer__header-section">
        <div className="footer__container">
          {/* Sección Contacto Superior */}
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

          {/* Logo y redes sociales */}
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
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Contenido principal - 4 columnas */}
          <div className="footer__content">
            {/* Columna 1: Contacto */}
            <div className="footer__section">
              <h3 className="footer__section-title">Contacto</h3>
              <div className="footer__links">
                <a href="tel:900730222" className="footer__link">900 730 222</a>
                <span className="footer__link-text">Horario: De L a V de 9:00 a 20:00.</span>
                <a href="mailto:online@ilerna.com" className="footer__link">online@ilerna.com</a>
              </div>

              <h3 className="footer__section-title footer__section-title--mt">iLERNA</h3>
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

            {/* Columna 3: Grados de FP */}
            <div className="footer__section">
              <h3 className="footer__section-title">Grados de FP</h3>
              <div className="footer__links">
                <a href="#" className="footer__link">Grado Medio</a>
                <a href="#" className="footer__link">Grado Superior</a>
              </div>

              <h3 className="footer__section-title footer__section-title--mt">Modalidades de FP</h3>
              <div className="footer__links">
                <a href="#" className="footer__link">FP a distancia</a>
                <a href="#" className="footer__link">FP Presencial</a>
                <a href="#" className="footer__link">FP Semipresencial</a>
                <a href="#" className="footer__link">FP + Universidad</a>
                <a href="#" className="footer__link">CSO para adultos</a>
              </div>
            </div>

            {/* Columna 4: Familias FP */}
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
        </div>
      </div>

      <div className="footer__white-section">
        <div className="footer__white-container">
          <div className="footer__certifications-section">
            <div className="footer__authorizations">
              <h3 className="footer__auth-title">Centro oficial inscrito en el registro estatal  - <span>AUTORIZACIONES</span></h3>

              <div className="footer__auth-items">
                <div className="footer__auth-item">
                  <div className="footer__auth-logo">
                    <img src="/assets/logos/madrid.svg" alt="Comunidad de Madrid" />
                  </div>
                  <div className="footer__auth-text">
                    <p>Madrid: <a href="#" className="footer__auth-link">28075729</a> / <a href="#" className="footer__auth-link">28082628</a></p>
                  </div>
                </div>

                <div className="footer__auth-item">
                  <div className="footer__auth-logo">
                    <img src="/assets/logos/generalitat.svg" alt="Generalitat de Catalunya" />
                  </div>
                  <div className="footer__auth-text">
                    <p>Lleida: <a href="#" className="footer__auth-link">25002775</a></p>
                    <p>Tarragona: <a href="#" className="footer__auth-link">43013533</a></p>
                    <p>Barcelona: <a href="#" className="footer__auth-link">08176928</a></p>
                  </div>
                </div>

                <div className="footer__auth-item">
                  <div className="footer__auth-logo">
                    <img src="/assets/logos/junta.svg" alt="Junta de Andalucía" />
                  </div>
                  <div className="footer__auth-text">
                    <p>Sevilla: <a href="#" className="footer__auth-link">41003090</a></p>
                    <p>Córdoba: <a href="#" className="footer__auth-link">14012134</a> / <a href="#" className="footer__auth-link">14013421</a></p>
                    <p>Cádiz: <a href="#" className="footer__auth-link">11013043</a> / <a href="#" className="footer__auth-link">11013421</a></p>
                  </div>
                </div>

                <div className="footer__auth-item">
                  <div className="footer__auth-logo">
                    <img src="/assets/logos/castilla-leon.svg" alt="Junta de Castilla y León" />
                  </div>
                  <div className="footer__auth-text">
                    <p>Valladolid: <a href="#" className="footer__auth-link">47012147</a></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificados */}
            <div className="footer__certificates">
              <h3 className="footer__cert-title">Certificados</h3>
              <div className="footer__cert-logos">
                <div className="footer__cert-logo">
                  <img src="/assets/logos/certificados.svg" alt="Certificados de calidad" />
                </div>
              </div>
            </div>
          </div>

          <div className="footer__divider"></div>

          {/* Parte inferior - Links legales */}
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
      </div>
    </footer>
  );
};

export default Footer;
