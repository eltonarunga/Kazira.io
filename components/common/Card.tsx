
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
      className={`bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {image}
      <div className="p-6 flex flex-col flex-grow">
        {title && <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>}
        {description && <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>}
        <div className="mt-auto">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;