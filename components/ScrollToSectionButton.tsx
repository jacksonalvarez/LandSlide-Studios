'use client';

export default function ScrollToSectionButton() {
  return (
    <button 
      onClick={() => {
        document.getElementById('interactive-section')?.scrollIntoView({ 
          behavior: 'smooth' 
        });
      }}
      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
    >
      Explore Interactive Demo
    </button>
  );
}