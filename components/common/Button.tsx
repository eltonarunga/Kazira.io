
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className: propClassName = '',
  isLoading = false,
  disabled: propDisabled,
  type = "button",
  ...rest
}) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out inline-flex items-center justify-center shadow-sm";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: `bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500 border border-transparent`,
    secondary: `bg-slate-800 text-white hover:bg-slate-700 focus:ring-slate-600 border border-transparent`,
    outline: `border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 focus:ring-slate-400`,
  };
  
  const disabledStyles = "disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none";

  const isDisabled = propDisabled || isLoading;

  return (
    <motion.button
      type={type}
      whileHover={{ scale: isDisabled ? 1 : 1.03, y: isDisabled ? 0: -2 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98, y: isDisabled ? 0: 0 }}
      transition={{ duration: 0.1 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${propClassName}`}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;