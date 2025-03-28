import React, { useState } from 'react';
import { Undo2, Redo2, Download, Shuffle, Copy, Check, Droplets, Palette, EyeIcon, Sparkles, ChevronDown, Sliders, BookOpen, Wand2, ArrowRight, Crown, Moon, Sun, ArrowUp, RefreshCw } from 'lucide-react';
import { useColorStore } from '../store/colorStore';

// Color recommendations based on common color combinations
const colorRecommendations = [
  {
    name: 'Ocean Blue',
    colors: {
      primary: '#0077b6',
      secondary: '#00b4d8',
      accent: '#90e0ef',
      text: '#1a1a1a',
      background: '#ffffff'
    }
  },
  {
    name: 'Forest Green',
    colors: {
      primary: '#2d6a4f',
      secondary: '#40916c',
      accent: '#95d5b2',
      text: '#1a1a1a',
      background: '#ffffff'
    }
  },
  {
    name: 'Vibrant Coral',
    colors: {
      primary: '#ff5a5f',
      secondary: '#ff8a8a',
      accent: '#ffb3a7',
      text: '#1a1a1a',
      background: '#ffffff'
    }
  },
  {
    name: 'Dark Mode',
    colors: {
      primary: '#7b2cbf',
      secondary: '#9d4edd',
      accent: '#c77dff',
      text: '#ffffff',
      background: '#1a1a1a',
      isDarkMode: true
    }
  },
  {
    name: 'Sunset Orange',
    colors: {
      primary: '#e85d04',
      secondary: '#f48c06',
      accent: '#faa307',
      text: '#1a1a1a',
      background: '#ffffff'
    }
  },
  {
    name: 'Warm Neutrals',
    colors: {
      primary: '#a98467',
      secondary: '#d5bdaf',
      accent: '#e6ccb2',
      text: '#1a1a1a',
      background: '#fefae0'
    }
  },
  {
    name: 'Elegant Purple',
    colors: {
      primary: '#8338ec',
      secondary: '#c19ee0',
      accent: '#f072b6',
      text: '#1a1a1a',
      background: '#ffffff'
    }
  },
  {
    name: 'Midnight',
    colors: {
      primary: '#364fc7',
      secondary: '#5a78f5',
      accent: '#8ba8ff',
      text: '#ffffff',
      background: '#0f172a',
      isDarkMode: true
    }
  }
];

