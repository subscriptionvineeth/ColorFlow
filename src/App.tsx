import React, { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { ColorPalette } from './components/ColorPalette';
import { Preview } from './components/Preview';
import { Footer } from './components/Footer';
import { useColorStore } from './store/colorStore';

function App() {
  const { colors } = useColorStore();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden noise-texture"
         style={{
           backgroundColor: colors.background,
           color: colors.text,
           transition: 'background-color 0.5s ease, color 0.5s ease'
         }}>
      {/* Dynamic background elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Large primary gradient */}
        <div 
          className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.primary}80 0%, transparent 70%)`,
            animationDuration: '15s',
          }}
        ></div>
        
        {/* Secondary gradient */}
        <div 
          className="absolute bottom-0 left-0 w-2/3 h-2/3 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}80 0%, transparent 70%)`,
            animationDuration: '20s',
            animationDelay: '2s'
          }}
        ></div>
        
        {/* Accent gradient that follows mouse */}
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(circle, ${colors.accent}90 0%, transparent 70%)`,
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        ></div>
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(${colors.text} 1px, transparent 1px), linear-gradient(90deg, ${colors.text} 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full animate-float opacity-30"
              style={{
                backgroundColor: i % 3 === 0 ? colors.primary : i % 3 === 1 ? colors.secondary : colors.accent,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                filter: 'blur(1px)',
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Noise texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: 'url("/assets/noise.png")',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      <Navbar />
      <main className="flex-grow relative">
        <Preview />
      </main>
      <Footer />
      <ColorPalette />
    </div>
  );
}

export default App;