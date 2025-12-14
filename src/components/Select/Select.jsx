import React from 'react';
import './Select.scss';

// Componente de icono de doble flecha
const DoubleArrowIcon = () => (
  <svg 
    width="12" 
    height="16" 
    viewBox="0 0 12 16" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className="select__icon"
  >
    {/* Flecha arriba */}
    <path d="M6 4L3 7L9 7L6 4Z" fill="currentColor"/>
    {/* Flecha abajo */}
    <path d="M6 12L9 9L3 9L6 12Z" fill="currentColor"/>
  </svg>
);

const Select = ({
  label,
  name,
  placeholder,
  options = [],
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = ''
}) => {
  const fieldClasses = [
    'select__field',
    error && 'select__field--error'
  ].filter(Boolean).join(' ');

  return (
    <div className={`select ${className}`}>
      {label && (
        <label className="select__label">
          {label}
          {required && <span style={{ color: '#dc3545' }}> *</span>}
        </label>
      )}

      <div className="select__wrapper">
        <select
          name={name}
          className={fieldClasses}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        
        <DoubleArrowIcon />
      </div>

      {error && (
        <span className="select__error">{error}</span>
      )}
    </div>
  );
};

export default Select;