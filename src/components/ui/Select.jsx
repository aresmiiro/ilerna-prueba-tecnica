// src/components/Select.jsx

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Select = ({
  label,
  name,
  placeholder = 'Selecciona una opción',
  options = [],
  value,
  onChange,
  error,
  required = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  const triggerClasses = [
    'select__trigger',
    isOpen && 'select__trigger--open'
  ].filter(Boolean).join(' ');

  const valueClasses = [
    'select__value',
    value && 'select__value--selected'
  ].filter(Boolean).join(' ');

  const iconClasses = [
    'select__icon',
    isOpen && 'select__icon--open'
  ].filter(Boolean).join(' ');

  return (
    <div className={`select ${className}`} ref={selectRef}>
      {label && (
        <label className="select__label">
          {label}
          {required && <span style={{ color: '#dc3545' }}> *</span>}
        </label>
      )}
      
      <div className={triggerClasses} onClick={() => setIsOpen(!isOpen)}>
        <span className={valueClasses}>
          {value || placeholder}
        </span>
        <ChevronDown size={20} className={iconClasses} />
      </div>
      
      {isOpen && (
        <div className="select__dropdown">
          {options.map((option, index) => {
            const isSelected = option === value;
            const optionClasses = [
              'select__option',
              isSelected && 'select__option--selected'
            ].filter(Boolean).join(' ');

            return (
              <div
                key={index}
                className={optionClasses}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
      
      {error && (
        <span className="select__error">{error}</span>
      )}
    </div>
  );
};

export default Select;