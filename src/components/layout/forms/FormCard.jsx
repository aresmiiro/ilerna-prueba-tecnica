// src/components/FormCard.jsx

import React, { useState } from 'react';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import Button from '../../ui/Button';

const FormCard = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    codigoPostal: '',
    ciudad: '',
    ciclo: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'Campo requerido';
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = 'Campo requerido';
    }
    if (!formData.codigoPostal.trim()) {
      newErrors.codigoPostal = 'Campo requerido';
    }
    if (!formData.ciudad) {
      newErrors.ciudad = 'Campo requerido';
    }
    if (!formData.ciclo) {
      newErrors.ciclo = 'Campo requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onSubmit && onSubmit(formData);
      alert('¡Formulario enviado con éxito!');
      
      // Resetear formulario
      setFormData({
        nombre: '',
        telefono: '',
        codigoPostal: '',
        ciudad: '',
        ciclo: ''
      });
    }
  };

  const ciudades = [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Sevilla',
    'Zaragoza',
    'Málaga',
    'Murcia',
    'Palma'
  ];

  const ciclos = [
    'Administración y Gestión',
    'Comercio y Marketing',
    'Informática y Comunicaciones',
    'Sanidad',
    'Servicios Socioculturales'
  ];

  return (
    <div className="form-card">
      <div className="form-card__decoration" />
      
      <div className="form-card__container">
        <h2 className="form-card__title">Solicita información</h2>
        
        <div className="form-card__fields">
          <Input
            name="nombre"
            placeholder="Nombre y apellidos"
            value={formData.nombre}
            onChange={handleChange}
            error={errors.nombre}
            required
          />
          
          <Input
            name="telefono"
            type="tel"
            placeholder="Teléfono"
            value={formData.telefono}
            onChange={handleChange}
            error={errors.telefono}
            required
          />
          
          <Input
            name="codigoPostal"
            placeholder="Código Postal"
            value={formData.codigoPostal}
            onChange={handleChange}
            error={errors.codigoPostal}
            required
          />
          
          <Select
            name="ciudad"
            placeholder="Dónde quieres estudiar"
            options={ciudades}
            value={formData.ciudad}
            onChange={handleChange}
            error={errors.ciudad}
            required
          />
          
          <Select
            name="ciclo"
            placeholder="¿Qué ciclo te interesa?"
            options={ciclos}
            value={formData.ciclo}
            onChange={handleChange}
            error={errors.ciclo}
            required
          />
          
          <div className="form-card__legal">
            <p>
              <strong>ILERNA Online SL.</strong> tratará tus datos personales conforme a tu 
              solicitud para contactar e informarle del programa, curso.
            </p>
          </div>
        </div>
        
        <Button fullWidth onClick={handleSubmit}>
          Solicitar información
        </Button>
      </div>
    </div>
  );
};

export default FormCard;