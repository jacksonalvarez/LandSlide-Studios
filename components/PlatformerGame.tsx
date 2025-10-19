'use client';

import { useRef, useEffect, useState } from 'react';

interface GameSection {
  x: number;
  width: number;
  title: string;
  description: string;
  background: string;
}

export default function PlatformerGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentSection, setCurrentSection] = useState(0);

  // Game world sections
  const sections: GameSection[] = [
    {
      x: 0,
      width: 1200,
      title: "Welcome to LandSlide Studios",
      description: "Jump around to explore our game development world!",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      x: 1200,
      width: 1400,
      title: "Our Game Development Services",
      description: "Discover what we can build for you!",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      x: 2600,
      width: 1400,
      title: "Meet Our Leadership Team",
      description: "The masterminds behind LandSlide Studios",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      x: 4000,
      width: 1200,
      title: "Join LandSlide Studios",
      description: "Ready to build amazing games with us?",
      background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple animated background
    let animationFrame = 0;
    
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw current section background
      const currentSectionData = sections[currentSection];
      if (currentSectionData) {
        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        
        // Parse gradient colors from CSS
        if (currentSectionData.background.includes('#667eea')) {
          gradient.addColorStop(0, '#667eea');
          gradient.addColorStop(1, '#764ba2');
        } else if (currentSectionData.background.includes('#f093fb')) {
          gradient.addColorStop(0, '#f093fb');
          gradient.addColorStop(1, '#f5576c');
        } else if (currentSectionData.background.includes('#4facfe')) {
          gradient.addColorStop(0, '#4facfe');
          gradient.addColorStop(1, '#00f2fe');
        } else {
          gradient.addColorStop(0, '#fa709a');
          gradient.addColorStop(1, '#fee140');
        }

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw animated particles
      for (let i = 0; i < 20; i++) {
        const x = (animationFrame * 2 + i * 50) % (canvas.width + 50) - 25;
        const y = 100 + Math.sin((animationFrame + i * 20) * 0.02) * 50;
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Simple navigation text
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Interactive Demo Coming Soon!', canvas.width / 2, canvas.height / 2);

      ctx.font = '16px Arial';
      ctx.fillText('Click to cycle through sections', canvas.width / 2, canvas.height / 2 + 40);

      animationFrame++;
      requestAnimationFrame(animate);
    };

    animate();
  }, [currentSection]);

  const handleCanvasClick = () => {
    setCurrentSection((prev) => (prev + 1) % sections.length);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-hidden">
      {/* Game Canvas */}
      <canvas
        ref={canvasRef}
        width={1200}
        height={600}
        className="absolute inset-0 w-full h-full cursor-pointer"
        onClick={handleCanvasClick}
        style={{ imageRendering: 'pixelated' }}
      />
      
      {/* UI Overlay */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/70 to-transparent text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{sections[currentSection]?.title}</h1>
          <p className="text-lg opacity-90">{sections[currentSection]?.description}</p>
        </div>
      </div>

      {/* Navigation indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-white shadow-lg' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section navigation */}
      <div className="absolute bottom-6 right-6 text-white">
        <p className="text-sm opacity-75">
          Section {currentSection + 1} of {sections.length}
        </p>
      </div>
    </div>
  );
}