const ColorPalette: React.FC = () => {
  const { colors, setColor, randomizeColors, generateHarmony, ensureAccessibility, undo, redo } = useColorStore();
  const [showExport, setShowExport] = useState(false);
  const [copied, setCopied] = useState<'css' | 'tailwind' | 'scss' | 'json' | null>(null);
  const [exportFormat, setExportFormat] = useState<'css' | 'tailwind' | 'scss' | 'json'>('css');
  const [showHarmonyMenu, setShowHarmonyMenu] = useState(false);
  const [showSchemeMenu, setShowSchemeMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const cssVariables = `
:root {
  /* Base Colors */
  --text-color: ${colors.text};
  --background-color: ${colors.background};
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  
  /* Color Variations */
  --primary-light: ${colors.primary}80;
  --primary-lighter: ${colors.primary}40;
  --primary-lightest: ${colors.primary}10;
  --secondary-light: ${colors.secondary}80;
  --secondary-lighter: ${colors.secondary}40;
  --secondary-lightest: ${colors.secondary}10;
  --accent-light: ${colors.accent}80;
  --accent-lighter: ${colors.accent}40;
  --accent-lightest: ${colors.accent}10;
  
  /* Gradients */
  --primary-gradient: linear-gradient(135deg, ${colors.primary}, ${colors.secondary});
  --secondary-gradient: linear-gradient(135deg, ${colors.secondary}, ${colors.accent});
  --accent-gradient: linear-gradient(135deg, ${colors.accent}, ${colors.primary});
  
  /* Shadows */
  --primary-shadow: 0 10px 20px -10px ${colors.primary}80;
  --secondary-shadow: 0 10px 20px -10px ${colors.secondary}80;
  --accent-shadow: 0 10px 20px -10px ${colors.accent}80;
  --card-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  /* Glass Effect */
  --glass-background: ${colors.background}95;
  --glass-border: rgba(255, 255, 255, 0.1);
  
  /* Dark Mode Adjustments */
  --dark-bg: #0f172a;
  --dark-text: #ffffff;
}

/* Common Components */
.button-primary {
  background: var(--primary-gradient);
  color: white;
  box-shadow: var(--primary-shadow);
}

.button-secondary {
  background-color: var(--primary-lightest);
  color: var(--primary-color);
}

.card {
  background-color: var(--glass-background);
  border: 1px solid var(--glass-border);
  box-shadow: var(--card-shadow);
}

.heading-gradient {
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`;

  const tailwindConfig = `
module.exports = {
  theme: {
    extend: {
      colors: {
        text: '${colors.text}',
        background: '${colors.background}',
        primary: {
          DEFAULT: '${colors.primary}',
          light: '${colors.primary}80',
          lighter: '${colors.primary}40',
          lightest: '${colors.primary}10',
        },
        secondary: {
          DEFAULT: '${colors.secondary}',
          light: '${colors.secondary}80',
          lighter: '${colors.secondary}40',
          lightest: '${colors.secondary}10',
        },
        accent: {
          DEFAULT: '${colors.accent}',
          light: '${colors.accent}80',
          lighter: '${colors.accent}40',
          lightest: '${colors.accent}10',
        },
      },
      gradientColorStops: {
        'primary-start': '${colors.primary}',
        'primary-end': '${colors.secondary}',
        'secondary-start': '${colors.secondary}',
        'secondary-end': '${colors.accent}',
        'accent-start': '${colors.accent}',
        'accent-end': '${colors.primary}',
      },
      boxShadow: {
        'primary': '0 10px 20px -10px ${colors.primary}80',
        'secondary': '0 10px 20px -10px ${colors.secondary}80',
        'accent': '0 10px 20px -10px ${colors.accent}80',
      },
      backgroundColor: {
        'glass': '${colors.background}95',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
}
`;

  const scssVariables = `
// Color Palette Variables
$text: ${colors.text};
$background: ${colors.background};
$primary: ${colors.primary};
$secondary: ${colors.secondary};
$accent: ${colors.accent};

// Color Variations
$primary-light: #{$primary}80;
$primary-lighter: #{$primary}40;
$primary-lightest: #{$primary}10;
$secondary-light: #{$secondary}80;
$secondary-lighter: #{$secondary}40;
$secondary-lightest: #{$secondary}10;
$accent-light: #{$accent}80;
$accent-lighter: #{$accent}40;
$accent-lightest: #{$accent}10;

// Mixins
@mixin glass-effect {
  background-color: rgba($background, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@mixin primary-gradient {
  background: linear-gradient(135deg, $primary, $secondary);
}

@mixin secondary-gradient {
  background: linear-gradient(135deg, $secondary, $accent);
}

@mixin text-gradient {
  background: linear-gradient(135deg, $primary, $secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
}

// Example Usage
.button-primary {
  @include primary-gradient;
  color: white;
  box-shadow: 0 10px 20px -10px rgba($primary, 0.5);
}

.card {
  @include glass-effect;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
`;

  const jsonColors = `
{
  "colors": {
    "text": "${colors.text}",
    "background": "${colors.background}",
    "primary": "${colors.primary}",
    "secondary": "${colors.secondary}",
    "accent": "${colors.accent}"
  },
  "variations": {
    "primary": {
      "default": "${colors.primary}",
      "light": "${colors.primary}80",
      "lighter": "${colors.primary}40",
      "lightest": "${colors.primary}10"
    },
    "secondary": {
      "default": "${colors.secondary}",
      "light": "${colors.secondary}80",
      "lighter": "${colors.secondary}40",
      "lightest": "${colors.secondary}10"
    },
    "accent": {
      "default": "${colors.accent}",
      "light": "${colors.accent}80",
      "lighter": "${colors.accent}40",
      "lightest": "${colors.accent}10"
    }
  },
  "gradients": {
    "primary": "linear-gradient(135deg, ${colors.primary}, ${colors.secondary})",
    "secondary": "linear-gradient(135deg, ${colors.secondary}, ${colors.accent})",
    "accent": "linear-gradient(135deg, ${colors.accent}, ${colors.primary})"
  }
}
`;

  const handleCopy = async (type: 'css' | 'tailwind' | 'scss' | 'json') => {
    let content;
    switch (type) {
      case 'css':
        content = cssVariables;
        break;
      case 'tailwind':
        content = tailwindConfig;
        break;
      case 'scss':
        content = scssVariables;
        break;
      case 'json':
        content = jsonColors;
        break;
    }
    await navigator.clipboard.writeText(content);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const applyRecommendation = (recommendation: typeof colorRecommendations[0]) => {
    Object.entries(recommendation.colors).forEach(([key, value]) => {
      setColor(key as keyof typeof colors, value as string);
    });
    setShowSchemeMenu(false);
  };

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    
    if (newDarkModeState) {
      // Switching to dark mode
      setColor('text', '#ffffff');
      setColor('background', '#0f172a');
    } else {
      // Switching to light mode
      setColor('text', '#1a1a1a');
      setColor('background', '#ffffff');
    }
  };

  // Helper function to determine if a color is light or dark
  const isLightColor = (color: string) => {
    // Convert hex to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    // Calculate brightness (YIQ equation)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    
    // Return true if the color is light (brightness > 128)
    return brightness > 128;
  };

  // Define default colors to reset to
  const resetToDefaultColors = () => {
    // Using the first color recommendation as the default
    const defaultColors = colorRecommendations[0].colors;
    Object.entries(defaultColors).forEach(([key, value]) => {
      setColor(key as keyof typeof colors, value as string);
    });
  };

  return (
    <>
      {showExport && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[60] p-4 animate-fade-in">
          <div 
            className="glass-effect rounded-xl p-8 w-full max-w-2xl shadow-2xl border border-white/10"
            style={{ 
              backgroundColor: `${colors.background}95`,
            }}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold" style={{ color: colors.primary }}>
                Export Colors
              </h3>
              <button
                onClick={() => setShowExport(false)}
                className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors"
                style={{ color: colors.text }}
              >
                ×
              </button>
            </div>

            <div className="flex gap-2 mb-6 flex-wrap">
              <button 
                className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${exportFormat === 'css' ? 'bg-primary/20' : 'hover:bg-white/5'}`}
                style={{ color: exportFormat === 'css' ? colors.primary : colors.text }}
                onClick={() => setExportFormat('css')}
              >
                CSS
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${exportFormat === 'scss' ? 'bg-primary/20' : 'hover:bg-white/5'}`}
                style={{ color: exportFormat === 'scss' ? colors.primary : colors.text }}
                onClick={() => setExportFormat('scss')}
              >
                SCSS
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${exportFormat === 'tailwind' ? 'bg-primary/20' : 'hover:bg-white/5'}`}
                style={{ color: exportFormat === 'tailwind' ? colors.primary : colors.text }}
                onClick={() => setExportFormat('tailwind')}
              >
                Tailwind CSS
              </button>
              <button 
                className={`px-4 py-2 rounded-md text-sm transition-all duration-300 ${exportFormat === 'json' ? 'bg-primary/20' : 'hover:bg-white/5'}`}
                style={{ color: exportFormat === 'json' ? colors.primary : colors.text }}
                onClick={() => setExportFormat('json')}
              >
                JSON
              </button>
            </div>

            {/* Code display */}
            <pre className="bg-white/5 rounded-md p-4 overflow-x-auto text-sm font-mono max-h-96 overflow-y-auto"
                 style={{ color: colors.text }}>
              {exportFormat === 'css' && cssVariables.trim()}
              {exportFormat === 'tailwind' && tailwindConfig.trim()}
              {exportFormat === 'scss' && scssVariables.trim()}
              {exportFormat === 'json' && jsonColors.trim()}
            </pre>

            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => handleCopy(exportFormat)}
                className="px-4 py-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2"
                style={{ 
                  backgroundColor: `${colors.primary}20`, 
                  color: colors.primary 
                }}
              >
                <Copy size={14} />
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>
              
              {copied && (
                <div className="text-sm flex items-center gap-2 text-green-500">
                  <Check size={14} />
                  Copied to clipboard!
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Color Scheme Menu */}
      {showSchemeMenu && (
        <div className="fixed bottom-[60px] left-1/2 transform -translate-x-1/2 z-[9999] bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/10 w-[28rem] animate-scale-in">
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
            <div className="text-sm font-medium flex items-center gap-2" style={{ color: colors.primary }}>
              <Sparkles size={14} />
              Color Schemes
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowSchemeMenu(false)}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors"
                style={{ color: colors.text }}
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-3 grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto">
            {colorRecommendations.map((recommendation) => (
              <button
                key={recommendation.name}
                onClick={() => applyRecommendation(recommendation)}
                className="p-3 rounded-lg hover:bg-white/5 transition-all duration-300 flex flex-col gap-2 text-left group"
              >
                <span className="text-sm font-medium" style={{ color: colors.text }}>{recommendation.name}</span>
                <div className="flex gap-1.5">
                  {Object.entries(recommendation.colors)
                    .filter(([key]) => key !== 'isDarkMode')
                    .map(([key, value]) => (
                      <div 
                        key={key}
                        className="w-8 h-8 rounded transition-transform group-hover:scale-110"
                        style={{ 
                          backgroundColor: value as string,
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                      />
                    ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Color Harmony Menu */}
      {showHarmonyMenu && (
        <div className="fixed bottom-[60px] left-1/2 transform -translate-x-1/2 z-[9999] bg-white/10 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-white/10 w-80 animate-scale-in">
          <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
            <div className="text-sm font-medium flex items-center gap-2" style={{ color: colors.primary }}>
              <Palette size={14} />
              Color Harmony
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setShowHarmonyMenu(false)}
                className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white/10 transition-colors"
                style={{ color: colors.text }}
              >
                ×
              </button>
            </div>
          </div>

          <div className="p-3">
            {['monochromatic', 'analogous', 'complementary', 'split-complementary', 'triadic', 'tetradic'].map((harmony) => (
              <button
                key={harmony}
                onClick={() => {
                  generateHarmony(harmony as 'monochromatic' | 'analogous' | 'complementary' | 'split-complementary' | 'triadic' | 'tetradic');
                  setShowHarmonyMenu(false);
                }}
                className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-3"
                style={{ color: colors.text }}
              >
                <div 
                  className="w-6 h-6 rounded"
                  style={{ 
                    background: harmony === 'complementary' ? `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` : 
                              harmony === 'analogous' ? `linear-gradient(135deg, ${colors.primary}, ${colors.accent})` :
                              harmony === 'triadic' ? `conic-gradient(${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary})` :
                              harmony === 'monochromatic' ? `linear-gradient(135deg, ${colors.primary}90, ${colors.primary}30)` :
                              harmony === 'tetradic' ? `conic-gradient(${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.text}, ${colors.primary})` :
                              `linear-gradient(135deg, ${colors.primary}, ${colors.accent})`
                  }}
                ></div>
                <span className="capitalize">{harmony.replace('-', ' ')}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Color Controls */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className={`backdrop-blur-xl border-t ${isDarkMode ? 'border-white/5 bg-black/60' : 'border-white/10 bg-white/10'} py-4 px-5 shadow-lg transition-all duration-300`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-5">
              {/* Top row - tools with subtle animation */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <button
                    onClick={scrollToTop}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center"
                    style={{ color: colors.text }}
                    aria-label="Scroll to top"
                  >
                    <ArrowUp size={16} />
                  </button>
                  <button
                    onClick={resetToDefaultColors}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center"
                    style={{ color: colors.text }}
                    aria-label="Reset colors"
                  >
                    <RefreshCw size={16} />
                  </button>
                  <button
                    onClick={undo}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center"
                    style={{ color: colors.text }}
                  >
                    <Undo2 size={16} />
                  </button>
                  <button
                    onClick={redo}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center"
                    style={{ color: colors.text }}
                  >
                    <Redo2 size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowSchemeMenu(!showSchemeMenu)}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center relative"
                    style={{ color: colors.text }}
                  >
                    <Sparkles size={16} />
                    {showSchemeMenu && <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" style={{ backgroundColor: colors.primary }}></span>}
                  </button>
                  <button
                    onClick={() => setShowHarmonyMenu(!showHarmonyMenu)}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center relative"
                    style={{ color: colors.text }}
                  >
                    <Palette size={16} />
                    {showHarmonyMenu && <span className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" style={{ backgroundColor: colors.secondary }}></span>}
                  </button>
                  <button
                    onClick={ensureAccessibility}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center"
                    style={{ color: colors.text }}
                  >
                    <EyeIcon size={16} />
                  </button>
                  <button
                    onClick={randomizeColors}
                    className="p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center"
                    style={{ color: colors.text }}
                  >
                    <Shuffle size={16} />
                  </button>
                  <button
                    onClick={() => setShowExport(true)}
                    className={`p-2 rounded-full transition-all hover:bg-white/10 flex items-center justify-center ${isDarkMode ? 'bg-white/5' : ''}`}
                    style={{ color: colors.text }}
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>

              {/* Bottom row - colors */}
              <div className="grid grid-cols-5 gap-4">
                {[
                  { name: 'Text', key: 'text' },
                  { name: 'Background', key: 'background' },
                  { name: 'Primary', key: 'primary' },
                  { name: 'Secondary', key: 'secondary' },
                  { name: 'Accent', key: 'accent' },
                ].map(item => (
                  <div key={item.key} className="flex flex-col gap-2">
                    <label className={`text-xs font-medium transition-all duration-300 ${isDarkMode ? 'text-white/70' : 'text-black/70'}`}>
                      {item.name}
                    </label>
                    
                    <input
                      type="color"
                      value={colors[item.key as keyof typeof colors] as string}
                      onChange={(e) => setColor(item.key as keyof typeof colors, e.target.value)}
                      className="sr-only"
                      id={`color-${item.key}`}
                    />
                    <div
                      onClick={() => document.getElementById(`color-${item.key}`)?.click()}
                      className="w-full h-16 rounded-md cursor-pointer transition-all hover:scale-105 flex items-center justify-center relative group overflow-hidden"
                      style={{
                        backgroundColor: colors[item.key as keyof typeof colors] as string,
                        boxShadow: isDarkMode ? 
                          `0 4px 12px rgba(0,0,0,0.5), inset 0 1px 0 ${item.key === 'background' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.15)'}` : 
                          `0 2px 8px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.5)`
                      }}
                    >
                      {isDarkMode && (
                        <div className="text-xs font-medium px-2 py-1 rounded text-white mix-blend-difference">
                          {colors[item.key as keyof typeof colors] as string}
                        </div>
                      )}
                      
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                        <div className={`px-2 py-1 rounded text-xs font-medium shadow-md ${isLightColor(colors[item.key as keyof typeof colors] as string) ? 'bg-black/70 text-white' : 'bg-white/70 text-black'}`}>
                          {colors[item.key as keyof typeof colors] as string}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ColorPalette }