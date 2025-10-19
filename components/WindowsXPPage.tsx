

import React from 'react';
import { Minimize, Maximize, X } from 'lucide-react';

interface WindowsXPPageProps {
  title: string;
  children: React.ReactNode;
  windowIcon?: React.ReactNode;
  className?: string;
}

export default function WindowsXPPage({ 
  title, 
  children, 
  windowIcon = "📄", 
  className = "" 
}: WindowsXPPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-green-100 p-4">
      {/* Desktop wallpaper pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M0 0h40v40H0V0zm20 0v20h20V0H20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Main Window Container */}
      <div className={`relative max-w-6xl mx-auto ${className}`}>
        <div 
          className="bg-gradient-to-b from-gray-100 to-gray-200 border-2 border-gray-400 shadow-xl"
          style={{
            boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 4px 4px 8px rgba(0,0,0,0.3)'
          }}
        >
          {/* Window Title Bar */}
          <div 
            className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-2 py-1 flex items-center justify-between border-b-2 border-blue-800"
            style={{
              boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3)'
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="text-sm">{windowIcon}</span>
              <span className="font-bold text-sm">{title}</span>
            </div>
            
            {/* Window Controls */}
            <div className="flex items-center space-x-1">
              <button 
                className="bg-gradient-to-b from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 border border-gray-400 px-2 py-1 text-xs text-gray-800 transition-all duration-200"
                style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}
                title="Minimize"
              >
                <Minimize className="h-3 w-3" />
              </button>
              <button 
                className="bg-gradient-to-b from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 border border-gray-400 px-2 py-1 text-xs text-gray-800 transition-all duration-200"
                style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}
                title="Maximize"
              >
                <Maximize className="h-3 w-3" />
              </button>
              <button 
                className="bg-gradient-to-b from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 border border-red-600 px-2 py-1 text-xs text-white transition-all duration-200"
                style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.3)'}}
                title="Close"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Window Content Area */}
          <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-96">
            {children}
          </div>

          {/* Window Status Bar */}
          <div 
            className="bg-gradient-to-b from-gray-200 to-gray-300 border-t border-gray-400 px-3 py-1 text-xs text-gray-700 flex items-center justify-between"
            style={{
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.7)'
            }}
          >
            <span>Ready</span>
            <div className="flex items-center space-x-4">
              <div 
                className="bg-gray-400 border border-gray-500 px-2 py-1"
                style={{boxShadow: 'inset 1px 1px 1px rgba(0,0,0,0.3)'}}
              >
                <span className="text-xs">LandSlide Studios</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable content components for consistent styling
export const XPHeading = ({ children, level = 1 }: { children: React.ReactNode; level?: 1 | 2 | 3 }) => {
  const sizes = {
    1: 'text-2xl font-bold',
    2: 'text-xl font-semibold', 
    3: 'text-lg font-medium'
  };
  
  const className = `${sizes[level]} text-gray-800 mb-4 pb-2 border-b-2 border-blue-300`;
  
  if (level === 1) {
    return <h1 className={className}>{children}</h1>;
  } else if (level === 2) {
    return <h2 className={className}>{children}</h2>;
  } else {
    return <h3 className={className}>{children}</h3>;
  }
};

export const XPCard = ({ 
  title, 
  children, 
  icon = "📁" 
}: { 
  title: string; 
  children: React.ReactNode; 
  icon?: string;
}) => (
  <div 
    className="bg-gradient-to-b from-white to-gray-100 border-2 border-gray-400 p-4 mb-4"
    style={{
      boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.7), 2px 2px 4px rgba(0,0,0,0.2)'
    }}
  >
    <div className="flex items-center space-x-2 mb-3">
      <span className="text-lg">{icon}</span>
      <h3 className="font-bold text-gray-800">{title}</h3>
    </div>
    <div className="text-gray-700">
      {children}
    </div>
  </div>
);

export const XPButton = ({ 
  children, 
  onClick, 
  variant = 'default',
  className = ""
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
  variant?: 'default' | 'primary' | 'danger';
  className?: string;
}) => {
  const variants = {
    default: 'bg-gradient-to-b from-gray-200 to-gray-300 text-gray-800 border-gray-400 hover:from-gray-300 hover:to-gray-400',
    primary: 'bg-gradient-to-b from-blue-400 to-blue-500 text-white border-blue-600 hover:from-blue-500 hover:to-blue-600',
    danger: 'bg-gradient-to-b from-red-400 to-red-500 text-white border-red-600 hover:from-red-500 hover:to-red-600'
  };

  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 border font-bold text-sm transition-all duration-200 ${variants[variant]} ${className}`}
      style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}
    >
      {children}
    </button>
  );
};

export const XPList = ({ items }: { items: Array<{ title: string; description?: string; icon?: string }> }) => (
  <div className="space-y-2">
    {items.map((item, index) => (
      <div 
        key={index}
        className="flex items-start space-x-3 p-3 bg-white border border-gray-300 hover:bg-blue-50 transition-colors cursor-pointer"
        style={{boxShadow: 'inset 1px 1px 1px rgba(255,255,255,0.7)'}}
      >
        <span className="text-lg">{item.icon || "📄"}</span>
        <div>
          <div className="font-medium text-gray-800">{item.title}</div>
          {item.description && (
            <div className="text-sm text-gray-600">{item.description}</div>
          )}
        </div>
      </div>
    ))}
  </div>
);