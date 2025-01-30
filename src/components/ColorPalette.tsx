import React, { useState } from 'react';
import { Undo2, Redo2, Download, Shuffle, Copy, Check } from 'lucide-react';
import { useColorStore } from '../store/colorStore';

const ColorPalette: React.FC = () => {
  const { colors, setColor, randomizeColors, undo, redo } = useColorStore();
  const [showExport, setShowExport] = useState(false);
  const [copied, setCopied] = useState<'css' | 'tailwind' | null>(null);

  const cssVariables = `
:root {
  --text-color: ${colors.text};
  --background-color: ${colors.background};
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
}`;

  const tailwindConfig = `
module.exports = {
  theme: {
    extend: {
      colors: {
        text: '${colors.text}',
        background: '${colors.background}',
        primary: '${colors.primary}',
        secondary: '${colors.secondary}',
        accent: '${colors.accent}',
      },
    },
  },
}`;

  const handleCopy = async (type: 'css' | 'tailwind') => {
    const content = type === 'css' ? cssVariables : tailwindConfig;
    await navigator.clipboard.writeText(content);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <>
      {showExport && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-8 w-full max-w-2xl shadow-2xl border border-white/20">
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  style={{ '--tw-gradient-from': colors.primary, '--tw-gradient-to': colors.secondary } as any}>
                Export Your Colors
              </h3>
              <button
                onClick={() => setShowExport(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                style={{ color: colors.primary }}
              >
                ×
              </button>
            </div>

            {/* CSS Variables */}
            <div className="mb-6 md:mb-8">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold" style={{ color: colors.secondary }}>CSS Variables</h4>
                <button
                  onClick={() => handleCopy('css')}
                  className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: `${colors.primary}15`,
                    color: colors.primary
                  }}
                >
                  {copied === 'css' ? <Check size={14} className="md:w-4 md:h-4" /> : <Copy size={14} className="md:w-4 md:h-4" />}
                  {copied === 'css' ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <pre className="bg-black/5 backdrop-blur-sm p-4 md:p-6 rounded-xl overflow-x-auto text-xs md:text-sm font-mono"
                   style={{ color: colors.text }}>
                {cssVariables.trim()}
              </pre>
            </div>

            {/* Tailwind Config */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-semibold" style={{ color: colors.secondary }}>Tailwind Config</h4>
                <button
                  onClick={() => handleCopy('tailwind')}
                  className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: `${colors.primary}15`,
                    color: colors.primary
                  }}
                >
                  {copied === 'tailwind' ? <Check size={14} className="md:w-4 md:h-4" /> : <Copy size={14} className="md:w-4 md:h-4" />}
                  {copied === 'tailwind' ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <pre className="bg-black/5 backdrop-blur-sm p-4 md:p-6 rounded-xl overflow-x-auto text-xs md:text-sm font-mono"
                   style={{ color: colors.text }}>
                {tailwindConfig.trim()}
              </pre>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-grey/90 shadow-2xl z-50 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8">
            {/* Color Controls */}
            <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 justify-center md:justify-start">
              {Object.entries(colors).filter(([key]) => key !== 'isDarkMode').map(([key, value]) => (
                <div key={key} className="relative group">
                  <div className="w-[calc(50vw-3rem)] md:w-32 h-12 rounded-lg" style={{ backgroundColor: value }}>
                    <input
                      type="color"
                      value={value}
                      onChange={(e) => setColor(key as keyof typeof colors, e.target.value)}
                      className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-xs md:text-sm font-medium capitalize pointer-events-none"
                          style={{ color: key === 'background' ? '#000' : '#fff' }}>
                      {key}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 md:gap-4 justify-center md:justify-end">
              <div className="flex gap-1 md:gap-2">
                <button
                  onClick={undo}
                  className="p-2 md:p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Undo2 size={18} className="md:w-5 md:h-5" style={{ color: colors.primary }} />
                </button>
                <button
                  onClick={redo}
                  className="p-2 md:p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                  style={{ backgroundColor: `${colors.primary}10` }}
                >
                  <Redo2 size={18} className="md:w-5 md:h-5" style={{ color: colors.primary }} />
                </button>
              </div>

              <button
                onClick={randomizeColors}
                className="p-2 md:p-3 rounded-xl transition-all duration-300 hover:scale-105 group"
                style={{ backgroundColor: `${colors.secondary}10` }}
              >
                <Shuffle size={18} className="md:w-5 md:h-5" style={{ color: colors.secondary }} />
              </button>

              <button
                onClick={() => setShowExport(true)}
                className="flex items-center gap-1 md:gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium transition-all duration-300 hover:scale-105"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  color: '#fff'
                }}
              >
                <Download size={18} className="md:w-5 md:h-5" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ColorPalette }