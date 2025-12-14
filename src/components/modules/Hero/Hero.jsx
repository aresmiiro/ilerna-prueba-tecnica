import React from 'react';
import FormCard from '../../blocks/FormCard/FormCard';
import './Hero.scss';

const Hero = ({ onSubmit, onShowModal }) => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div>
          <img className="hero__logo" src="/assets/images/logo-ilerna.svg" alt="iLERNA" loading='lazy' />
        </div>
        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              ¡La amistad tiene premio, estudia una <span className="hero__title-decoration">FP oficial</span> en iLERNA!
            </h1>

            <p className="hero__description">
              Escoge la <strong>modalidad de FP</strong> que más se adapte a ti:{' '}
              <strong>online, presencial u online con apoyo presencial.</strong>
            </p>

            <p className="hero__description">
              ¡Tu amigo te ha recomendado! Rellena el siguiente formulario y, una vez
              formalizada tu matrícula, ambos recibiréis un <strong>bono de 80 euros
              para la modalidad online, de 100 euros en modalidad online con apoyo
              presencial y de 150 euros en modalidad presencial.</strong>
            </p>

            <button
              className="hero__conditions-link"
              onClick={onShowModal}
            >
              Condiciones de la promoción
            </button>

            <div className="hero__arrow">
              <img
                src="/assets/images/arrow-deco.svg"
                alt="Decorative arrow"
                loading="lazy"
              />
            </div>
          </div>

          <div className="hero__form-wrapper">
            <FormCard onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

