
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

type ButtonProps = HTMLMotionProps<'button'> & {
  variant?: 'primary' | 'gold' | 'outline' | 'ghost';
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
  const baseStyles = "font-sans font-medium rounded-none focus:outline-none transition-all duration-200 ease-in-out inline-flex items-center justify-center tracking-wide uppercase text-xs";

  const sizeStyles = {
    sm: "px-4 py-2",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-sm",
  };

  const variantStyles = {
    primary: `bg-black text-white hover:bg-gray-800 border border-black`,
    gold: `bg-gold text-white hover:bg-gray-800 border border-gold`,
    outline: `border border-black/30 text-black hover:bg-black hover:text-white`,
    ghost: `bg-transparent text-black hover:text-gray-600 underline-offset-4 hover:underline`,
  };
  
  const disabledStyles = "disabled:opacity-50 disabled:cursor-not-allowed";

  const isDisabled = propDisabled || isLoading;

  return (
    <motion.button
      type={type}
      whileHover={{ scale: isDisabled ? 1 : 1.02 }}
      whileTap={{ scale: isDisabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${propClassName}`}
      disabled={isDisabled}
      {...rest}
    >
      {isLoading && (
        <Loader2 className="animate-spin -ml-1 mr-3 h-4 w-4" strokeWidth={2} />
      )}
      {children}
    </motion.button>
  );
};

export default Button;