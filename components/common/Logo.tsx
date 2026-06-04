import React from 'react';

interface LogoProps {
  className?: string;
  height?: number | string;
}

const Logo: React.FC<LogoProps> = ({ className = 'text-black', height = 24 }) => {
  return (
    <svg
      viewBox="0 0 190 40"
      height={height}
      className={`fill-none select-none transition-colors duration-200 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Kazira Logo"
    >
      {/* K */}
      <path
        d="M 5,0 L 5,40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M 23,0 L 6,18 L 23,40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A (Futuristic No-Crossbar Chevron) */}
      <path
        d="M 35,40 L 48,0 L 61,40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Z */}
      <path
        d="M 73,0 L 95,0 L 73,40 L 95,40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* I */}
      <path
        d="M 109,0 L 109,40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* R */}
      <path
        d="M 122,40 L 122,0 H 136 C 142,0 144,5 144,10 C 144,15 142,20 136,20 H 122 M 134,20 L 144,40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* A (Futuristic No-Crossbar Chevron) */}
      <path
        d="M 156,40 L 169,0 L 182,40"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;
