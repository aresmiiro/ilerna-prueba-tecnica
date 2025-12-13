import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import './Select.scss';

const Select = ({
  label,
  name,
  placeholder,
  options = [],
  value,
  onChange,
  error,
  helpText,
  required = false,
  disabled = false,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = (option) => {
    onChange({ target: { name, value: option } });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fieldClasses = [
    'select__field',
    error && 'select__field--error'
  ].filter(Boolean).join(' ');

  const dropdownClasses = [
    'select__dropdown',
    isOpen && 'select__dropdown--open'
  ].filter(Boolean).join(' ');

  return (
    <div className={`select ${className}`} ref={selectRef}>
      {label && (
        <label className="select__label">
          {label}
          {required && <span style={{ color: '#dc3545' }}> *</span>}
        </label>
      )}

      <div
        className={fieldClasses}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className={value ? 'select__value select__value--selected' : 'select__value'}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={isOpen ? 'select__icon select__icon--open' : 'select__icon'}
          size={20}
        />
      </div>

      {isOpen && (
        <div className={dropdownClasses}>
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
