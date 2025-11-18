
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

const Card: React.FC<CardProps> = ({ title, description, image, children, className = '', onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className={`bg-white shadow-lg rounded-lg overflow-hidden border border-slate-200/80 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      {image}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold text-slate-800 mb-2">{title}</h3>}
        {description && <p className="text-slate-600 text-sm mb-4">{description}</p>}
        {children}
      </div>
    </motion.div>
  );
};

export default Card;