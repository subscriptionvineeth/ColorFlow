import tinycolor from 'tinycolor2';

export interface ColorScheme {
  text: string;
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  isDarkMode: boolean;
}

export interface ColorHistory {
  past: ColorScheme[];
  future: ColorScheme[];
}

export const defaultColors: ColorScheme = {
  text: '#1a1a1a',
  background: '#ffffff',
  primary: '#3b82f6',
  secondary: '#10b981',
  accent: '#8b5cf6',
  isDarkMode: false,
};

export const validateContrast = (background: string, text: string): boolean => {
  const contrast = tinycolor.readability(background, text);
  return contrast >= 4.5; // WCAG AA standard
};