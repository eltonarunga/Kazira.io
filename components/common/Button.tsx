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
  className: propClassName = '', // Use propClassName to avoid conflict if className was a local variable
  isLoading = false,
  disabled: propDisabled, // Destructure disabled from props
  type = "button", // Default button type
  ...rest // Collect remaining props
}) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out inline-flex items-center justify-center";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: `bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-500`,
    secondary: `bg-gray-600 text-white hover:bg-gray-500 focus:ring-gray-400`,
    outline: `border border-gray-800 text-gray-800 hover:bg-gray-100 focus:ring-gray-500`,
  };
  
  const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed";

  const isDisabled = propDisabled || isLoading;

  return (
    <motion.button
      type={type}
      whileHover={{ scale: isDisabled ? 1 : 1.05 }}
      whileTap={{ scale: isDisabled ? 1 : 0.95 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${propClassName}`}
      disabled={isDisabled}
      {...rest} // Spread the rest of the props. `disabled` and `className` are handled above.
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </motion.button>
  );
};

export default Button;
