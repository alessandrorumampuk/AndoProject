import type { ReactNode } from 'react';

interface LogoProps {
  children: ReactNode;
  className?: string;
}

const Logo = ({ children, className = '' }: LogoProps) => {
  return (
    <div className={`
      w-24 h-24 rounded-full 
      bg-white shadow-md 
      flex items-center justify-center
      p-4
      transition-transform duration-300
      hover:scale-105
      ${className}
    `}>
      <div className="flex items-center justify-center w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default Logo;
