// src/components/Landing.jsx

import React, { useState } from 'react';
import FormCard from '../layout/forms/FormCard';
import Modal from '../ui/modal/Modal';

const Landing = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <>
      <div className="hero">

        
        <div className="hero__container">
          <p className="hero__breadcrumb">
            ILERNA / FP Madrid
          </p>
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
                onClick={() => setShowModal(true)}
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
            
            {/* Formulario: 5 columnas */}
            <div className="hero__form-wrapper">
              <FormCard onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="modal__title">
          Bases legales de la promoción "Referidos" iLERNA Online
        </h2>
        <div className="modal__body">
          <p>
            <strong>PRIMERA.</strong> Organizador
          </p>
          <p>
            iLERNA ONLINE, S.L. (en adelante, "iLERNA ONLINE")<br />
            CIF: B-25174770<br />
            Domicilio social: Turú de Gardeny, Complex Maguel-Mitgla, Edific 5, 25003, Lleida<br />
            Correo electrónico: online@ilerna.com
          </p>
          
          <p>
            <strong>SEGUNDA.</strong> Objeto de la promoción
          </p>
          <p>
            iLERNA Online lanza una promoción bajo el nombre de "Referidos", a través de la 
            cual pretende premiar la recomendación entre personas con ventajas económicas 
            en el importe de la matrícula.
          </p>
          
          <p className="modal__footer">
            ¿Tienes alguna duda? Llámanos al <strong>900 730 222</strong>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Landing;