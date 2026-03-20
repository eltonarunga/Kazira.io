
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title?: string;
  description?: string;
  image?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ title, description, image, children, className = '', onClick }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={`bg-gray-50 border border-gray-200 flex flex-col h-full hover:border-gold/50 transition-colors duration-300 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {image}
      <div className="p-8 flex flex-col flex-grow">
        {title && <h3 className="text-2xl font-serif mb-4 text-black">{title}</h3>}
        {description && <p className="text-black/50 font-light leading-relaxed mb-8 flex-grow">{description}</p>}
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;