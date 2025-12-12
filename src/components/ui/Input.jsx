// src/components/Input.jsx

import React from 'react';

const Input = ({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  helpText,
  required = false,
  disabled = false,
  className = ''
}) => {
  const inputClasses = [
    'input__field',
    error && 'input__field--error'
  ].filter(Boolean).join(' ');

  return (
    <div className={`input ${className}`}>
      {label && (
        <label htmlFor={name} className="input__label">
          {label}
          {required && <span style={{ color: '#dc3545' }}> *</span>}
        </label>
      )}
      
      <input
        id={name}
        name={name}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
      />
      
      {error && (
        <span className="input__error">{error}</span>
      )}
      
      {helpText && !error && (
        <span className="input__help">{helpText}</span>
      )}
    </div>
  );
};

export default Input;