
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
};

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className: propClassName = '',
  isLoading = false,
  disabled: propDisabled,
  type = "button",
  ...rest
}: ButtonProps) => {
  const baseStyles = "font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-150 ease-in-out inline-flex items-center justify-center shadow-sm";

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantStyles = {
    primary: `bg-black text-white hover:bg-gray-800 focus:ring-gray-500 border border-transparent`,
    secondary: `bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 border border-transparent`,
    outline: `border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 focus:ring-gray-400`,
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
        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" strokeWidth={2} />
      )}
      {children}
    </motion.button>
  );
};

export default Button;