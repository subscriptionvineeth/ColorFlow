import React, { useState } from 'react';
import { Undo2, Redo2, Download, Sun, Moon, Shuffle, Copy, Check } from 'lucide-react';
import { useColorStore } from '../store/colorStore';

const ColorPalette: React.FC = () => {
  const { colors, setColor, toggleDarkMode, randomizeColors, undo, redo } = useColorStore();
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Export Styles</h3>
              <button
                onClick={() => setShowExport(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">CSS Variables</h4>
                  <button
                    onClick={() => handleCopy('css')}
                    className="flex items-center gap-2 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                  >
                    {copied === 'css' ? <Check size={16} /> : <Copy size={16} />}
                    {copied === 'css' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                  {cssVariables}
                </pre>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold">Tailwind Config</h4>
                  <button
                    onClick={() => handleCopy('tailwind')}
                    className="flex items-center gap-2 px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
                  >
                    {copied === 'tailwind' ? <Check size={16} /> : <Copy size={16} />}
                    {copied === 'tailwind' ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                  {tailwindConfig}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-[50]">
        <div className="max-w-7xl mx-auto flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Text</label>
            <input
              type="color"
              value={colors.text}
              onChange={(e) => setColor('text', e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Background</label>
            <input
              type="color"
              value={colors.background}
              onChange={(e) => setColor('background', e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Primary</label>
            <input
              type="color"
              value={colors.primary}
              onChange={(e) => setColor('primary', e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Secondary</label>
            <input
              type="color"
              value={colors.secondary}
              onChange={(e) => setColor('secondary', e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">Accent</label>
            <input
              type="color"
              value={colors.accent}
              onChange={(e) => setColor('accent', e.target.value)}
              className="w-8 h-8 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-100"
              title="Toggle Dark Mode"
            >
              {colors.isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={randomizeColors}
              className="p-2 rounded hover:bg-gray-100"
              title="Randomize Colors"
            >
              <Shuffle size={20} />
            </button>

            <button
              onClick={undo}
              className="p-2 rounded hover:bg-gray-100"
              title="Undo"
            >
              <Undo2 size={20} />
            </button>

            <button
              onClick={redo}
              className="p-2 rounded hover:bg-gray-100"
              title="Redo"
            >
              <Redo2 size={20} />
            </button>

            <button
              onClick={() => setShowExport(true)}
              className="p-2 rounded hover:bg-gray-100"
              title="Download Styles"
            >
              <Download size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { ColorPalette }