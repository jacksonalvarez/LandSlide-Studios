'use client';

import { useEffect, useRef, useState } from 'react';

interface VideoCanvasProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function PlaceholderVideoCanvas({ 
  width = 1920, 
  height = 1080, 
  className = "w-full h-full object-cover"
}: VideoCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    let frame = 0;
    const particles: Array<{x: number, y: number, vx: number, vy: number, size: number, color: string}> = [];

    // Create eerie particles
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 2 + 0.5,
        color: `hsl(${Math.random() * 30}, ${70 + Math.random() * 30}%, ${30 + Math.random() * 40}%)` // Reds and oranges
      });
    }

    const animate = () => {
      if (!isAnimating) return;

      ctx.fillStyle = 'rgba(30, 58, 138, 0.1)';
      ctx.fillRect(0, 0, width, height);

      // Create horror gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)'); // black
      gradient.addColorStop(0.3, 'rgba(127, 29, 29, 0.8)'); // red-800
      gradient.addColorStop(0.7, 'rgba(87, 13, 13, 0.9)'); // red-900
      gradient.addColorStop(1, 'rgba(0, 0, 0, 1)'); // black
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Animate particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add eerie floating shapes
      const time = frame * 0.008;
      
      // Floating red orbs
      for (let i = 0; i < 5; i++) {
        const angle = time + (i * Math.PI * 2 / 5);
        const x = width/2 + Math.cos(angle) * (150 + i * 30);
        const y = height/2 + Math.sin(angle * 0.7) * (80 + i * 20);
        
        ctx.beginPath();
        const alpha = 0.2 + Math.sin(time * 2 + i) * 0.15;
        ctx.fillStyle = `rgba(220, 38, 127, ${alpha})`;
        ctx.arc(x, y, 8 + Math.sin(time + i) * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Flickering shadows
      for (let i = 0; i < 8; i++) {
        const angle = time * 0.5 + (i * Math.PI * 2 / 8);
        const distance = 300 + Math.sin(time + i) * 50;
        const x = width/2 + Math.cos(angle) * distance;
        const y = height/2 + Math.sin(angle) * distance;
        
        ctx.beginPath();
        ctx.fillStyle = `rgba(0, 0, 0, ${0.1 + Math.sin(time * 3 + i) * 0.05})`;
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      frame++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [width, height, isAnimating]);

  useEffect(() => {
    return () => {
      setIsAnimating(false);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #6b21a8 100%)'
      }}
    />
  );
}