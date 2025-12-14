import React, { useState } from 'react';
import Hero from '../../modules/Hero/Hero';
import Modal from '../../blocks/Modal/Modal';
import './Home.scss';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <>
      <Hero onSubmit={handleFormSubmit} onShowModal={() => setShowModal(true)} />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="modal__header">
          <h2 className="modal__title">
            Bases legales de la promoción "Referidos" iLERNA Online
          </h2>
        </div>
        <div className="modal__body">
          <div className="modal__section">
            <p className="modal__section-title">
              <strong>PRIMERA.</strong>- Organizador
            </p>
            <p>
              ILERNA ONLINE, S.L. (en adelante, “ILERNA ONLINE”)
            </p>
            <p>CIF: B – 25774720</p>
            <p>
              Domicilio social: Turó de Gardeny. Complex Magical Media, Edifici 5, 25003, Lleida.
            </p>
            <p>
              Correo electrónico de contacto: online@ilerna.com
            </p>
            <p className="modal__section-title">
              <strong>SEGUNDA.</strong>- Objeto de la promoción
            </p>
            <p>
              ILERNA Online lanza una promoción bajo el nombre de “Referidos”, a través de la cual premiará con un descuento directo de 80 euros en la matrícula a cualquier alumno que invite (y en consecuencia se matricule) a un amigo a ILERNA. Ambas personas recibirán un bono de 80 euros si es en modalidad online, de 100 euros en modalidad online con apoyo presencial y 150 euros en modalidad presencial. Este sólo se podrá utilizar una vez y NO es acumulable a otras ofertas. Tendrá una validez de un año desde la fecha de finalización del ciclo formativo.
            </p>
            <p className="modal__section-title">
              <strong>TERCERA.</strong>- Requisitos de participación
            </p>
            <p>
              Participan en la promoción de “Referidos” todas aquellas personas mayores de 18 años, provistas de DNI, NIE o Pasaporte válido y en vigor, no incapacitadas judicialmente, siempre que se matriculen de un ciclo de Formación Profesional que ofrece ILERNA y cumplan con los requisitos establecidos en las presentes Bases Legales.
            </p>
            <p>
              Pueden beneficiarse de esta promoción los alumnos de Formación Profesional que estén cursando un ciclo en ILERNA en modalidad presencial, online y online con apoyo presencial y los nuevos alumnos que se matriculen en un ciclo de Formación Profesional en modalidad presencial, online y online con apoyo presencial por su recomendación.
            </p>
            <p>
              El alumno se beneficiará de esta promoción a título individual y supondrá la aceptación íntegra de las presentes Bases Legales.
            </p>
            <p className="modal__section-title">
              <strong>CUARTA.</strong>- Mecánica de participación. Plazo
            </p>
            <p>
              Todas aquellas personas que cumplan con los requisitos de participación y que se matriculen de un ciclo de Formación Profesional en modalidad presencial, online y online con apoyo presencial que ofrece ILERNA durante el periodo de matriculación. Siempre y cuando traigan a un referido que se matricule por primera vez en uno de los ciclos de formación profesional en cualquier modalidad de ILERNA.
            </p>
            <p>
              A todas aquellas personas que se matriculen por primera vez en un ciclo de formación profesional y que lo hagan por recomendación de un alumno o exalumno de ILERNA.
            </p>
            <p className="modal__section-title">
              <strong>QUINTA.</strong>- Descuento
            </p>
            <p>
              Se aplicará un descuento a todas aquellas personas que se matriculen del pack semestral o anual en ILERNA durante el periodo de matrícula anteriormente mencionado.
            </p>
            <p>
              Los descuentos son: 
            </p>
            <p>
              80 euros por la matrícula del referido en modalidad online.
            </p>
            <p>
              100 euros por la matrícula del referido en modalidad online con apoyo presencial. 
            </p>
            <p>
              150 euros por la matrícula del referido en modalidad presencial. 
            </p>
            <p>
              El descuento se aplicará de forma automática sobre el importe total de la primera matrícula que realice en un ciclo de ILERNA.
            </p>
            <p>
              El descuento será nominativo, no pudiendo ser transferido a otra persona.
            </p>
            <p>
              Los nuevos alumnos que realicen la matrícula por recomendación de un alumno o antiguo alumno de ILERNA disfrutarán de un descuento en la matrícula.
            </p>
            <p>
              Estas promociones no serán acumulables en ningún caso, salvo que se indique lo contrario en las bases legales correspondientes.
            </p>
            <p>
              Quedarán excluidas de esta promoción aquellas personas que hayan solicitado información a ILERNA en los seis meses previos al inicio de la misma y, en consecuencia, hayan pasado a ser consideradas como 'lead' por ILERNA.
            </p>
            <p className="modal__section-title">
              <strong>SEXTA.</strong>- Protección de datos de carácter personal
            </p>
            <p>
              De conformidad con la normativa vigente sobre protección de datos personales, el tratamiento de los datos personales que nos hayas proporcionado para beneficiarte de la promoción, se regirá por lo dispuesto a continuación:
            </p>
            <p>
              <strong>Responsable del tratamiento:</strong>
            </p>
            <p>
              <strong>Identidad:</strong> Ilerna Online S.L. (B25774720).
            </p>
            <p>
              <strong>Domicilio:</strong> Turó de Gardeny. Complex Magical Media, Edifici 5 25003, Lleida.
            </p>
            <p>
              <strong>Contacto:</strong> online@ilerna.com
            </p>
            <p>
              <strong>Categorías de datos que se van a tratar:</strong>
            </p>
            <p>
              Datos identificativos, de contacto y bancarios de los participantes que realicen una matrícula que cumplan con los requisitos establecidos en las presentes Bases Legales.
            </p>
            <p>
              <strong>Finalidades del tratamiento:</strong>
            </p>
            <p>
              Gestionar la participación en la promoción.
            </p>
            <p>
              Enviar comunicaciones comerciales periódicamente por medios electrónicos, para informar de las actividades, contenidos y servicios de ILERNA ONLINE solamente en el caso de que nos haya dado su consentimiento expreso para ello.
            </p>
            <p>
              <strong>Destinatarios y transferencias internacionales:</strong>
            </p>
            <p>
              ILERNA ONLINE no comunicará los datos personales tratados a ningún tercero, excepto que sea imprescindible para el correcto funcionamiento de la promoción, o por solicitud administrativa y/o judicial. Tampoco se realizarán transferencias internacionales de datos a terceros países.
            </p>
            <p>
              <strong>Derechos de los interesados:</strong>
            </p>
            <p>
              La legislación reconoce una serie de derechos en relación con el tratamiento de sus datos personales. Así, podrá acceder, rectificar, suprimir, limitar u oponerse al tratamiento de sus datos, solicitar la portabilidad y retirar el consentimiento prestado en cualquier momento mediante correo electrónico dirigido a online@ilerna.com o mediante correo postal a Turó de Gardeny. Complex Magical Media, Edifici 5, 25003, Lleida, indicando “Datos Personales Promoción El Doblete” en el “Asunto”. En cualquier caso, también podrá dirigirse a la AEPD en www.aepd.es/es.
            </p>
            <p className="modal__section-title">
              <strong>SÉPTIMA.</strong>- Contacto
            </p>
            <p>
              Los alumnos que se beneficien de esta promoción podrán contactar con ILERNA ONLINE para cualquier cuestión relacionada con la promoción a través del correo electrónico online@ilerna.com.
            </p>
            <p className="modal__section-title">
              <strong>OCTAVA.</strong>- Aceptación de las bases
            </p>
            <p>
              Las bases de la promoción estarán a disposición de cualquier interesado en las oficinas de ILERNA ONLINE y a través de la página web www.ilerna.es. Todos los beneficiados de esta promoción aceptan las bases de esta promoción, las normas que rigen su participación y los términos, condiciones y la política de privacidad y protección de datos expuestos en la página web de ILERNA ONLINE.
            </p>
            <p className="modal__section-title">
              <strong>NOVENA.</strong>- Ley aplicable y fuero
            </p>
            <p>
              La interpretación y aplicación de las presentes Bases Legales se realizará con arreglo a la legislación española vigente. Cualquier conflicto que se suscite en aplicación de las presentes Bases Legales y/o con ocasión de la promoción se resolverán por los Juzgados y Tribunales que por ley pudiera corresponder al consumidor.
            </p>
            <p>
              En Lleida, 7 de mayo de 2025.
            </p>
          </div>
        </div>
        <div className="modal__footer">
          <p>
            ¿Tienes alguna duda? Llámanos sin compromiso al{' '}
            <strong>
              <a href="tel:900730222">900 730 222</a>
            </strong>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Home;