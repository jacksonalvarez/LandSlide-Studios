'use client';

import { useEffect, useState } from 'react';

interface FlashlightEffectProps {
  className?: string;
}

export default function FlashlightEffect({ className = "" }: FlashlightEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
          transparent 0%, 
          transparent 5%, 
          rgba(0, 0, 0, 0.1) 10%, 
          rgba(0, 0, 0, 0.4) 20%, 
          rgba(0, 0, 0, 0.7) 30%, 
          rgba(0, 0, 0, 0.85) 40%, 
          rgba(0, 0, 0, 0.95) 60%, 
          black 80%)`
      }}
    >
      {/* Static center darkness for when mouse isn't moving */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, 
            rgba(0, 0, 0, 0) 0%, 
            rgba(0, 0, 0, 0.2) 20%, 
            rgba(0, 0, 0, 0.6) 40%, 
            rgba(0, 0, 0, 0.9) 70%, 
            rgba(0, 0, 0, 1) 90%)`
        }}
      ></div>
      
      {/* Flickering shadow effect */}
      <div 
        className="absolute inset-0 animate-pulse opacity-30"
        style={{
          background: `radial-gradient(circle at center, 
            transparent 0%, 
            transparent 30%, 
            rgba(0, 0, 0, 0.1) 40%, 
            rgba(0, 0, 0, 0.3) 60%, 
            black 90%)`
        }}
      ></div>
    </div>
  );
}