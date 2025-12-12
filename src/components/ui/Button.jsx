// src/components/Button.jsx

import React from 'react';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  className = ''
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    size === 'small' && 'btn--small',
    size === 'large' && 'btn--large',
    fullWidth && 'btn--full-width',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;